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

const links = [
  {
    icon: '✉',
    label: 'EMAIL',
    value: 'yoon9yubo@gmail.com',
    href: 'mailto:yoon9yubo@gmail.com',
  },
  {
    icon: '⌥',
    label: 'GITHUB',
    value: 'github.com/gyuboyoon',
    href: 'https://github.com/gyuboyoon',
  },
  {
    icon: '✎',
    label: 'BLOG',
    value: 'velog.io/@yoon9yubo',
    href: 'https://velog.io/@yoon9yubo',
  },
]

export default function Contact() {
  return (
    <>
      {/* Contact */}
      <section id="contact" style={{ background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}>

            {/* 왼쪽 텍스트 */}
            <div>
              <RevealBox>
                <p style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11, color: 'var(--accent)',
                  letterSpacing: 3, textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  // contact
                </p>
              </RevealBox>

              <RevealBox delay={0.1}>
                <h2 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  fontWeight: 800, letterSpacing: -2,
                  lineHeight: 1.05, color: 'var(--text)',
                  marginBottom: 20,
                }}>
                  함께<br />만들어<br />
                  <span style={{ color: 'var(--accent)' }}>가요.</span>
                </h2>
              </RevealBox>

              <RevealBox delay={0.2}>
                <p style={{ fontSize: 16, color: 'var(--text2)', lineHeight: 1.8 }}>
                  새로운 기회나 협업 제안,<br />편하게 연락 주세요.
                </p>
              </RevealBox>
            </div>

            {/* 오른쪽 링크 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {links.map((link, i) => (
                <RevealBox key={link.label} delay={i * 0.1}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    whileHover={{ x: 8, borderColor: 'var(--accent)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16,
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '18px 22px',
                      textDecoration: 'none',
                    }}
                  >
                    <div style={{
                      width: 42, height: 42,
                      borderRadius: 10,
                      background: 'var(--tag-bg)',
                      border: '1px solid var(--tag-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      flexShrink: 0,
                    }}>
                      {link.icon}
                    </div>

                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: 12,
                        color: 'var(--text3)',
                        marginBottom: 2,
                      }}>
                        {link.label}
                      </p>
                      <p style={{
                        fontSize: 15,
                        color: 'var(--text)',
                        fontWeight: 500,
                      }}>
                        {link.value}
                      </p>
                    </div>

                    <span style={{ color: 'var(--text3)', fontSize: 18 }}>→</span>
                  </motion.a>
                </RevealBox>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '28px 60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12,
          color: 'var(--text3)',
        }}>
          © 2026 윤규보. All rights reserved.
        </span>
      </footer>
    </>
  )
}