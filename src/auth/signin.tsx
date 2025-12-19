import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import YinYangSymbol from "../components/YinYang";

const SignIn = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleSuccess = async (cred) => {
    const idToken = cred?.credential;
    if (!idToken) {
      setError("Authentication failed. Please try again.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id_token: idToken }),
      });

      if (res.ok) {
        navigate("/home");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || "Authentication failed. Please try again.");
      }
    } catch (err) {
      setError(
        "Unable to connect to server. Please check your connection." + err
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
          <YinYangSymbol
            size="320px"
            opacity={1}
            speed={30}
            direction="anticlockwise"
          />
        </div>
        <div className="absolute top-20 right-20 opacity-10">
          <YinYangSymbol
            size="140px"
            opacity={1}
            speed={20}
            direction="clockwise"
          />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <YinYangSymbol
            size="110px"
            opacity={1}
            speed={25}
            direction="anticlockwise"
          />
        </div>
      </div>

      {/* Sign-in card */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-surface border-2 border-border rounded-2xl shadow-2xl p-10 text-center transition-all duration-300 hover:shadow-3xl hover:border-accent">
          {/* Logo/Icon area */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-surface-950 rounded-full blur-xl opacity-60 " />
              <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent bg-background flex items-center justify-center">
                <img
                  src="/pictures/logo.png"
                  alt="Dragon Martial Arts Academy Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-text-primary mb-3 tracking-tight">
            Dragon Martial Arts Academy
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary mb-10 text-sm font-medium">
            Master your skills, embrace the discipline
          </p>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-surface px-4 text-text-secondary font-semibold uppercase tracking-wider">
                Sign in to continue
              </span>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-surface border-2 border-danger rounded-xl text-danger text-sm font-medium shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
              {error}
            </div>
          )}

          {/* Google Login Button */}
          <div className="flex justify-center mb-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-3 px-6">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent" />
                <span className="ml-3 text-text-secondary font-medium">
                  Signing in...
                </span>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() =>
                  setError("Google login failed. Please try again.")
                }
                theme="outline"
                size="large"
                text="signin_with"
                shape="rectangular"
              />
            )}
          </div>

          {/* Footer text */}
          <p className="text-xs text-text-secondary leading-relaxed">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Bottom decorative text */}
        <p className="text-center mt-8 text-text-secondary text-sm font-semibold tracking-wide">
          Begin your journey today
        </p>
      </div>
    </div>
  );
};

export default SignIn;
