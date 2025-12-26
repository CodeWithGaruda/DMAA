import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10 sm:py-12">
      <div className="max-w-4xl mx-auto bg-surface border border-border rounded-2xl shadow overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-56 sm:h-72 md:h-80">
          <img
            src="pictures/masterClawPose.jpeg"
            alt="Dragon Martial Arts Academy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-10">
          <h1 className="text-3xl font-bold text-text-primary mb-6">
            Contact Us
          </h1>

          <p className="text-text-secondary mb-8">
            Have questions or want to begin your training journey? Reach out to
            Dragon Martial Arts Academy — we’re happy to help.
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📍</span>
              <div>
                <h3 className="font-semibold text-text-primary">Address</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dragon Martial Arts Academy
                  <br />
                  CF7M+HHQ, Lower Tank Bund Rd, Domalguda, Kavadiguda
                  <br />
                  Hyderabad, Telangana, 500080
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📞</span>
              <div>
                <h3 className="font-semibold text-text-primary">Phone</h3>
                <p className="text-text-secondary text-sm">+91 91775 19155</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <span className="text-xl">📧</span>
              <div>
                <h3 className="font-semibold text-text-primary">Email</h3>
                <p className="text-text-secondary text-sm">
                  dmaa.india@gmail.com
                  <br />
                  manthri.rakesh@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 border-t border-border pt-6 text-center">
            <p className="text-text-secondary text-sm">
              🐉 Train with purpose. Live with balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
