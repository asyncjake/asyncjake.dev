const AboutPage = () => {
  return (
    <>
      <h2>About Jake</h2>
      <br />
      <p>A short summary of education and appropriate experience will live here soon, but just in case someone needs the one-sentence summary:</p>
      <br />
      <p>I'm an experienced full stack engineer with a B.S. in Computer science, 10+ years of engineering experience (ranging from React and UI design to Puppet and systems engineering), and those skills combined with my lifelong pursuit of being a great communicator and mentor makes me a great fit for almost any team, as long as I can find a sense of purpose in the work we do.</p>
      <br />
      <p>So if you're reading this with my resume in hand, let's chat, maybe I can help you out!</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
