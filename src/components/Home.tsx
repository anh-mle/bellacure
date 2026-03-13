import Reveal from './Reveal'
import { CALENDLY_URL } from '../config'
import { lotusUrl } from '../assets'
import './Home.css'

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-bg" />
      <div className="home-decoration">
        <div className="home-decoration-image" />
      </div>

      {/* Large lotus watermark behind image */}

      <div className="home-content">
        <div className="home-text">
          <Reveal>
            <div className="lotus-ornament lotus-ornament-left">
              <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 28, height: 28, opacity: 0.6 }} />
            </div>
            <p className="home-tagline">Luxury Nail Salon</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="home-title">
              Beauty at Your<br />
              <em>Fingertips</em>
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="home-description">
              Experience the art of nail care in a serene, luxurious setting.
              From classic manicures to intricate nail art, we craft every
              detail with precision and passion.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="home-actions">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Appointment
              </a>
              <a href="#services" className="btn-outline">Our Services</a>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={200} className="home-image-block">
          <div className="home-image-frame">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700&auto=format&fit=crop"
              alt="Elegant nail art by Bellacure"
            />
          </div>
        </Reveal>
      </div>

      <div className="home-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
