import { CALENDLY_URL, MAPS_URL } from '../config'
import { lotusUrl } from '../assets'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Book Appointment', href: CALENDLY_URL, external: true },
]

const serviceLinks = [
  { label: 'Manicure', href: '#services' },
  { label: 'Pedicure', href: '#services' },
  { label: 'Waxing', href: '#services' },
  { label: 'Add-On Treatments', href: '#services' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={lotusUrl} alt="" aria-hidden="true" className="footer-lotus-icon" style={{ width: 22, height: 22, opacity: 0.8 }} />
              Bellacure Nails and Spa
            </div>
            <p>
              A luxury nail salon dedicated to beauty, wellness, and artistry.
              Treat yourself to an experience unlike any other.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <address>
              <p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-address-link"
                >
                  622 Gravel Pike SPC #113<br />East Greenville, PA 18041
                </a>
              </p>
              <p><a href="tel:+13105550192" className="footer-address-link">(267) 313-4225</a></p>
              <p><a href="mailto:bellacurepa@gmail.com" className="footer-address-link">bellacurepa@gmail.com</a></p>
              <p>Mon–Fri: 10AM – 7PM<br />Sat: 9AM – 6PM<br />Sun: 10AM – 5PM</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2021 Bellacure Nails and Spa. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
