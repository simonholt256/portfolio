function About() {
  return (
    <>
      <h1 className="about-title">About</h1>
      <p className="about-description">Passionate about working in the world of software. Keen to make
        software that works for people, helps them make their life better.
        Studied anthropology at university and have always be fascinated by
        people and how they live. My journey so far and what change my direction.
        Ability to learn, self taught lots.
      </p>

      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">Artist</div>
      </div>
      <div className="about__painting-grid">
          <div className="painting">painting 1</div>
          <div className="painting">painting 2</div>
          <div className="painting">Painting 3</div>
      </div>
      <div className="chrome-box-outer about__artist">
        <div className="chrome-box-inner">Digital Artist</div>
      </div>
      <div className="about__painting-grid">
          <div className="painting">blender 1</div>
          <div className="painting">blender 2</div>
          <div className="painting">blender 3</div>
      </div>
      <p className="about-personal">Reader, inspired by books maybe, something like that, have a family</p>
      <div className="pics-of-me">pictures of me</div>
    </>
  )
}

export default About