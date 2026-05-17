import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS } from "../constants/buttonStyles";

const NotFound: React.FC = () => {
  return (
    <div className="bg-global-gradient min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Inspiro Studio homepage."
        path="/404"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/50" />
      <div className="relative z-10 text-center max-w-lg">
        <span className="text-[120px] sm:text-[160px] font-bold text-white/5 leading-none select-none block">
          404
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-white -mt-10 mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-400 text-base mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={NAVBAR_CTA_BUTTON_AUTO_WIDTH_CLASS}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
