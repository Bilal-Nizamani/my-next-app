// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
// pages/_app.js
import '../styles/fontawesome.css';
import '../styles/globals.css'; // Your main CSS file with Tailwind CSS


// pages/_app.js
import Head from "next/head";
import "../styles/globals.css"; // You can import your global styles here
import Layout from "../components/navbar/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hira</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
