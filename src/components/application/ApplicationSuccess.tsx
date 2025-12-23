import React from "react";
import YinYang from "../YinYang";

interface Props {
  onClose: () => void;
}

const ApplicationSuccess: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-surface max-w-lg w-full rounded-2xl shadow-xl p-8 text-center animate-in fade-in zoom-in-95 duration-300">
        {/* Symbol */}
        <div className="mb-6 flex justify-center">
          <YinYang size="120px" opacity={0.9} speed={6} direction="clockwise" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-text-primary mb-3">
          Application Submitted Successfully
        </h2>

        {/* Message */}
        <p className="text-text-secondary leading-relaxed mb-6">
          Thank you for applying to <strong>Dragon Martial Arts Academy</strong>
          . Your membership application has been received and is under review.
        </p>

        <div className="bg-background border border-border rounded-xl p-4 text-sm text-text-secondary mb-6">
          Our instructors will review your details and contact you shortly with
          further instructions regarding training schedules and enrollment.
        </div>

        {/* Footer */}
        <button
          onClick={onClose}
          className="bg-accent text-surface font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition-opacity"
        >
          Return to Home
        </button>

        {/* Calm reassurance */}
        <p className="mt-6 text-xs text-text-secondary italic">
          “Discipline begins with commitment.”
        </p>
      </div>
    </div>
  );
};

export default ApplicationSuccess;
