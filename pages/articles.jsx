import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
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
  const articlesExist = articles && articles.length > 0;
  return (
    <>
      <h2>
        Recent Posts:
      </h2>
      <div className={styles.container}>
        {/* TODO: article structure refactor, use next content? mdc? */}
        {/* TODO: article view page: what do? design? wing it? */}
        {articlesExist && articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
        {!articlesExist && (
          <h4>Coming soon, many drafts but only so much time to edit...</h4>
        )}
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
    props: { articles: [] },
  };
}

export default ArticlesPage;
