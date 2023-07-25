import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import AvatarSvg from "@/components/AvatarSvg";

const Preview = () => {
  const router = useRouter();
  const { username, skinColor, spacecraft } = router.query;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    router.push(`/`);
  };

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
        <form onSubmit={onHandleSubmit} className={styles.PreviewComp}>
          {username && <h1>Welcome, {username}!</h1>}
          {skinColor && (
            <div>
              <span>Avatar selezionato</span>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundColor: skinColor,
                }}
              ><AvatarSvg/></div>
            </div>
          )}
          {spacecraft && (
            <div>
              <span>Navicella selezionata:</span>
              <img
                src={`/path/to/spacecraft/${spacecraft}.png`}
                alt="Selected spacecraft"
              />
            </div>
          )}
          <button onClick={onHandleSubmit}>Continua</button>
        </form>
      </main>
    </>
  );
};

export default Preview;
