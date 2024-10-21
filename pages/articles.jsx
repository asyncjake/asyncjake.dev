import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts:
      </h3>
      <div className={styles.container}>
        {/* TODO: article structure refactor, use next content? mdc? */}
        {/* TODO: article view page: what do? design? wing it? */}
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
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
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://dev.to/api/articles/me/published?per_page=6',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY,
      },
    }
  );

  {/* TODO: article structure refactor, use next content? mdc? */ }
  const data = await res.json();

  return {
    props: { title: 'Articles', articles: data },
    revalidate: 60,
  };
}

export default ArticlesPage;
