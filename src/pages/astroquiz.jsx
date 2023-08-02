import Head from "next/head";
import Quiz from "@/components/Quiz";

export default function Astroquiz({ data }) {
  return (
    <>
      <Head>
        <title>Spacemony - Astroquiz</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>

      <main>
        <Quiz data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://api.npoint.io/92fd30e95786d9a41d9a`);
  const data = res.status === 200 ? await res.json() : {};

  return { props: { data } };
}
