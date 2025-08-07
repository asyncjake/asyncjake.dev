const AboutPage = () => {
  return (
    <>
      <h2>About Me</h2>
      <br />
      <p>Hi! I'm Jake, an experienced full stack engineer with a Bachelor's degree in Computer Science from Boise State. I've contributed to a wide range of projects over 9+ years of professional engineering experience, ranging from React/Redux and UI design to Puppet and systems engineering for various clouds (notably on-prem and AWS). Those skills and a forever-student mentality combine with my excellent communication and soft skills to make me a great addition to any team.</p>
      <br />
      <p>Most of my skills revolve around systems - not just linux and CICD systems, but the systems that enable people to do their best. I thrive in environments where I get to make a direct difference to the people around me, and I'm currently looking for an opportunity to take on some big projects, own something significant, and make life better for the people that rely on my work as well as the people that share my workplace. I have no problem staying focused despite our "age of distraction" (thanks meditation!), and I love finding and completing bonus projects that improve life for my team. Not just the engineers, the folks in support and product too!</p>
      <br />
      <p>I'm a great collaborator, a rock solid dev across the stack, and I'm able to make good decisions at any scope. From customer-first thinking to choosing the right architecture for scale and fault tolerance, all the way down to knowing when to use AI code and how to make the right tradeoffs in a buy-vs-build decision, my breadth of experience includes a decent amount of depth. I pride myself in excellent problem solving and my ability to flexibly handle anything thrown my way, I always take the tougher problem when given the choice.</p>
      <br />
      <p>Outside of technology, I like to get outdoors on a bike or a snowboard, and Boise is excellent for both! I love practicing photography on a good (or bad) road trip, and I've been honing music and video production skills for many years to enable the dream of making some incredible music videos some day.</p>
      <br />
      <p>So if you're reading this with my resume in hand, reach out! I'm always excited to chat about awesome opportunities!</p>
      <br />
      <p>- J</p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
