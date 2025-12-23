import React, { useState } from "react";
import memberContent from "../../content/member.json";

const QuoteOfTheDay: React.FC = () => {
  const [quote] = useState(() => {
    const quotes = memberContent.quotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  });

  return (
    <div className="bg-surface border border-border rounded-2xl shadow-sm p-6 text-center">
      <p className="text-text-primary text-lg font-medium italic leading-relaxed">
        “{quote}”
      </p>

      <div className="mt-4 text-sm text-text-secondary">
        — Martial Arts Philosophy
      </div>
    </div>
  );
};

export default QuoteOfTheDay;
