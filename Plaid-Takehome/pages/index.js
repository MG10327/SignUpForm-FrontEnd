import HeroSection from "../components/HeroSection";
import Link from "next/link";
import '../styles/landing.css'
import '../styles/globals.css'

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <span>● Our services</span>
          <a className="contact-link">Let’s work together</a>
      </header>

      {/* Hero Section */}
      <HeroSection />
    </div>
  );
}
