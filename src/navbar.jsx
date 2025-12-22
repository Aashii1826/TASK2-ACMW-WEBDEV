function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Treks and Trails</h1>
        <nav>
          <ul>
            <a href="#" onClick={() => setPage("home")}>Home</a>
            <a href="#" onClick={() => setPage("about")}>About Us</a>
            <a href="#" onClick={() => setPage("contact")}>Contact Us</a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
