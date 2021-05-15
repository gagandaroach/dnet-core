import Head from 'next/head'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>medschooldreams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <h1 className="text-3xl"> Welcome to <a href="https://www.instagram.com/medschooldreams/">@medschooldreams</a>  </h1>

          <p className="text-base"> Get started by checking out our online community on Facebook or following us on Instagram. </p>

          <div>
            <a href="https://www.facebook.com/groups/813456532393642" >
              <h3>Medical School Admissions: From Application to Acceptance</h3>
              <p>Join 3,000 other pre-medicine and medical students in our Facebook Community.</p>
            </a>

            <a href="https://www.skillshare.com/site/join?teacherRef=413596490&via=teacher-referral&utm_campaign=teacher-referral&utm_source=ShortUrl&utm_medium=teacher-referral&t=Medical-School-Admissions-From-Application-to-Acceptance&sku=1248826481" >
              <h3>SkillShare Course on Medical School Admissions</h3>
              <p></p>
            </a>

            <a
              href="https://www.fiverr.com/keljack2012/give-a-mock-medical-school-interview-penn-med-student?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=k2l8ow" >
              <h3>Fiver Mock Interviews</h3>
              <p>The medical school interview is one of the key determinants of an applicant's success in the application cycle.</p>
            </a>
          </div>

          <h1 className="text-xl">Founders</h1>
          <div >
            <a href="https://www.instagram.com/eljack101/" >
              <h3>Khalid Eljack</h3>
              <p>MS1 Perelman SOM</p>
            </a>
            <a href="https://www.instagram.com/deepakdaroach/" >
              <h3>Deepak Daroach</h3>
              <p>A bad ass motherfucker.</p>
            </a>
          </div>
        </div>
        <footer className="text-center py-8 border-t-2">
          <a
            href="https://daroach.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}daroach.net
        </a>
        </footer>
      </main>


    </div>
  )
}
