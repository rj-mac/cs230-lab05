function Contact() {
  return (
    <form>
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input
          type="text"
          class="form-control"
          id="nameInput"
          placeholder="John Doe"
        />
      </div>

      <div class="form-group">
        <label for="emailInput">Email address</label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="johndoe@example.com"
        />
      </div>

      <div class="form-group">
        <label for="messageInput">Message</label>
        <textarea class="form-control" id="messageInput" rows="3"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Contact;
