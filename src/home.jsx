function Home() {
  const places = [
    "athens", "barcelona", "belgium",
    "gangtok", "goa", "maur",
    "naples", "paris", "phuket"
  ];

  return (
    <>
      <div className="container grid">
        <div className="showcase-text">
          <h2 className="heading">Explore the World Through My Lens</h2>
          <p>
            Hello traveler! I'm Aashi. My love for travel began the first time I
            stepped outside my routine and realized how big, beautiful, and
            surprising the world truly is.
          </p>
        </div>

        <div className="showcase-image">
          <img src="/images/sunset.jpg" alt="sunset" />
        </div>
      </div>

      <h2 style={{ textAlign: "center" }}>Places I have travelled</h2>

      <div className="img-gallery">
        {places.map(place => (
          <div className="card" key={place}>
            <h4>{place.toUpperCase()}</h4>
            <img src={`/images/${place}.jpg`} alt={place} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
