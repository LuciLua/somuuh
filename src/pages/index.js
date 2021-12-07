import React from "react";

function Home(props) {
  return (
    <>
      <h1>Hello, Home!</h1>
      <ul>
        {props.nomes.map((n) => (
          <li>{n}</li>
        ))}
      </ul>
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
