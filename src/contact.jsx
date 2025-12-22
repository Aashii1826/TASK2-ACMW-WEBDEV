function Contact() {
  return (
    <section className="showcase">
      <div className="container grid">
        <div className="showcase-text1">
          <h1>Contact Us</h1>
          <p>Email: treks.trails@gmail.com</p>
          <p>Phone: 9999189999</p>
        </div>

        <div className="showcase-form card">
          <h2>Sign up for my daily Newsletter!</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Country" required />
            <input type="email" placeholder="Email" />
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
