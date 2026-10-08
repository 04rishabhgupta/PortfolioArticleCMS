'use client'

import { motion } from 'motion/react'

const items = [
  {
    number: '01',
    title: 'Innovation',
    text: 'Connecting ideas, research and technology with real-world impact.',
  },
  {
    number: '02',
    title: 'Entrepreneurship',
    text: 'Supporting ambitious ideas and the people working to bring them to life.',
  },
  {
    number: '03',
    title: 'Technology',
    text: 'Exploring the bridge between technology, institutions and industry.',
  },
]

export default function SpotlightSection() {
  return (
    <section className="spotlight-section" aria-labelledby="spotlight-heading">
      <div className="wrap">
        <div className="spotlight-intro">
          <p className="spotlight-eyebrow">Focus</p>

          <motion.h2
            id="spotlight-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ideas, innovation
            <em> and impact.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Exploring the ideas, institutions and technologies that shape
            meaningful change.
          </motion.p>
        </div>

        <div className="spotlight-grid">
          {items.map((item, index) => (
            <motion.article
              key={item.number}
              className="spotlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
            >
              <span className="spotlight-number">{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>

              <span className="spotlight-arrow">↗</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}