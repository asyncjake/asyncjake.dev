import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ title, articles }) => {
  /*
  ARTICLE EXPECTED STRUCTURE {
    url: URL,
    cover_image: IMGSRC, (300w 150h in card)
    title: STRING,
    description: STRING
    // CAN REMOVE
    page_views_count: STR|NUM,
    public_reactions_count: STR|NUM,
    comments_count: STR|NUM,
  }
  */
  return (
    <>
      <h3>
        Recent Posts:
      </h3>
      <div className={styles.container}>
        {/* TODO: article structure refactor, use next content? mdc? */}
        {/* TODO: article view page: what do? design? wing it? */}
        (articles?.length && {
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        })
        (!articles && {
          <h5>Come back soon!</h5>
        })
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  // const res = await fetch(
  //   'https://dev.to/api/articles/me/published?per_page=6',
  //   {
  //     headers: {
  //       'api-key': process.env.DEV_TO_API_KEY,
  //     },
  //   }
  // );

  // TODO: article structure refactor, use next content? mdc?

  return {
    props: { title: 'Articles', articles: [] },
  };
}

export default ArticlesPage;
