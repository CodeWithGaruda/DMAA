import React, { useEffect, useState } from "react";
import type { MemberApplication } from "../../types/application";

interface Props {
  onSubmit: (data: MemberApplication) => void;
}

const ApplicationForm: React.FC<Props> = ({ onSubmit }) => {
  const [form, setForm] = useState<MemberApplication>({
    personalDetails: {
      fullName: "",
      email: "",
      gender: "",
      dateOfBirth: "",
      age: 0,
      phoneNumber: "",
      address: "",
    },
    martialArtsBackground: {
      hasPriorExperience: false,
      purpose: "",
      selectedDisciplines: [],
    },
    uploads: {
      photo: null,
      aadhaar: null,
    },
    declaration: {
      accepted: false,
    },
    meta: {},
  });

  const [isMinor, setIsMinor] = useState(false);
  const [error, setError] = useState("");

  /* ---------------------------------------
     AGE CALCULATION
  ---------------------------------------- */
  useEffect(() => {
    if (!form.personalDetails.dateOfBirth) return;

    const dob = new Date(form.personalDetails.dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();

    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    setForm((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        age,
      },
    }));

    setIsMinor(age < 18);
  }, [form.personalDetails.dateOfBirth]);

  /* ---------------------------------------
     CHANGE HANDLERS
  ---------------------------------------- */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        [name]: value,
      },
    }));
  };

  const handleDisciplineToggle = (discipline: string) => {
    setForm((prev) => {
      const exists =
        prev.martialArtsBackground.selectedDisciplines.includes(discipline);

      return {
        ...prev,
        martialArtsBackground: {
          ...prev.martialArtsBackground,
          selectedDisciplines: exists
            ? prev.martialArtsBackground.selectedDisciplines.filter(
                (d) => d !== discipline
              )
            : [...prev.martialArtsBackground.selectedDisciplines, discipline],
        },
      };
    });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "photo" | "aadhaar"
  ) => {
    const file = e.target.files?.[0] ?? null;

    setForm((prev) => ({
      ...prev,
      uploads: {
        ...prev.uploads,
        [field]: file,
      },
    }));
  };

  /* ---------------------------------------
     SUBMIT
  ---------------------------------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isMinor) {
      setError(
        "Online application is available only for adults. Please visit the academy for offline application."
      );
      return;
    }

    if (
      !form.personalDetails.fullName ||
      !form.personalDetails.email ||
      !form.personalDetails.phoneNumber
    ) {
      setError("Please fill all required fields.");
      return;
    }

    onSubmit(form);
  };

  /* ---------------------------------------
     RENDER
  ---------------------------------------- */
  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* ERROR */}
      {error && (
        <div className="bg-red-50 border border-red-300 text-red-700 p-4 rounded-lg">
          {error}
        </div>
      )}

      {/* PERSONAL DETAILS */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Personal Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="fullName"
            placeholder="Full Name"
            value={form.personalDetails.fullName}
            onChange={handleChange}
            className="input"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.personalDetails.email}
            onChange={handleChange}
            className="input"
          />

          <input
            name="phoneNumber"
            placeholder="Phone Number"
            value={form.personalDetails.phoneNumber}
            onChange={handleChange}
            className="input"
          />

          <input
            name="dateOfBirth"
            type="date"
            value={form.personalDetails.dateOfBirth}
            onChange={handleChange}
            className="input"
          />
        </div>
      </section>

      {/* DISCIPLINES */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Martial Arts Disciplines
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Silambam", "Kung Fu", "Nunchaku", "Knife Training"].map(
            (discipline) => (
              <button
                type="button"
                key={discipline}
                onClick={() => handleDisciplineToggle(discipline)}
                className={`px-3 py-2 rounded-lg border text-sm ${
                  form.martialArtsBackground.selectedDisciplines.includes(
                    discipline
                  )
                    ? "bg-accent text-surface"
                    : "border-border text-text-secondary"
                }`}
              >
                {discipline}
              </button>
            )
          )}
        </div>
      </section>

      {/* UPLOADS */}
      <section>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          Uploads (Optional)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, "photo")}
          />
          <input type="file" onChange={(e) => handleFileChange(e, "aadhaar")} />
        </div>
      </section>

      {/* SUBMIT */}
      <div className="pt-6">
        <button
          type="submit"
          className="bg-accent text-surface font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
