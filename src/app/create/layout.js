const Layout = (props) => {
  return (
    <form>
      <h2>{props.children}</h2>
      <ul>
        <li>
          <a href="/create/1">1</a>
        </li>
        <li>
          <a href="/create/2">2</a>
        </li>
        <li>
          <a href="/create/3">3</a>
        </li>
      </ul>
    </form>
  )
}

export default Layout
