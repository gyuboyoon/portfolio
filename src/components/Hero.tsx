'use client'

import { motion } from 'framer-motion'

const pills = ['Node.js', 'Next.js', 'TypeScript', 'Python', 'AWS', 'n8n', 'ChatGPT API', 'LiteLLM', 'Supabase']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '120px 60px 80px',
      maxWidth: 1200, margin: '0 auto',
      position: 'relative',
    }}>
      <div style={{
        position: 'fixed', top: '5%', right: 0,
        width: 650, height: 650,
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp(0)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
          color: 'var(--accent)', background: 'var(--tag-bg)',
          border: '1px solid var(--tag-border)',
          borderRadius: 100, padding: '6px 16px', marginBottom: 36,
        }}>
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ fontSize: 7, color: 'var(--success)' }}
          >●</motion.span>
          Full-Cycle Developer · AI & Automation · Open to new opportunities
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(54px, 9vw, 108px)',
          fontWeight: 800, lineHeight: 0.92,
          letterSpacing: -4, color: 'var(--text)',
          marginBottom: 28,
        }}>
          윤규보<br />
          <span style={{ color: 'var(--accent)' }}>Gyubo</span>
          <span style={{ color: 'var(--text3)', fontSize: '0.52em', letterSpacing: -1 }}> Yoon</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 'clamp(13px, 1.8vw, 17px)',
          color: 'var(--text2)', marginBottom: 24,
          borderLeft: '3px solid var(--accent)', paddingLeft: 16,
        }}>
          커뮤니케이션부터{' '}
          <span style={{ color: 'var(--accent2)' }}>AI·자동화</span>까지 — 실무를 넓게 커버하는 개발자
        </motion.p>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: 16, color: 'var(--text2)',
          maxWidth: 500, lineHeight: 1.9, marginBottom: 40,
        }}>
          사람을 먼저 읽고, 기술로 문제를 해결합니다.<br />
          기획부터 배포까지, 팀과 함께 더 나은 시스템을 만듭니다.
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48,
        }}>
          {pills.map((pill, i) => (
            <motion.span
              key={pill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              whileHover={{ y: -3, borderColor: 'var(--accent)', color: 'var(--accent)' }}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                color: 'var(--text2)', border: '1px solid var(--border2)',
                borderRadius: 6, padding: '5px 12px',
                background: 'var(--surface)', cursor: 'default',
              }}
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <motion.a
            href="#projects"
            whileHover={{ y: -3, boxShadow: '0 0 60px var(--accent-glow)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15,
              background: 'var(--accent)', color: '#fff',
              padding: '14px 30px', borderRadius: 8, textDecoration: 'none',
              boxShadow: '0 0 40px var(--accent-glow)',
            }}
          >
            프로젝트 보기 →
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ y: -3, borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 15,
              background: 'transparent', color: 'var(--text)',
              padding: '14px 30px', borderRadius: 8, textDecoration: 'none',
              border: '1px solid var(--border2)',
            }}
          >
            About
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 15,
              background: 'var(--tag-bg)', color: 'var(--accent)',
              padding: '14px 30px', borderRadius: 8, textDecoration: 'none',
              border: '1px solid var(--tag-border)',
            }}
          >
            이력서 다운로드 ↓
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}