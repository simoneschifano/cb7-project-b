import Head from "next/head";

import styles from "@/styles/Home.module.css";



export default function Home() {


  return (
    <>
      <Head>
        <title>Cb-7 Final Project gruppo-B</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>
      <main className={styles.main}>
        Ciao Sono la home
      </main>
    </>
  );
}



//Funzione per renderizzare sempre la rotta
export async function getServerSideProps({ req, res }) {
  const user = req.user || req.cookies.user;

  if (!user) {
    res.writeHead(302, { Location: "/login" });
    res.end();
  }

  return {
    props: {
      
    },
  };
}
