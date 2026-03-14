import Reveal from './Reveal'
import { lotusUrl, nailphoto1, nailphoto2 } from '../assets'
import './About.css'

const values = [
  {
    title: 'Premium Products',
    description: 'We use only top-tier, non-toxic polishes and treatments safe for your nails.',
  },
  {
    title: 'Skilled Artisans',
    description: 'Our certified technicians bring years of experience and a passion for artistry.',
  },
  {
    title: 'Hygienic Standards',
    description: 'Every tool is sterilized after each use — your health is our priority.',
  },
  {
    title: 'Personalized Care',
    description: 'Every service is tailored to your unique style and nail health needs.',
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <Reveal direction="left" className="about-images-wrap">
          <div className="about-images">
            <img
              className="about-img-main"
              src={nailphoto1}
            />
            <img
              className="about-img-accent"
              src={nailphoto2}
            />

          </div>
        </Reveal>

        <div className="about-text">
          <Reveal>
            <div className="lotus-ornament lotus-ornament-left">
              <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 50, height: 50, opacity: 0.6 }} />
            </div>
            <p className="section-label">About Us</p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="section-title">Where Art Meets<br />Self-Care</h2>
          </Reveal>

          <Reveal delay={180}>
            <div className="divider" />
            <p className="section-subtitle">
              Bellacure was founded in 2021 on a simple belief — everyone deserves to feel
              beautiful. We blend technical precision with creative artistry to
              deliver nail experiences that go beyond the ordinary.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="section-subtitle" style={{ marginTop: 16 }}>
              Our salon is a sanctuary of calm, designed so you can unwind while
              our experts work their magic on your hands and feet.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="about-values">
              {values.map((v) => (
                <div key={v.title} className="about-value-item">
                  <h4>{v.title}</h4>
                  <p>{v.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="about-cta">
              <a href="#services" className="btn-primary">Explore Services</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
