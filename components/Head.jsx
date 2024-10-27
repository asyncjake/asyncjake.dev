import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nitin Ranganath is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="jakethedev, jake, jake from state farm, full stack developer portfolio, jake developer, systems engineer portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Nitin Ranganath's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building ."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://jakethedev.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'jakethedev',
};
