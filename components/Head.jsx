import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title || 'asyncjake'}</title>
      <meta
        name="description"
        content="Jake is a passionate full stack engineer building sites with efficient and performant infrastructure"
      />
      <meta
        name="keywords"
        content="asyncjake, jake, jake from state farm, full stack developer portfolio, jake developer, systems engineer portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Jake's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack engineer building cool stuff and sometimes helpful stuff."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://asyncjake.dev" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;
