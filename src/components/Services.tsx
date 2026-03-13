import { useState } from 'react'
import Reveal from './Reveal'
import './Services.css'

type Category = 'All' | 'Manicure' | 'Pedicure' | 'Nail Art' | 'Add-Ons'

const services = [
  {
    category: 'Manicure',
    icon: '💅',
    title: 'Classic Manicure',
    description: 'Shape, buff, cuticle care, and your choice of polish for perfectly groomed nails.',
    price: '$28',
    duration: '45 min',
  },
  {
    category: 'Manicure',
    icon: '✨',
    title: 'Gel Manicure',
    description: 'Long-lasting gel polish cured under UV light for a chip-free, glossy finish.',
    price: '$42',
    duration: '60 min',
  },
  {
    category: 'Manicure',
    icon: '🌸',
    title: 'Spa Manicure',
    description: 'A luxurious treatment with exfoliation, hydrating mask, and deep massage.',
    price: '$55',
    duration: '75 min',
  },
  {
    category: 'Pedicure',
    icon: '🦶',
    title: 'Classic Pedicure',
    description: 'Soak, exfoliate, shape, and polish for smooth, beautiful feet.',
    price: '$38',
    duration: '50 min',
  },
  {
    category: 'Pedicure',
    icon: '🛁',
    title: 'Deluxe Pedicure',
    description: 'Hot stone massage, callus treatment, and deep conditioning for tired feet.',
    price: '$65',
    duration: '80 min',
  },
  {
    category: 'Nail Art',
    icon: '🎨',
    title: 'Custom Nail Art',
    description: 'Intricate hand-painted designs, from florals to geometric patterns — your vision brought to life.',
    price: 'From $15',
    duration: '30+ min',
  },
  {
    category: 'Nail Art',
    icon: '💎',
    title: 'Chrome & Foil',
    description: 'Stunning metallic finishes with chrome powder or holographic foil effects.',
    price: 'From $20',
    duration: '30+ min',
  },
  {
    category: 'Add-Ons',
    icon: '🌿',
    title: 'Paraffin Wax Treatment',
    description: 'Deeply moisturizing warm wax treatment that softens skin and relieves tension.',
    price: '$18',
    duration: '20 min',
  },
  {
    category: 'Add-Ons',
    icon: '💆',
    title: 'Extended Massage',
    description: 'An extra 15 minutes of therapeutic hand or foot massage to melt your stress away.',
    price: '$15',
    duration: '15 min',
  },
]

const categories: Category[] = ['All', 'Manicure', 'Pedicure', 'Nail Art', 'Add-Ons']

export default function Services() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? services : services.filter((s) => s.category === active)

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <Reveal className="services-header">
          <div className="lotus-ornament">
            <img src="/asset/lotus.svg" alt="" aria-hidden="true" style={{ width: 32, height: 32, opacity: 0.55 }} />
          </div>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Every treatment is tailored to your needs, using premium products
            and techniques for results you'll love.
          </p>
        </Reveal>

        <Reveal delay={150} className="services-tabs-wrap">
          <div className="services-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`services-tab${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="services-grid">
          {filtered.map((service, i) => (
            <Reveal key={service.title} delay={i * 70} className="service-card-reveal">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-footer">
                  <div className="service-price">
                    {service.price} <span>/ session</span>
                  </div>
                  <div className="service-duration">{service.duration}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="services-note">
            Prices may vary based on nail length and complexity.{' '}
            <a href="#contact">Contact us</a> for a custom quote.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
