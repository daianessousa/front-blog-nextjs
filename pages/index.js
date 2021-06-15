import Link from 'next/link';

export default function Home({ posts, about, projects }) {
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
          <h2> 📘 Posts Recentes </h2>
          <p> Ver todos → </p>
        </div>
        <div>
          {posts &&
            posts.map((post) => (
              <Link href={`/${post.Slug}`} key={post.id}>
                <a>
                  <h3 className="PostTile">{post.Title}</h3>
                  Publicado em: {post.Date}
                </a>
              </Link>
            ))}
        </div>
      </section>

      <section className="RecentProjects">
        <div className="ProjectInitial">
          <h2> 💻 Últimos Projetos </h2>
          <p> Ver Todos → </p>
        </div>
        <div>
          {projects &&
            projects.map((project) => (
              <div key={project.id}>
                <div className="Project">
                  <h3 className="ProjectTitle">{project.Title}</h3>
                  <img
                    className="PortfolioImg"
                    src={project.Pictures[0].url}
                    alt={project.Pictures[0].alternativeText}
                  />
                  <div className="DescriptionProject">
                    <a href={project.LinkProject}>Ver Projeto →</a>
                    <a href="https://github.com/daianessousa">
                      <img src="/GitHubTwo.svg" alt="svg git" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="Footer">
        <p> Hey! Obrigada pela visita 😉 </p>
        <div>
          <a href="mailto:daisousa.c@gmail.com">E-mail </a> |
          <a href="tel:+5598984686460"> WhatsApp </a> |
          <a href="https://www.linkedin.com/in/daianessousa/"> Linkedin </a> |
          <a href="https://github.com/daianessousa"> GitHub </a>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  // get posts from our api
  const res = await fetch('https://blog-daiane.herokuapp.com/posts');
  const resAbout = await fetch('https://blog-daiane.herokuapp.com/abouts');
  const resProjects = await fetch(
    'https://blog-daiane.herokuapp.com/portfolios',
  );
  const posts = await res.json();
  const about = await resAbout.json();
  const projects = await resProjects.json();

  return {
    props: { posts, about, projects },
  };
}
