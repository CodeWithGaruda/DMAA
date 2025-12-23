import { useAuth } from "../auth/AuthContext";
import PersonalTrainingSnapshot from "../components/member/PersonalTrainingSnapshot";
import NotificationsPanel from "../components/member/NotificationsPanel";
import PostMediaComposer from "../components/member/PostMediaComposer";
import QuoteOfTheDay from "../components/member/QuoteOfTheDay";

const MemberPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!user) {
    return null; // or redirect
  }

  return (
    <div className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <PersonalTrainingSnapshot
          name={user.name}
          email={user.email}
          role={user.role}
          pictureUrl={`https://lh3.googleusercontent.com/a/ACg8ocKgvUSMcYiSCw17RjQzik1xc4Kf7YSzGkM76n46nlHjuR3D9Kwh=s96-c`}
          joinedOn="2025"
        />
      </div>
      <NotificationsPanel />
      <PostMediaComposer />
      <QuoteOfTheDay />
    </div>
  );
};

export default MemberPage;
