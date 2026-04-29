function SceneIt() {
  return (
    <>
      <div className="explore-title">Spring</div>
      <div className="explore-text">
        A fullstack habit tracker app which allows the user set intentions
        they wish to complete and set challenges for themselves for those
        intentions. When a challenge is completed the chosen trophy is added
        to their trophy cabinet. The app uses positive reinforcement to help
        users accumulate good habits and kick bad ones.
      </div>
      <div className="explore-text">Tech Used: React js, fast API, Python, Postgresql, Supabase, JWT tokens</div>
      <div className="explore-title">Features</div>
      <div className="explore-text">Users are able to make a secure account and choose and icon and a mantra for
        themselves. The app uses a neo-brutalist design to make the UI fun and accessible.
        User data saved on online database. </div>
      <div className="explore-title">Challenges faced</div>
      <div className="explore-text">The delay of checking for specific data in the database and then adding or
        removing data based of the result causes a delay that affects the smooth running
        of the UX. Having an app that has information undating which should update across
        the whole app can lead to issues with multiple points of truth clashing. Large React
        projects can come with issues of organising large css sheets</div>
      <div className="explore-title">Highlight on a challenges</div>
      <div className="explore-text">Data request delays is a reality for this type of application. To create a system
        where the user feels as though everything they do is instant the UI must change
        instantly while the actual backend opperations are loading. </div>
      <div className="explore-title">To be improved</div>
      <div className="explore-text">This style of app would work better as a mobile app and could be built in react
        native. This is because you want it to be usable quickly while you're on the go.
        Customisable avatars and trophies would improve the users experience </div>
      <div className="explore-title">Impact</div>
      <div className="explore-text">Though the market is saturated with apps designed to help productivity and build
        habits, in this case the value as a project comes from the uniqueness of its ethos.
        Often technology can get caught in a loop of demanding more features to justify the
        price of a premium service which leads to over complication, loosing the core concept,
        and adding bulk while adding little to the customers experience. If this web app was
        to be monetized it would work on keeping the cost very low for the customer and running
        and maintenance needs at a minimal.</div>
      <div className="explore-title">Key Words</div>
      <div className="explore-text">UI, UX, API Requests, Database management, schemas, models, routers, Error handling</div>
      <div>
        <div></div>
      </div>
    </>
  )
}

export default SceneIt