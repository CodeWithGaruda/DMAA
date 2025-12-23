import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

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
          Dragon Martial Arts Academy has built a strong reputation for
          excellence in traditional and modern martial arts training, including
          Indian Stick (Silambam), Kung Fu, Nunchaku, and Knife techniques. Our
          academy has consistently produced skilled practitioners who
          demonstrate discipline, precision, and respect for martial traditions.
          Students and trainers from our academy have successfully represented
          us in demonstrations, championships, and martial arts events at
          various levels.
        </p>
        <div className="w-full h-56 sm:h-72 md:h-80">
          <img
            src="/pictures/sample.jpeg"
            alt="Dragon Martial Arts Academy"
            className="w-full h-full object-cover"
          />
        </div>
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
           Achievements Section (NEW)
        ---------------------------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Achievements & Recognition
          </h2>

          <p className="text-text-secondary mb-6 leading-relaxed">
            Over the years, Dragon Martial Arts Academy has earned recognition
            for dedication, discipline, and excellence across multiple martial
            arts disciplines.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent text-lg">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Successful participation in martial arts tournaments and public
                demonstrations at regional and national levels.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-accent text-lg">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Recognition for excellence in both traditional weapon training
                and empty-hand combat techniques.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-accent text-lg">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Consistent performance and instruction in Indian Stick Martial
                Arts, Kung Fu forms, and weapon-based disciplines.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-accent text-lg">✔</span>
              <p className="text-text-secondary leading-relaxed">
                Recognition and affiliation with respected martial arts
                associations and certified training bodies.
              </p>
            </li>
          </ul>
        </div>
        {/* ---------------------------------------
   Medals & Awards Section
---------------------------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            🏆 Medals & Awards
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Gold Medal */}
            <div className="border border-border rounded-xl p-6 bg-background text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                🥇 Gold Medals
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Excellence & Mastery
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Awarded for outstanding performance in Indian Stick (Silambam),
                Kung Fu forms, and weapon-based disciplines. These medals
                represent peak skill, precision, and years of disciplined
                training.
              </p>
            </div>

            {/* Silver Medal */}
            <div className="border border-border rounded-xl p-6 bg-background text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                🥈 Silver Medals
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Consistency & Technique
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Earned in national and regional championships for Nunchaku and
                Kung Fu events. Silver medals reflect technical accuracy,
                control, and competitive excellence.
              </p>
            </div>

            {/* Bronze Medal */}
            <div className="border border-border rounded-xl p-6 bg-background text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                🥉 Bronze Medals
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Determination & Growth
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Recognizes strong performances in martial arts competitions and
                demonstrations, including weapon handling and self-defense
                disciplines. A symbol of perseverance and continuous
                improvement.
              </p>
            </div>

            {/* Special Awards */}
            <div className="border border-border rounded-xl p-6 bg-background text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                🏅 Special Awards
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                Weapon Control & Performance
              </p>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1">
                <li>Indian Stick (Silambam)</li>
                <li>Nunchaku</li>
                <li>Knife Technique (Traditional)</li>
                <li>Form, Balance & Discipline</li>
              </ul>
            </div>
          </div>
        </div>
        {/* ---------------------------------------
   Women Empowerment Section
---------------------------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            🌸 Women Empowerment Through Martial Arts
          </h2>

          <p className="text-text-secondary leading-relaxed mb-4">
            At{" "}
            <span className="font-medium text-text-primary">
              Dragon Martial Arts Academy
            </span>
            , women empowerment is central to our mission. Through disciplined
            training in Kung Fu, Indian Stick (Silambam), Nunchaku, and
            controlled self-defense techniques, we provide a safe, respectful,
            and inclusive environment where women build strength, confidence,
            and self-belief.
          </p>

          <p className="text-text-secondary leading-relaxed mb-4">
            Martial arts training enhances physical fitness, focus, balance, and
            awareness while strengthening mental resilience and self-discipline.
            Beyond physical skills, it empowers women to overcome fear, gain
            confidence, and face challenges with courage and clarity.
          </p>

          <p className="text-text-secondary leading-relaxed">
            Guided by values of respect, equality, and safety, our programs
            inspire women of all ages to stand strong, independent, and
            confident—carrying the true spirit and values of martial arts into
            their daily lives and communities.
          </p>
        </div>
        {/* ---------------------------------------
   Our Trainers Section
---------------------------------------- */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-text-primary mb-6">
            👤 Our Trainers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Head Instructor */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🥋 Head Instructor & Founder
              </h3>
              <p className="font-medium text-accent mb-3">Master Arun Kumar</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                With over 15 years of martial arts experience, Master Arun Kumar
                leads the academy with deep knowledge and discipline.
                Specializing in Kung Fu and Indian Stick (Silambam), he is
                committed to preserving traditional techniques while guiding
                students toward physical and mental excellence.
              </p>
            </div>

            {/* Senior Kung Fu Trainer */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🐉 Senior Kung Fu Trainer
              </h3>
              <p className="font-medium text-accent mb-3">Instructor Li Wei</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Instructor Li Wei is an expert in traditional Kung Fu forms and
                conditioning. Known for his precise technique and patient
                teaching style, he focuses on building strong foundations,
                flexibility, and discipline in students of all levels.
              </p>
            </div>

            {/* Nunchaku Specialist */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🔗 Nunchaku Specialist
              </h3>
              <p className="font-medium text-accent mb-3">
                Instructor Ramesh Patel
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Instructor Ramesh Patel specializes in Nunchaku training and
                weapon coordination. His sessions emphasize control, rhythm, and
                accuracy, helping students develop confidence and advanced
                weapon-handling skills in a safe environment.
              </p>
            </div>

            {/* Silambam Trainer */}
            <div className="border border-border rounded-xl p-6 bg-background">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🥢 Indian Stick (Silambam) Trainer
              </h3>
              <p className="font-medium text-accent mb-3">
                Instructor Karthik Raj
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Instructor Karthik Raj is a dedicated practitioner of Indian
                Stick (Silambam) with strong expertise in traditional footwork
                and weapon flow. He focuses on speed, agility, and precision
                while maintaining respect for the art’s cultural heritage.
              </p>
            </div>

            {/* Self-Defense & Knife Trainer */}
            <div className="border border-border rounded-xl p-6 bg-background md:col-span-2">
              <h3 className="text-lg font-semibold text-text-primary mb-1">
                🔪 Self-Defense & Knife Training Instructor
              </h3>
              <p className="font-medium text-accent mb-3">
                Instructor Ananya Devi
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Instructor Ananya Devi specializes in self-defense and
                controlled knife training, with a strong emphasis on awareness,
                discipline, and safety. She plays a key role in women
                empowerment programs, helping students build confidence,
                resilience, and responsible self-defense skills.
              </p>
            </div>
          </div>
        </div>

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

        {/* ---------------------------------------
        Online Application Section (NEW)
      ---------------------------------------- */}
        <div className="mt-14">
          <div className="bg-background border-2 border-accent rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-text-primary mb-2">
                Apply Online for Membership
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Already a registered user? You can now apply for membership
                online. Fill out the application form, review academy rules, and
                submit your details securely.
              </p>
              <p className="mt-3 text-sm text-text-secondary italic">
                * Online applications are available for adults only.
              </p>
            </div>

            <button
              className="inline-flex items-center justify-center bg-accent text-surface font-semibold px-6 py-3 rounded-lg shadow hover:opacity-90 transition-opacity duration-200 text-sm sm:text-base"
              onClick={() => navigate("/apply")}
            >
              🥋 Apply Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
