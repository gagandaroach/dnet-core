# Wrapper Around the Msql Python Library
# Specialized for daroach.net
#
# author: <gagandaroach@gmail.com>

import configparser
import mysql.connector as mysql
import datetime

class SqlClient:

    def __init__(self):
        config = configparser.ConfigParser()
        config.read('sql_info.txt')
        self.mariadb_connection_settings = {
            'user': config.get("sql","user"),
            'password': config.get("sql","pass"),
            'host': config.get("sql","host"),
            'database': config.get("sql","database"),
            'raise_on_warnings': True
        }
        del config
        self.TABLE_VISITOR = 'visitor'
        self.TABLE_HIT = 'hit'

    # SQL Calls

    def list_tables(self):
        print('show tables')
        return self.execute_select('Show Tables;')

    def visitor_count(self):
        res = self.execute_select(
            f'Select count(*) from {self.TABLE_VISITOR};')
        return str(res[0][0])

    def add_visitor(self, platform='NULL', userAgent='NULL', language='NULL'):
        sql = "INSERT INTO visitor (platform, userAgent, language, id, time) VALUES (%s, %s, %s, %s, %s)"
        timestamp = datetime.datetime.now()
        val = (platform, userAgent, language, 0, timestamp)
        res = self.execute_post(sql, val)
        return res

    def add_hit(self, page='NULL', visitor_id='-1'):
        if page is None:
            page = 'NULL'
        if visitor_id is None:
            visitor_id='-1'
        sql = "INSERT INTO hit (id, page, visitor_id, timestamp) VALUES (%s, %s, %s, %s)"
        timestamp = datetime.datetime.now()
        val = (0, page, visitor_id, timestamp)
        res = self.execute_post(sql, val)
        return res

    def hit_count(self, page=None):
        res = None
        if page is None:
            res = self.execute_select(
                f'SELECT count(*) FROM {self.TABLE_HIT}')
        else:
            res = self.execute_select(
                f'SELECT count(*) FROM {self.TABLE_HIT} WHERE page = "{page}"')
        return str(res[0][0])

    # wiring

    def execute_post(self, sql, val):
        mariadb_connection = mysql.connect(**self.mariadb_connection_settings)
        cursor = mariadb_connection.cursor()
        cursor.execute(sql, val)
        res = cursor.lastrowid
        cursor.close()
        mariadb_connection.commit()
        mariadb_connection.close()
        return res

    def execute_select(self, command):
        mariadb_connection = mysql.connect(**self.mariadb_connection_settings)
        cursor = mariadb_connection.cursor()
        cursor.execute(command)
        res = cursor.fetchall()
        cursor.close()
        mariadb_connection.commit()
        mariadb_connection.close()
        return res

def run_tests(client):
    print('CALLING LIST TABLES ON TABLE')
    print(sql.list_tables())

    print('CALLING VISITOR_COUNT')
    print(sql.visitor_count())

    print('REGISTERING A NEW VISITOR')
    print('id: ', sql.add_visitor())

    print('CALLING VISITOR_COUNT AFTER AN INSERT')
    print(sql.visitor_count())

    print('CALLING HIT_COUNT')
    print(sql.hit_count())

    print('ADDING A HIT')
    print('id: ', sql.add_hit())

    print('CALLING HIT_COUNT AFTER AN INSERT')
    print(sql.hit_count())

if __name__ == "__main__":
    print('EXECUTING SQL CLIENT TESTS\n')
    sql = SqlClient()

    run_tests(sql)
    print('\nDONE WITH SQL CLIENT TESTS')
