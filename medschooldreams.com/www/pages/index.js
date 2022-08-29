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
        {/* <div className="flex-grow bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 pb-40"> */}
        <div className="flex-grow pb-40" style={{background: "#002244"}}>
          <div className="flex-col text-center text-white pt-10">

            <div className="py-10">

              <img class="object-scale-down mx-auto" src="/logo_transparent.png"></img>

              <h1 className="text-3xl"> Welcome to <a className="hover:text-yellow-300" href="https://www.instagram.com/medschooldreams/">@medschooldreams</a>  </h1>

              <p className="text-base"> Get started by checking out our online community on Facebook or following us on Instagram. </p>

            </div>

            <div className="my-5 space-y-5">
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex-shrink-0 max-w-md flex mx-auto">
                <a href="https://www.facebook.com/groups/813456532393642">
                    {/* <img class="h-12 w-12 float-left" src="/facebook-logo.png"></img> */}
                    <h3 className="text-xl font-medium">Medical School Admissions: From Application to Acceptance</h3>
                    <p className="">Join 3,000 other pre-medicine and medical students in our online Facebook Community.</p>
                </a>
              </div>
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex-shrink-0 max-w-md flex mx-auto">
                <a href="https://www.instagram.com/medschooldreams/">
                  {/* <img class="h-12 w-12 float-left" src="/instagram-logo.png"></img> */}
                    <h3 className="text-xl font-medium">@medschooldreams</h3>
                    <p className="">Find pre-medicine help and community engagement on our instagram channel.</p>
                </a>
              </div>
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex-shrink-0 max-w-md flex mx-auto">
                <a href="https://www.skillshare.com/site/join?teacherRef=413596490&via=teacher-referral&utm_campaign=teacher-referral&utm_source=ShortUrl&utm_medium=teacher-referral&t=Medical-School-Admissions-From-Application-to-Acceptance&sku=1248826481" >
                  <h3 className="text-xl font-medium">SkillShare Course on Medical School Admissions</h3>
                  <p></p>
                </a>
              </div>
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex-shrink-0 max-w-md flex mx-auto">
                <a
                  href="https://www.fiverr.com/keljack2012/give-a-mock-medical-school-interview-penn-med-student?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=k2l8ow" >
                  <h3 className="text-xl font-medium">Fiver Mock Interviews</h3>
                  <p>The medical school interview is one of the key determinants of an applicant's success in the application cycle.</p>
                </a>
              </div>
            </div>

            <div className="py-10">
              <h1 className="text-3xl p-10">Founders</h1>
              <p>Check out the Medschool Dreams Founders on Instagram. </p>
            </div>

            <div className="container mx-auto flex flex-row space-x-5 justify-center">
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex">
                <a href="https://www.instagram.com/eljack101/" >
                  <h3 className="text-xl font-medium">Khalid Eljack</h3>
                  <p>MS1 Perelman SOM</p>
                </a>
              </div>
              <div className="hover:bg-white hover:text-black p-5 border-2 border-white rounded-sm flex">
                <a href="https://www.instagram.com/deepakdaroach/" >
                  <h3 className="text-xl font-medium">Deepak Daroach</h3>
                  <p>MS1 MCW-Green Bay</p>
                </a>
              </div>
            </div>

          </div>
        </div>

        <footer className="text-center py-8 border-t-2 bg-gray-100">
          <a
            href="https://daroach.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website powered by daroach.net
        </a>
        </footer>
      </main>
    </div>
  )
}
