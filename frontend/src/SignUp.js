import React from 'react';

const SignUp = () => {
  return (
    <section id="sign-up">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <h1 className="signUp-title">
              Want to <br />
              Sign Up?
            </h1>
            <p className="separator" />
            <p className="subtitle">Please use the form below.</p>
          </div>
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
