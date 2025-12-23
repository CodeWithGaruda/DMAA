import React, { useEffect, useRef, useState } from "react";
import type { MemberApplication } from "../../types/application";

interface Props {
  application: MemberApplication;
  onConfirm: (data: MemberApplication) => void;
  onClose: () => void;
}

const DeclarationModal: React.FC<Props> = ({
  application,
  onConfirm,
  onClose,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [accepted, setAccepted] = useState(false);

  /* ---------------------------------------
     Detect scroll end
  ---------------------------------------- */
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        setScrolledToBottom(true);
      }
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const handleConfirm = () => {
    onConfirm({
      ...application,
      declaration: {
        accepted: true,
        acceptedAt: new Date().toISOString(),
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-surface max-w-2xl w-full rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="border-b border-border px-6 py-4">
          <h2 className="text-xl font-semibold text-text-primary">
            Declaration & Rules
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            Please read carefully before submitting your application
          </p>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="px-6 py-4 max-h-[50vh] overflow-y-auto space-y-4 text-sm text-text-secondary"
        >
          <p>
            I hereby declare that all the information provided in this
            application is true and correct to the best of my knowledge.
          </p>

          <p>
            I understand that Dragon Martial Arts Academy emphasizes discipline,
            safety, respect, and responsibility in all training programs.
          </p>

          <p>
            I agree to follow all academy rules, instructions from instructors,
            and safety guidelines during training sessions.
          </p>

          <p>
            I acknowledge that martial arts training involves physical activity
            and potential risk of injury. I voluntarily participate with full
            awareness of these risks.
          </p>

          <p>
            I understand that fees once paid are non-refundable and that the
            academy reserves the right to suspend or terminate membership in
            case of misconduct.
          </p>

          <p>
            I consent to the academy using photographs or videos taken during
            training or events for promotional purposes.
          </p>

          <p className="font-medium text-text-primary">
            By accepting this declaration, I confirm my commitment to uphold the
            values and discipline of Dragon Martial Arts Academy.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-border px-6 py-4 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="accept"
              disabled={!scrolledToBottom}
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label
              htmlFor="accept"
              className={`text-sm ${
                scrolledToBottom ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              I have read and accept the declaration
            </label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-border text-text-secondary hover:text-text-primary"
            >
              Cancel
            </button>

            <button
              onClick={handleConfirm}
              disabled={!accepted}
              className={`px-6 py-2 rounded-lg font-semibold ${
                accepted
                  ? "bg-accent text-surface hover:opacity-90"
                  : "bg-border text-text-secondary cursor-not-allowed"
              }`}
            >
              Confirm & Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclarationModal;
