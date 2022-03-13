import Head from "next/head";
import Link from "next/link";
import axios from "axios";

function Index(props) {
  const { data } = props;

  return (
    <div>
      <Head>
        <title>{data.name}</title>
        <meta property="og:title" content={data.name} key="title" />
      </Head>
      <h1>{data.name}</h1>
      <p>{`Page: ${data.page}`}</p>
      <Link href="/organization">
        <a>Go to Organization Page</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3010/index/initial-data");

  return {
    props: {
      data,
    },
  };
}

export default Index;
