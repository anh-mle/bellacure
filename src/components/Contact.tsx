import Reveal from './Reveal'
import { CALENDLY_URL, MAPS_URL } from '../config'
import { lotusUrl } from '../assets'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-info">
          <Reveal>
            <div className="lotus-ornament lotus-ornament-left">
              <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 50, height: 50, opacity: 0.6 }} />
            </div>
            <p className="section-label">Get In Touch</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="section-title">Book Your Appointment</h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="divider" />
            <p className="section-subtitle">
              Ready to treat yourself? Book online through our Calendly — pick
              a time that works for you, and we'll have everything ready.
              Walk-ins are always welcome too!
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📍</div>
                <div className="contact-detail-text">
                  <h4>Location</h4>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="address-link"
                  >
                    622 Gravel Pike SPC #113<br />East Greenville, PA 18041
                  </a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">📞</div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <p><a href="tel:+12673134225" className="address-link">(267) 313-4225</a></p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-detail-icon">✉️</div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <p><a href="mailto:bellacurepa@gmail.com" className="address-link">bellacurepa@gmail.com</a></p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal direction="right" delay={150} className="contact-booking-panel">
          <div className="booking-lotus-bg">
            <img src={lotusUrl} alt="" aria-hidden="true" className="booking-lotus-decor" style={{ width: 280, height: 280, opacity: 0.1 }} />
          </div>
          <div className="booking-content">
            <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 48, height: 48, opacity: 0.5 }} />
            <h3>Ready to Glow?</h3>
            <p>
              Book your appointment online in seconds. Choose your service,
              pick your preferred time, and we'll see you at the studio.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary booking-btn"
            >
              Book via Calendly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
