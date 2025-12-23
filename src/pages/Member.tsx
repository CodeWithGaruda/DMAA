import { useAuth } from "../auth/AuthContext";
import PersonalTrainingSnapshot from "../components/member/PersonalTrainingSnapshot";
import NotificationsPanel from "../components/member/NotificationsPanel";
import PostMediaComposer from "../components/member/PostMediaComposer";
import QuoteOfTheDay from "../components/member/QuoteOfTheDay";

const MemberPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-text-secondary text-sm">
          Preparing your dojo space…
        </p>
      </div>
    );
  }

  if (!user) {
    return null; // protected by route
  }

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* ---------------------------------------
            Personal Snapshot (Top)
        ---------------------------------------- */}
        <PersonalTrainingSnapshot
          name={user.name}
          email={user.email}
          role={user.role}
          pictureUrl={user.pictureUrl}
          joinedOn="2025"
        />

        {/* ---------------------------------------
            Notifications
        ---------------------------------------- */}
        <NotificationsPanel />

        {/* ---------------------------------------
            Post Media Composer
        ---------------------------------------- */}
        <PostMediaComposer />

        {/* ---------------------------------------
            Quote of the Day (Reflection)
        ---------------------------------------- */}
        <QuoteOfTheDay />
      </div>
    </div>
  );
};

export default MemberPage;
