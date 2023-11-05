function Navbar(props) {
  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        {props.navBarName}
      </a>
      <div id="navContent" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href={props.item1Path}>
              {props.item1Name}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={props.item2Path}>
              {props.item2Name}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={props.item3Path}>
              {props.item3Name}
            </a>
          </li>
        </ul>
        {/* SEARCH BAR; leaving this commented because it currently is not used
                <form class="form-inline">
                    <ul class="navbar-nav mr-auto">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </ul>
                </form>
                */}
      </div>
    </nav>
  );
}

export default Navbar;
