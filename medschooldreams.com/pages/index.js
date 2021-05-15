import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>medschooldreams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://www.instagram.com/medschooldreams/">@medschooldreams</a>
        </h1>

        <p className="description">
          Get started by checking out our online community on Facebook or following us on Instagram.
        </p>

        <div className="grid">
          <a href="https://www.facebook.com/groups/813456532393642" className="card">
            <h3>Medical School Admissions: From Application to Acceptance</h3>
            <p>Join 3,000 other pre-medicine and medical students in our Facebook Community.</p>
          </a>

          <a href="https://www.skillshare.com/site/join?teacherRef=413596490&via=teacher-referral&utm_campaign=teacher-referral&utm_source=ShortUrl&utm_medium=teacher-referral&t=Medical-School-Admissions-From-Application-to-Acceptance&sku=1248826481" className="card">
            <h3>SkillShare Course on Medical School Admissions</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://www.fiverr.com/keljack2012/give-a-mock-medical-school-interview-penn-med-student?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=k2l8ow"
            className="card"
          >
            <h3>Fiver Mock Interviews</h3>
            <p>The medical school interview is one of the key determinants of an applicant's success in the application cycle.</p>
          </a>
        </div>
          <h1 className="description">Founders</h1>
        <div className="grid" >
          <a href="https://www.instagram.com/eljack101/" className="card">
            <h3>Khalid Eljack</h3>
            <p>MS1 Perelman SOM</p>
          </a>
          <a href="https://www.instagram.com/deepakdaroach/" className="card">
            <h3>Deepak Daroach</h3>
            <p>A bad ass motherfucker.</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://daroach.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}daroach.net
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
