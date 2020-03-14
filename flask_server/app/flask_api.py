# Flask server for api.daroach.net
#
# author: <gagandaroach@gmail.com>

import configparser
from flask import Flask, request, redirect, make_response, jsonify
from flask_basicauth import BasicAuth
from flask_cors import CORS
from sql_client import SqlClient

# GLOBALS

SERVER_URL = 'https://api.daroach.net/'

# MEMBERS

# core flask app
app = Flask(__name__)
CORS(app)

config = configparser.ConfigParser()
config.read('sql_info.txt')
app.config['BASIC_AUTH_USERNAME'] = config.get("REST", "user")
app.config['BASIC_AUTH_PASSWORD'] = config.get("REST", "pass")
del config
# basic auth wrapper
basic_auth = BasicAuth(app)

# sql client for daroach.net python object
client = SqlClient()


# API ROUTES

@app.route('/')
def hello_world():
    # redirect to info page on main site
    return redirect("https://daroach.net/api")

@app.route(f'/hit/count', methods=['POST'])
def get_hits_daroachnet():
    info = request.json
    print('info: ', info)
    count = -1
    if info is not None:
        count = client.hit_count(
            page=info.get('page', 'NULL'),
        )
    else:
        count = client.hit_count()
    return jsonify({'count': count}), 200


@app.route(f'/hit', methods=['POST'])
@basic_auth.required
def post_hits_daroachnet():
    info = request.json
    hit_id = -1
    if info is not None:
        hit_id = client.add_hit(
            page=info.get('page', 'NULL'),
            visitor_id=info.get('visitor_id', '-1')
        )
    else:
        hit_id = client.add_hit()  # default values, because no payload in post request
    print('/hit post request json: ', info)
    return jsonify({'id': hit_id}), 200


# @app.route(f'/visitor/count', methods=['POST'])
# def get_visitor_daroachnet():
#     return jsonify({'count': client.visitor_count()}), 200


# @app.route(f'/visitor', methods=['POST'])
# @basic_auth.required
# def post_visitor_daroachnet():
#     info = request.json
#     visitor_id = -1
#     if info is not None:
#         visitor_id = client.add_visitor(
#             platform=info.get('platform', 'NULL'),
#             userAgent=info.get('userAgent', 'NULL'),
#             language=info.get('language', 'NULL'),
#             cookie_enabled=info.get('cookie_enabled', '0')
#         )
#     else:
#         visitor_id = client.add_visitor()
#     print('/visitor post request json: ', info)
#     return jsonify({'id': visitor_id}), 200

@app.route('/error/<string:phrase>/<int:code>')
def error(phrase, code):
    return make_response(f'API ERROR: {phrase} \nIf the problem persists, file a bug at the source code link below.', code)

# MAIN - EXECUTE API SERVER


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
