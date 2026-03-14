import { useState } from 'react'
import Reveal from './Reveal'
import { lotusUrl } from '../assets'
import './Services.css'

type Category = 'Manicures' | 'Nail Enhancement' | 'Dip Power' | 'Waxing' | 'Pedicure' | 'Spa Pedicure' | 'Add-Ons'

const services = [
  // MANICURES
  {
    category: 'Manicures',
    icon: '💅',
    title: 'Manicures',
    description: 'Classic manicure with shape, buff, and cuticle care.',
    price: '$23',
    duration: null,
  },
  {
    category: 'Manicures',
    icon: '💅',
    title: 'Gel Manicures',
    description: 'Long-lasting gel polish manicure.',
    price: '$33',
    duration: null,
  },
  {
    category: 'Manicures',
    icon: '💅',
    title: 'Gel Polish Change Hand',
    description: 'Fresh gel color change for hands.',
    price: '$22',
    duration: null,
  },
  {
    category: 'Pedicure',
    icon: '🫧',
    title: 'Gel Polish Change Toes',
    description: 'Fresh gel color change for toes.',
    price: '$27',
    duration: null,
  },
  {
    category: 'Manicures',
    icon: '💅',
    title: 'Gel Removal',
    description: 'Professional gel polish removal.',
    price: '$10',
    duration: null,
  },

  // Nail Enhancement
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Acrylic Fullset',
    description: 'Full set of acrylic nail extensions.',
    price: '$48',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Acrylic Refill',
    description: 'Acrylic nail maintenance and refill.',
    price: '$38',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Liquid Gel Fullset',
    description: 'Full set of liquid gel nail extensions.',
    price: '$58',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Liquid Gel Refill',
    description: 'Liquid gel nail maintenance and refill.',
    price: '$48',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Pink & White Fullset',
    description: 'Full set of classic pink and white Nail Enhancement.',
    price: '$60',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Pink & White Refill',
    description: 'Pink and white acrylic maintenance and refill.',
    price: '$50',
    duration: null,
  },
  {
    category: 'Nail Enhancement',
    icon: '✨',
    title: 'Pink Refill',
    description: 'Pink acrylic nail maintenance and refill.',
    price: '$45',
    duration: null,
  },

  // DIP POWER
  {
    category: 'Dip Power',
    icon: '⭐️',
    title: 'Dip Power Manicure',
    description: 'Dip powder manicure for long-lasting color and strength.',
    price: '$43',
    duration: null,
  },
  {
    category: 'Dip Power',
    icon: '⭐️',
    title: 'Dip Power Fullset',
    description: 'Full set of dip powder nail extensions.',
    price: '$50',
    duration: null,
  },
  {
    category: 'Dip Power',
    icon: '⭐️',
    title: "Dip Power Ombre'",
    description: 'Dip powder ombre nail design.',
    price: '$60',
    duration: null,
  },
  {
    category: 'Dip Power',
    icon: '⭐️',
    title: 'Dip Removal',
    description: 'Safe and professional dip powder removal.',
    price: '$10',
    duration: null,
  },

  // Add-Ons
  {
    category: 'Add-Ons',
    icon: '🧒',
    title: 'Kid Manicures',
    description: 'Fun and gentle manicure for kids.',
    price: '$10',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🧒',
    title: 'Kid Pedicures',
    description: 'Fun and gentle pedicure for kids.',
    price: '$20',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Repairs',
    description: 'Nail repair for broken or damaged nails.',
    price: '$5+',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Nail Shapes',
    description: 'Custom nail shaping to your desired style.',
    price: '$5+',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Nail Length',
    description: 'Nail length adjustment service.',
    price: '$5+',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Nail Art Designs',
    description: 'Custom nail art and decorative designs.',
    price: '$5+',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'French',
    description: 'Classic French tip nail design.',
    price: '$7+',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Chrome on Gel',
    description: 'Shimmery chrome finish applied over gel.',
    price: '$15',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Matte Top',
    description: 'Matte top coat finish for a modern look.',
    price: '$5',
    duration: null,
  },
  {
    category: 'Add-Ons',
    icon: '🎨',
    title: 'Cat Eye',
    description: 'Magnetic cat eye gel effect.',
    price: '$10',
    duration: null,
  },

  // WAXING
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Eyebrows',
    description: 'Eyebrow waxing and shaping.',
    price: '$10',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Lip',
    description: 'Upper lip waxing.',
    price: '$8',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Chin',
    description: 'Chin waxing for smooth skin.',
    price: '$12',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Eyebrows, Lip & Chin',
    description: 'Full facial waxing combo: brows, lip, and chin.',
    price: '$28',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Full Face',
    description: 'Complete full face waxing service.',
    price: '$25+',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Underarms',
    description: 'Underarm waxing for smooth results.',
    price: '$15+',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Half/Full Arms',
    description: 'Arm waxing, half or full length.',
    price: '$25+',
    duration: null,
  },
  {
    category: 'Waxing',
    icon: '🪷',
    title: 'Half/Full Legs',
    description: 'Leg waxing, half or full length.',
    price: '$25+',
    duration: null,
  }
]

const categories: Category[] = ['Manicures', 'Nail Enhancement', 'Dip Power', 'Pedicure', 'Spa Pedicure', 'Waxing', 'Add-Ons']

export default function Services() {
  const [active, setActive] = useState<Category>('Manicures')

  const filtered = services.filter((s) => s.category === active)

  return (
    <section id="services" className="services">
      <div className="services-inner">
        <Reveal className="services-header">
          <div className="lotus-ornament">
            <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 50, height: 50, opacity: 0.55 }} />
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
