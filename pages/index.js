import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cowboy TV - it's not TV, it's Cowboy TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center w-screen h-screen">

        <img src="/cowboytvtv3.png" className="z-20 object-cover mx-auto shadow-inner" style={{ width: '500px', height: '500px'}} />
        <img className="absolute z-0" style={{height: '250px', width: '250px', top: '50%', transform: 'translateY(-59%)', overflow: 'hidden'}} src="/campfire.gif" />
        <div className="absolute z-10 w-full h-full crt" style={{ height: '250px', width: '250px', backgroundColor: 'rgba(255,255,255,0.2)'}}>
        &nbsp;
        </div>

      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #000;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
