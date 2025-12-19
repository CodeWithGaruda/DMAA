import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-3xl mx-auto bg-surface border border-border rounded-2xl shadow p-10">
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          Contact Us
        </h1>

        <p className="text-text-secondary mb-8">
          Have questions or want to begin your training journey? Reach out to
          Dragon Kung Fu Academy — we’re happy to help.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="text-xl">📍</span>
            <div>
              <h3 className="font-semibold text-text-primary">Address</h3>
              <p className="text-text-secondary text-sm">
                Dragon Kung Fu Academy
                <br />
                Inner Strength Street
                <br />
                Harmony City
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-xl">📞</span>
            <div>
              <h3 className="font-semibold text-text-primary">Phone</h3>
              <p className="text-text-secondary text-sm">+91 90000 00000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-xl">📧</span>
            <div>
              <h3 className="font-semibold text-text-primary">Email</h3>
              <p className="text-text-secondary text-sm">
                support@dragonkungfuacademy.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-text-secondary text-sm">
            🐉 Train with purpose. Live with balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
