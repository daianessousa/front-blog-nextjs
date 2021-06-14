import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show them */}
      <section className="PostsBlog">
        <div>
          <h2>Publicações</h2>
          <p> All Posts → </p>
        </div>
        {posts &&
          posts.map((post) => (
            <Link href={`/${post.Slug}`} key={post.id}>
              <a>
                <h2>{post.Title}</h2>
              </a>
            </Link>
          ))}
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch('https://blog-daiane.herokuapp.com/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}
