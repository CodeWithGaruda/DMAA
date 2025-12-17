import React, { useEffect, useState } from "react";
import YinYangSymbol from "../components/YinYang";
import phrases from "../content/phrases.json";

interface User {
  name: string;
  email: string;
  phoneNumber?: string;
  role?: string;
  pictureUrl?: string;
}

const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [minDelayDone, setMinDelayDone] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const fetchUser = async (): Promise<void> => {
      try {
        const res = await fetch("http://localhost:8080/api/user", {
          credentials: "include",
        });

        if (!res.ok) {
          setUser(null);
        } else {
          const data: User = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Fetch /api/user failed", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinDelayDone(true);
    }, 5000);
    const randomHeading =
      phrases.headings[Math.floor(Math.random() * phrases.headings.length)];

    const randomDescription =
      phrases.descriptions[
        Math.floor(Math.random() * phrases.descriptions.length)
      ];

    setHeading(randomHeading);
    setDescription(randomDescription);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------------------------------
     LOADING STATE
  ---------------------------------------- */
  if (loading || !minDelayDone) {
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 opacity-5">
            <YinYangSymbol
              size="180px"
              opacity={1}
              speed={35}
              direction="clockwise"
            />
          </div>
          <div className="absolute bottom-10 left-10 opacity-5">
            <YinYangSymbol
              size="160px"
              opacity={1}
              speed={28}
              direction="anticlockwise"
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8 px-4">
          <h2 className="text-2xl font-bold text-text-primary text-center max-w-lg animate-in fade-in slide-in-from-top-4 duration-700">
            {heading}
          </h2>

          <div className="animate-in fade-in zoom-in-95 duration-500">
            <YinYangSymbol
              size="260px"
              opacity={0.8}
              speed={2}
              direction="clockwise"
            />
          </div>

          <p className="text-text-secondary text-center max-w-md leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {description}
          </p>
        </div>
      </div>
    );
  }

  /* ---------------------------------------
     NOT AUTHENTICATED
  ---------------------------------------- */
  if (!user) {
    return (
      <div className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Background element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-8">
          <YinYangSymbol
            size="300px"
            opacity={1}
            speed={25}
            direction="anticlockwise"
          />
        </div>

        <div className="relative z-10 bg-surface border-2 border-border rounded-2xl shadow-xl p-8 text-center max-w-md mx-4 animate-in fade-in zoom-in-95 duration-500">
          <div className="mb-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
              <span className="text-4xl">🔒</span>
            </div>
          </div>
          <h2 className="text-xl font-bold text-text-primary mb-3">
            Authentication Required
          </h2>
          <p className="text-text-secondary mb-6">
            You must be signed in to access the Dragon Kung Fu Academy.
          </p>
          <a
            href="/login"
            className="inline-block bg-accent text-surface font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md"
          >
            Return to Login
          </a>
        </div>
      </div>
    );
  }

  /* ---------------------------------------
     AUTHENTICATED HOME
  ---------------------------------------- */
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-2xl">🐉</span>
            </div>
            <h1 className="text-xl font-bold text-text-primary">
              Dragon Kung Fu Academy
            </h1>
          </div>

          <button className="text-text-secondary hover:text-text-primary transition-colors duration-200 font-medium text-sm">
            Sign Out
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Card */}
        <div className="bg-surface border-2 border-border rounded-2xl shadow-lg p-8 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              {user.pictureUrl ? (
                <img
                  src={user.pictureUrl}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-accent shadow-lg object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full border-4 border-accent shadow-lg bg-accent flex items-center justify-center">
                  <span className="text-4xl text-surface">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-text-primary mb-2">
                Welcome, {user.name}
              </h2>
              <div className="space-y-1 mb-4">
                <p className="text-text-secondary flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  <span className="font-medium">{user.email}</span>
                </p>
                {user.phoneNumber && (
                  <p className="text-text-secondary flex items-center gap-2">
                    <span className="text-lg">📱</span>
                    <span className="font-medium">{user.phoneNumber}</span>
                  </p>
                )}
                {user.role && (
                  <div className="inline-flex items-center gap-2 mt-2">
                    <span className="px-3 py-1 bg-accent text-surface text-sm font-semibold rounded-full">
                      {user.role}
                    </span>
                  </div>
                )}
              </div>
              <p className="text-text-secondary leading-relaxed">
                You have successfully entered the Dragon Kung Fu Academy. Train
                your mind, body, and spirit.
              </p>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface border-2 border-border rounded-xl shadow-md p-6 hover:shadow-lg hover:border-accent transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Training Materials
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Access course content, videos, and practice routines.
            </p>
            <button className="text-accent font-semibold text-sm hover:underline">
              View Materials →
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-surface border-2 border-border rounded-xl shadow-md p-6 hover:shadow-lg hover:border-accent transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Class Schedule
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              View upcoming classes and book your training sessions.
            </p>
            <button className="text-accent font-semibold text-sm hover:underline">
              View Schedule →
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-surface border-2 border-border rounded-xl shadow-md p-6 hover:shadow-lg hover:border-accent transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-lg font-bold text-text-primary mb-2">
              Your Progress
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Track your achievements and skill development.
            </p>
            <button className="text-accent font-semibold text-sm hover:underline">
              View Progress →
            </button>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 text-center animate-in fade-in duration-700 delay-500">
          <div className="inline-block bg-surface border-2 border-accent rounded-2xl shadow-lg px-8 py-6 max-w-2xl">
            <p className="text-lg text-text-primary font-medium italic mb-2">
              "The journey of a thousand miles begins with a single step."
            </p>
            <p className="text-text-secondary text-sm font-semibold">
              — Ancient Proverb
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
