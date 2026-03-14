import { useState } from 'react'
import Reveal from './Reveal'
import { lotusUrl } from '../assets'
import { REVIEWS_URL } from '../config'
import './Testimonials.css'

const reviews = [
  {
    name: 'Danielle F.',
    date: 'March 2026',
    text: "Been coming here for years and the quality never drops. Got a full set with chrome on gel and so many people stopped me to ask where I got my nails done. Truly the best in the area!",
  },
  {
    name: 'Yuki M.',
    date: 'February 2026',
    text: "Brought my sister for her birthday and we both got the jelly spa pedicure. The whole experience was so relaxing and fun. The staff made us feel so special. We will definitely be back!",
  },
  {
    name: 'Chloe A.',
    date: 'January 2026',
    text: "My dip powder ombre came out absolutely stunning. The technician walked me through everything and the result was beyond what I imagined. Five stars all day!",
  },
  {
    name: 'Morgan T.',
    date: 'December 2025',
    text: "Popped in for a quick gel color change before the holidays and was blown away by how fast and perfect it was. The salon always feels so peaceful. My happy place!",
  },
  {
    name: 'Vanessa L.',
    date: 'November 2025',
    text: "Got the ultimate spa pedicure as a treat to myself and it was worth every penny. The hot stone massage alone is worth coming back for. Everyone here is so kind and talented.",
  },
  {
    name: 'Grace K.',
    date: 'October 2025',
    text: "I moved to the area recently and tried Bellacure on a whim — now I won't go anywhere else. The cleanliness is top notch, prices are fair, and my nails always last.",
  },
  {
    name: 'Samantha P.',
    date: 'September 2025',
    text: "Came in for eyebrow waxing and a gel manicure and left looking and feeling like a whole new person. The precision on my brows was perfect. Highly recommend to everyone!",
  },
  {
    name: 'Natalie B.',
    date: 'August 2025',
    text: "I always leave here so happy. The technicians are skilled, the vibe is calm and luxurious, and they never rush you. The reflexology add-on with the pedicure is a must-try!",
  },
  {
    name: 'Lauren D.',
    date: 'July 2025',
    text: "Got a pink and white full set for a wedding and received so many compliments. They matched the exact shape I wanted perfectly. Professional, clean, and genuinely lovely people.",
  },
  {
    name: 'Mia R.',
    date: 'June 2025',
    text: "This salon is a gem. My cat eye gel looked perfect and lasted almost a month. The atmosphere is so calming and the staff is incredibly talented and warm.",
  },
  {
    name: 'Olivia H.',
    date: 'May 2025',
    text: "I tried the aroma therapy pedicure for the first time and I am completely hooked. My feet felt amazing for weeks after. The whole team truly cares about making you feel your best.",
  },
  {
    name: 'Emma S.',
    date: 'April 2025',
    text: "Discovered Bellacure a few months ago and have already recommended it to everyone I know. The gel manicure lasts so much longer than anywhere else and the prices are beyond reasonable.",
  },
  {
    name: 'Brittany W.',
    date: 'March 2025',
    text: "Absolutely incredible experience every single time. The staff remembers your preferences and makes you feel so valued. Got the aroma therapy pedicure and left feeling completely renewed.",
  },
  {
    name: 'Hannah C.',
    date: 'March 2025',
    text: "Best nail salon around, period. Clean, professional, and the results always exceed my expectations. My liquid gel set has been on for a month and still looks brand new!",
  },
  {
    name: 'Kayla R.',
    date: 'March 2025',
    text: "I've been to a lot of nail salons and Bellacure is by far the best. The attention to detail is incredible and the salon is always spotless. My gel manicure lasted over 3 weeks without a single chip!",
  },
  {
    name: 'Tiffany H.',
    date: 'March 2025',
    text: 'Came in for the jelly spa pedicure and WOW. It felt like a full spa day. The staff is so warm and friendly — they make you feel like family. Already booked my next appointment.',
  },
  {
    name: 'Jessica M.',
    date: 'February 2025',
    text: 'Absolutely love this salon! The staff is so welcoming and my nails always come out perfect. Been coming here for over a year and will never go anywhere else.',
  },
  {
    name: 'Linh T.',
    date: 'February 2025',
    text: 'Best nail salon in the area hands down. The jelly spa pedicure is absolutely heavenly — my feet have never felt so soft. Very clean and relaxing atmosphere.',
  },
  {
    name: 'Rachel S.',
    date: 'January 2025',
    text: 'I got the dip powder ombré and it is stunning. Everyone keeps asking where I get my nails done. The technicians really take their time to make sure everything is perfect.',
  },
  {
    name: 'Amanda K.',
    date: 'January 2025',
    text: 'Such a hidden gem! I came in for a gel manicure and left feeling like royalty. The salon is beautiful, super clean, and the prices are very reasonable.',
  },
  {
    name: 'Priya S.',
    date: 'December 2024',
    text: "I took my mom here as a birthday treat and we both had the ultimate spa pedicure. She cried happy tears — that's how good it was. The hot stone massage is unreal.",
  },
  {
    name: 'Sophia N.',
    date: 'December 2024',
    text: 'I brought my daughter for the kids manicure and we both had a wonderful experience. The staff was so sweet and patient. We will definitely be back!',
  },
  {
    name: 'Marie L.',
    date: 'November 2024',
    text: 'My go-to spot for self-care. The ultimate spa pedicure is worth every penny — the hot stone massage is incredible. Always leave feeling refreshed and beautiful.',
  },
]

function StarRating() {
  return (
    <div className="star-rating" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const visible = [
    reviews[current % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <Reveal className="testimonials-header">
          <div className="lotus-ornament">
            <img src={lotusUrl} alt="" aria-hidden="true" style={{ width: 36, height: 36, opacity: 0.55 }} />
          </div>
          <p className="section-label">Google Reviews</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="testimonials-cards">
            {visible.map((review, i) => (
              <div key={`${review.name}-${i}`} className={`testimonial-card${i === 1 ? ' featured' : ''}`}>
                <StarRating />
                <p className="testimonial-text">"{review.text}"</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{review.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{review.name}</div>
                    <div className="testimonial-date">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <div className="testimonials-nav">
            <button className="nav-btn" onClick={prev} aria-label="Previous review">←</button>
            <div className="nav-dots">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`nav-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button className="nav-btn" onClick={next} aria-label="Next review">→</button>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="testimonials-cta">
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="see-more-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See All Reviews on Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
