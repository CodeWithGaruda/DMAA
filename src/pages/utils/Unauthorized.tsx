import { useNavigate } from "react-router-dom";
import YinYang from "../../components/YinYang";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden px-4">
      {/* Background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <YinYang
          size="260px"
          opacity={1}
          speed={25}
          direction="anticlockwise"
        />
      </div>

      {/* Card */}
      <div className="relative z-10 bg-surface border-2 border-border rounded-2xl shadow-xl p-6 sm:p-8 text-center w-full max-w-sm sm:max-w-md animate-in fade-in zoom-in-95 duration-500">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl sm:text-4xl">🔒</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-bold text-text-primary mb-3">
          Authentication Required
        </h2>

        {/* Description */}
        <p className="text-text-secondary mb-6 text-sm sm:text-base">
          You must be signed in to access the Dragon Kung Fu Academy.
        </p>

        {/* Action */}
        <button
          onClick={() => navigate("/login")}
          className="inline-block bg-accent text-surface font-semibold px-5 sm:px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md text-sm sm:text-base"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
