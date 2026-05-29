'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function RevealBox({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

const education = [
  {
    school: '한국방송통신대학교',
    major: '컴퓨터과학과',
    period: '2023.09 — 2026.02',
    icon: '🎓',
  },
  {
    school: '항해99',
    major: 'Node.js 백엔드 부트캠프',
    period: '2022.03 — 2022.06',
    icon: '⚓',
  },
]

const certifications = [
  {
    name: '정보처리산업기사',
    date: '2024.09',
    icon: '📋',
  },
  {
    name: 'SQLD',
    date: '2024.09',
    icon: '🗄️',
  },
]

const CARD_HEIGHT = 100

export default function Education() {
  return (
    <section id="education" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'var(--accent)', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 12,
          }}>
            // education & certifications
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
            color: 'var(--text)', marginBottom: 60,
          }}>
            학력 <span style={{ color: 'var(--accent)' }}>&</span> 자격증
          </h2>
        </RevealBox>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}>

          {/* 학력 */}
          <div>
            <RevealBox delay={0.1}>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                color: 'var(--text3)', letterSpacing: 2,
                textTransform: 'uppercase', marginBottom: 20,
              }}>
                Education
              </p>
            </RevealBox>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {education.map((edu, i) => (
                <RevealBox key={edu.school} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: 12, padding: '0 22px',
                      height: CARD_HEIGHT,
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20,
                    }}>
                      {edu.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 15,
                        fontWeight: 700, color: 'var(--text)', marginBottom: 3,
                      }}>
                        {edu.school}
                      </p>
                      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 3 }}>
                        {edu.major}
                      </p>
                      <p style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 11, color: 'var(--text3)',
                      }}>
                        {edu.period}
                      </p>
                    </div>
                  </motion.div>
                </RevealBox>
              ))}
            </div>
          </div>

          {/* 자격증 */}
          <div>
            <RevealBox delay={0.15}>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                color: 'var(--text3)', letterSpacing: 2,
                textTransform: 'uppercase', marginBottom: 20,
              }}>
                Certifications
              </p>
            </RevealBox>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {certifications.map((cert, i) => (
                <RevealBox key={cert.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: 12, padding: '0 22px',
                      height: CARD_HEIGHT,
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                      background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20,
                    }}>
                      {cert.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 15,
                        fontWeight: 700, color: 'var(--text)', marginBottom: 3,
                      }}>
                        {cert.name}
                      </p>
                      <p style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 11, color: 'var(--text3)',
                      }}>
                        {cert.date}
                      </p>
                    </div>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                      color: 'var(--success)', background: 'rgba(52,211,153,0.1)',
                      border: '1px solid rgba(52,211,153,0.25)',
                      borderRadius: 4, padding: '4px 10px', flexShrink: 0,
                    }}>
                      취득
                    </span>
                  </motion.div>
                </RevealBox>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}