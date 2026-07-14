import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero container">

        <div className="hero-content">
          <h1>Welcome to MediTrack</h1>

          <h2>Your Personal Medicine Tracker</h2>

          <p>
            Manage your medicines, organize your schedule and
            never miss a dose. MediTrack helps you stay healthy
            by keeping all your medicine records in one place.
          </p>

          <Link to="/register">
            <button className="btn">
              Get Started
            </button>
          </Link>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Hero" />
        </div>

      </section>

      {/* Features */}

      <section className="features container">

        <h2>Our Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>💊 Medicine Tracker</h3>
            <p>
              Store and manage all your medicines in one place.
            </p>
          </div>

          <div className="feature-card">
            <h3>📝 Easy Management</h3>
            <p>
              Add, update and delete medicines easily.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure Records</h3>
            <p>
              Your medicine information stays organized.
            </p>
          </div>

        </div>

      </section>

      {/* About */}

      <section className="about container">

        <h2>Why MediTrack?</h2>

        <p>
          MediTrack is developed as a healthcare web application
          supporting the United Nations Sustainable Development Goal
          3 (Good Health and Well-being). It provides an easy way to
          organize medicine schedules and maintain personal health
          records.
        </p>

      </section>

    </div>
  );
}

export default Home;