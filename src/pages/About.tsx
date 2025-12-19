import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto bg-surface border border-border rounded-2xl shadow p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          About Dragon Martial Arts Academy
        </h1>

        <p className="text-text-secondary mb-6 leading-relaxed">
          Dragon Martial Arts Academy is a place where tradition meets
          discipline. Rooted in ancient martial arts philosophy, our academy
          focuses on building strength, balance, focus, and inner harmony.
        </p>

        <p className="text-text-secondary mb-6 leading-relaxed">
          We believe Kung Fu is not just about physical techniques, but about
          cultivating patience, respect, and resilience. Every student embarks
          on a personal journey of growth—both on and off the mat.
        </p>

        {/* Core values */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-text-primary mb-2">
              🥋 Discipline
            </h3>
            <p className="text-text-secondary text-sm">
              Master control of mind and body through consistent training.
            </p>
          </div>

          <div className="border border-border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-text-primary mb-2">
              🐉 Strength
            </h3>
            <p className="text-text-secondary text-sm">
              Build physical power and inner confidence step by step.
            </p>
          </div>

          <div className="border border-border rounded-xl p-6 text-center">
            <h3 className="font-semibold text-text-primary mb-2">🧘 Balance</h3>
            <p className="text-text-secondary text-sm">
              Learn harmony between movement, breath, and focus.
            </p>
          </div>
        </div>

        <p className="mt-10 text-text-secondary leading-relaxed">
          Whether you are a beginner or an experienced martial artist, Dragon
          Kung Fu Academy welcomes you to begin your journey.
        </p>

        {/* ---------------------------------------
           Application Form Section
        ---------------------------------------- */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="bg-background border border-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="text-center sm:text-left flex-1">
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                Become a Member
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Ready to begin your training at Dragon Martial Arts Academy?
                Download the application form, fill in your details, and submit
                it to start your journey of discipline, strength, and balance.
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="/forms/Application_Form.pdf"
                download
                className="inline-flex items-center justify-center bg-accent text-surface font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition-opacity duration-200 text-sm sm:text-base"
              >
                📄 Download Application Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
