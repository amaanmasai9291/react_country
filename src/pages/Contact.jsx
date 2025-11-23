export const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log((formData.entries()));
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="container-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="off"
            name="email"
          />
          <input
            className="form-control"
            rows="10"
            required
            autoComplete="off"
            name="message"
            placeholder="Enter your message"
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
