const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p></p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
