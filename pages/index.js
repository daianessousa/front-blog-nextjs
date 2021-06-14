import Link from 'next/link';

export default function Home({ posts, about }) {
  return (
    <div>
      <section className="initial-home">
        <div className="BoxAvatarImage">
          <img
            className="AvatarImg"
            src="https://avatars.githubusercontent.com/u/52220304?v=4"
            alt="foto-daiane"
          />
        </div>
        <div className="BoxDetailsContact">
          <p> {about[0].Apresentation} </p>
          <div className="BoxLinks">
            <a className="LinkIco" href="https://github.com/daianessousa">
              <img src="/github.svg" alt="svg git" />
            </a>
            <a
              className="LinkIco"
              href="https://www.linkedin.com/in/daianessousa/"
            >
              <img src="/linkedin.svg" alt="svg git" />
            </a>
            <a
              className="LinkIco"
              href="https://api.whatsapp.com/send?phone=5598984686460&text=Ol%C3%A1%20Daiane."
            >
              <img src="/whatsapp.svg" alt="svg git" />
            </a>
          </div>
          <p className="Divisor"> </p>
        </div>
      </section>
      {/* loop over the posts and show them */}
      <section className="PostsBlog">
        <div>
          <h2>Posts Recentes</h2>
          <p> All Posts → </p>
        </div>
        <div>
          {console.log(posts)}
          {posts &&
            posts.map((post) => (
              <Link href={`/${post.Slug}`} key={post.id}>
                <a>
                  <h2>{post.Title}</h2>
                </a>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch('https://blog-daiane.herokuapp.com/posts');
  const resAbout = await fetch('https://blog-daiane.herokuapp.com/abouts');
  const posts = await res.json();
  const about = await resAbout.json();

  return {
    props: { posts, about },
  };
}
