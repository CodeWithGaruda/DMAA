import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-lg bg-surface border border-border p-8 text-center shadow">
        <h1 className="text-6xl font-bold text-danger mb-2">403</h1>

        <h2 className="text-xl font-semibold text-text-primary mb-3">
          Unauthorized
        </h2>

        <p className="text-text-secondary mb-6">
          You don’t have permission to access this page.
        </p>

        <button
          className="w-full bg-accent text-white hover:opacity-90"
          onClick={() => navigate("/login")}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
