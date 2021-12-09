import React from "react";

function Home(props) {
  const { nomes } = props
  return (
    <>
    </>
  );
}

export async function getStaticProps(ctx) {
  const nomes = ["luci", "ana"];
  return {
    props: {
      nomes,
    },
  };
}

export default Home;
