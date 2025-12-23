import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { MemberApplication } from "../types/application";

import ApplicationForm from "../components/application/ApplicationForm";
import DeclarationModal from "../components/application/DeclarationModal";
import ApplicationSuccess from "../components/application/ApplicationSuccess";

const Apply: React.FC = () => {
  const navigate = useNavigate();

  const [applicationData, setApplicationData] =
    useState<MemberApplication | null>(null);

  const [showDeclaration, setShowDeclaration] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ---------------------------------------
     FORM SUBMIT
  ---------------------------------------- */
  const handleFormSubmit = (data: MemberApplication) => {
    setApplicationData(data);
    setShowDeclaration(true);
  };

  /* ---------------------------------------
     DECLARATION CONFIRM
  ---------------------------------------- */
  const handleDeclarationConfirm = (finalData: MemberApplication) => {
    console.log("READY FOR BACKEND 👉", finalData);

    setShowDeclaration(false);
    setSubmitted(true);
  };

  /* ---------------------------------------
     RENDER
  ---------------------------------------- */
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto bg-surface border border-border rounded-2xl shadow p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          Online Member Application
        </h1>

        {/* Application Form */}
        {!submitted && <ApplicationForm onSubmit={handleFormSubmit} />}

        {/* Declaration Modal */}
        {showDeclaration && applicationData && (
          <DeclarationModal
            application={applicationData}
            onConfirm={handleDeclarationConfirm}
            onClose={() => setShowDeclaration(false)}
          />
        )}

        {/* Success Screen */}
        {submitted && <ApplicationSuccess onClose={() => navigate("/home")} />}
      </div>
    </div>
  );
};

export default Apply;
