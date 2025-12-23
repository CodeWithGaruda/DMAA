import React from "react";

interface PersonalTrainingSnapshotProps {
  name: string;
  email: string;
  role?: string;
  pictureUrl?: string;
  joinedOn?: string;
}

const PersonalTrainingSnapshot: React.FC<PersonalTrainingSnapshotProps> = ({
  name,
  email,
  role = "Student",
  pictureUrl,
  joinedOn,
}) => {
  return (
    <div className="bg-surface border border-border rounded-2xl shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          {pictureUrl ? (
            <img
              src={pictureUrl}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-2 border-accent shadow"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-accent text-surface flex items-center justify-center text-3xl font-bold shadow">
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-text-primary">{name}</h2>

          <p className="text-text-secondary text-sm mt-1">{email}</p>

          <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-accent text-surface">
              {role}
            </span>

            {joinedOn && (
              <span className="px-3 py-1 text-sm rounded-full bg-background border border-border text-text-secondary">
                Joined: {joinedOn}
              </span>
            )}
          </div>

          {/* Status line */}
          <p className="mt-4 text-text-secondary italic">
            “Consistency builds mastery. One practice at a time.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalTrainingSnapshot;
