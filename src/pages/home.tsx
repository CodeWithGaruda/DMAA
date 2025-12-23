import React, { useEffect, useState } from "react";
import YinYang from "../components/YinYang";
import phrases from "../content/phrases.json";
import Unauthorized from "./utils/Unauthorized";
import VideoBackdrop from "../components/VideoBackdrop";
import IndianStick from "../../public/videos/tarun-karrasamu.mp4";
import KungFu from "../../public/videos/kungFu.mp4";
import Nunchaku from "../../public/videos/nunchuk.mp4";
import Knife from "../../public/videos/knife.mp4";
import HeroMediaBackdrop from "../components/HeroMediaBackdrop";
import { galleryMedia } from "../assets/gallery";

interface User {
  name: string;
  email: string;
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
    }, 2000);
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
            <YinYang
              size="180px"
              opacity={1}
              speed={35}
              direction="clockwise"
            />
          </div>
          <div className="absolute bottom-10 left-10 opacity-5">
            <YinYang
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
            <YinYang
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
    <Unauthorized />;
  }

  /* ---------------------------------------
    AUTHENTICATED HOME
  ---------------------------------------- */
  return (
    <div className="min-h-screen bg-background">
      <HeroMediaBackdrop
        media={galleryMedia}
        height="90vh"
        caption="Dragon Martial Arts Acedemy"
        blurStrength={5}
      />
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Welcome Card */}
        <div className="bg-surface border-2 border-border rounded-2xl shadow-lg p-6 sm:p-8 mb-8 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              {user.pictureUrl ? (
                <img
                  src={user.pictureUrl}
                  alt={user.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-1 border-platinum-300 shadow-lg object-cover"
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-accent shadow-lg bg-accent flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl text-surface">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
                Welcome, {user.name}
              </h2>

              <div className="space-y-1 mb-4">
                <p className="text-text-secondary flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-lg">📧</span>
                  <span className="font-medium">{user.email}</span>
                </p>

                {user.role && (
                  <div className="mt-2 flex justify-center sm:justify-start">
                    <span className="px-3 py-1 bg-accent text-surface text-sm font-semibold rounded-full">
                      {user.role}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-text-secondary leading-relaxed">
                You have successfully entered the Dragon Martial Arts Academy.
                Train your mind, body, and spirit.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------
   Our Martial Arts Disciplines
---------------------------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-8 text-center">
            🥋 Our Martial Arts Disciplines
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Indian Stick */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🥢 Indian Stick (Silambam)
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Ancient Indian Weapon Art
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Silambam is a traditional Indian martial art emphasizing fluid
                movement, speed, and precise weapon handling. Training builds
                coordination, agility, and discipline while preserving
                techniques rooted in India’s martial heritage.
              </p>
            </div>
            <div>
              <VideoBackdrop
                videoSrc={IndianStick}
                header="Indian Stick"
                content="Stick martial arts are combat systems that use sticks, staffs, or bladed-weapon substitutes to teach fighting techniques.
                    Although a stick is the tool, the real goal is:
                    timing, distance, coordination, awareness, and discipline
                    Most stick systems also translate directly to:
                    empty-hand combat
                    knife defense
                    sword techniques"
                blurStrength={2}
                overlayStrength={0.6}
                height="80vh"
              ></VideoBackdrop>
            </div>
            {/* Kung Fu */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🐉 Kung Fu
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Traditional Chinese Martial Art
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Kung Fu training develops strength, balance, flexibility, and
                mental focus through structured forms and techniques. This
                discipline blends physical conditioning with traditional
                philosophy, promoting self-control, confidence, and respect.
              </p>
            </div>
            <div>
              <VideoBackdrop
                videoSrc={KungFu}
                header="Kung Fu"
                content="Kung Fu training develops strength, balance, flexibility, and
                mental focus through structured forms and techniques. This
                discipline blends physical conditioning with traditional
                philosophy, promoting self-control, confidence, and respect."
                blurStrength={2}
                overlayStrength={0.6}
                height="80vh"
              ></VideoBackdrop>
            </div>
            {/* Nunchaku */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🔗 Nunchaku
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Weapon Skill & Coordination
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Nunchaku training focuses on control, rhythm, and accuracy.
                Students learn disciplined handling techniques that improve
                coordination, concentration, and performance skills in a safe
                and structured environment.
              </p>
            </div>
            <div>
              <VideoBackdrop
                videoSrc={Nunchaku}
                header="Nunchaku"
                content=" Nunchaku training focuses on control, rhythm, and accuracy.
                Students learn disciplined handling techniques that improve
                coordination, concentration, and performance skills in a safe
                and structured environment."
                blurStrength={2}
                overlayStrength={0.6}
                height="80vh"
              ></VideoBackdrop>
            </div>
            {/* Knife Training */}
            <div className="bg-surface border border-border rounded-xl p-6 text-center shadow-sm">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🔪 Knife Training
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Controlled Defensive Practice
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Knife training is taught with strict emphasis on safety,
                discipline, and responsibility. Instruction focuses on
                controlled movements, awareness, and traditional martial
                principles strictly for self-defense and skill development.
              </p>
            </div>
            <div>
              <VideoBackdrop
                videoSrc={Knife}
                header="Knife"
                content="Knife training is taught with strict emphasis on safety,
                discipline, and responsibility. Instruction focuses on
                controlled movements, awareness, and traditional martial
                principles strictly for self-defense and skill development."
                blurStrength={2}
                overlayStrength={0.6}
                height="80vh"
              ></VideoBackdrop>
            </div>
          </div>
        </div>

        {/* ---------------------------------------
   Why Train With Us Section
---------------------------------------- */}
        <div className="mt-14 bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Why Train With Dragon Martial Arts Academy?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Structured training programs rooted in traditional martial arts
                principles.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Experienced instructors with proven competitive and teaching
                backgrounds.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Safe, disciplined, and respectful training environment for all
                ages.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Focus on physical fitness, mental strength, and personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-10 sm:mt-12 text-center animate-in fade-in duration-700 delay-500">
          <div className="inline-block bg-surface border-2 border-accent rounded-2xl shadow-lg px-6 sm:px-8 py-5 sm:py-6 max-w-xl sm:max-w-2xl">
            <p className="text-base sm:text-lg text-text-primary font-medium italic mb-2">
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
