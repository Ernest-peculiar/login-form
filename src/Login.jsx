import React from "react";

const Login = () => {
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
        <form>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="email"
              placeholder="Email, phone, or Skype"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="password"
              placeholder="Password"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.links}>
            No account?{" "}
            <a href="#" style={styles.link}>
              Create one!
            </a>
            <br />
            <a href="#" style={{ ...styles.link, marginLeft: 0 }}>
              Sign in with a security key
            </a>
          </div>
          <button type="submit" style={styles.button}>
            Next
          </button>
        </form>
        <hr style={styles.divider} />
        <button style={styles.signInOptions}>
          <svg viewBox="0 0 24 24" style={styles.signInSvg}>
            <path
              fill="#222"
              d="M9.5 3a1.5 1.5 0 0 1 3 0v1h-3V3zm-5 5A2.5 2.5 0 0 1 7 5.5h10A2.5 2.5 0 0 1 19.5 8v8A2.5 2.5 0 0 1 17 18.5H7A2.5 2.5 0 0 1 4.5 16V8zm2 0v8A.5.5 0 0 0 7 16.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H7A.5.5 0 0 0 6.5 8z"
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
    padding: "2.5rem",
    borderRadius: "6px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "360px",
    minWidth: "320px",
  },
  msLogo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.2rem",
  },
  logoSvg: {
    width: "28px",
    height: "28px",
    marginRight: "0.5rem",
  },
  msText: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#222",
    letterSpacing: "0.01em",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "400",
    margin: "0 0 1.5rem 0",
    color: "#1b1b1b",
  },
  inputGroup: {
    marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    padding: "0.75rem",
    border: "1px solid #c8c6c4",
    fontSize: "1rem",
    background: "#faf9f8",
    marginBottom: "0.5rem",
    outline: "none",
  },
  links: {
    fontSize: "0.97rem",
    marginBottom: "1.5rem",
  },
  link: {
    color: "#0067b8",
    textDecoration: "none",
    fontWeight: 500,
  },
  button: {
    width: "100%",
    padding: "0.7rem",
    background: "#0067b8",
    color: "#fff",
    border: "none",
    fontSize: "1.1rem",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  divider: {
    borderTop: "1px solid #e1dfdd",
    margin: "1.5rem 0 1rem 0",
  },
  signInOptions: {
    width: "100%",
    background: "#f3f2f1",
    border: "1px solid #e1dfdd",
    color: "#222",
    fontSize: "1rem",
    padding: "0.7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  signInSvg: {
    width: "18px",
    height: "18px",
    marginRight: "0.5rem",
  },
};

export default Login;
