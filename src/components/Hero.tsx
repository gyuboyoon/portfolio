// 'use client'

// import { motion } from 'framer-motion'

// const pills = ['Node.js', 'Next.js', 'AWS', 'n8n', 'AI API', 'LiteLLM']

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, delay },
// })

// export default function Hero() {
//   return (
//     <section id="hero" style={{
//       minHeight: '100vh',
//       display: 'flex', flexDirection: 'column', justifyContent: 'center',
//       padding: '120px 60px 80px',
//       maxWidth: 1200, margin: '0 auto',
//       position: 'relative',
//     }}>
//       {/* 배경 글로우 */}
//       <div style={{
//         position: 'fixed', top: '5%', right: 0,
//         width: 650, height: 650,
//         background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)',
//         pointerEvents: 'none', zIndex: 0,
//       }} />

//       <div style={{ position: 'relative', zIndex: 1 }}>
//         {/* 뱃지 */}
//         <motion.div {...fadeUp(0)} style={{
//           display: 'inline-flex', alignItems: 'center', gap: 8,
//           fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//           color: 'var(--accent)', background: 'var(--tag-bg)',
//           border: '1px solid var(--tag-border)',
//           borderRadius: 100, padding: '6px 16px', marginBottom: 36,
//         }}>
//           <span style={{ fontSize: 7, color: 'var(--success)' }}>●</span>
//           Available for new opportunities
//         </motion.div>

//         {/* 이름 */}
//         <motion.h1 {...fadeUp(0.1)} style={{
//           fontFamily: 'Syne, sans-serif',
//           fontSize: 'clamp(54px, 9vw, 108px)',
//           fontWeight: 800, lineHeight: 0.92,
//           letterSpacing: -4, color: 'var(--text)',
//           marginBottom: 28,
//         }}>
//           윤규보<br />
//           <span style={{ color: 'var(--accent)' }}>Gyubo</span>
//           <span style={{ color: 'var(--text3)', fontSize: '0.52em', letterSpacing: -1 }}> Yoon</span>
//         </motion.h1>

//         {/* 태그라인 */}
//         <motion.p {...fadeUp(0.2)} style={{
//           fontFamily: 'JetBrains Mono, monospace',
//           fontSize: 'clamp(13px, 1.8vw, 17px)',
//           color: 'var(--text2)', marginBottom: 24,
//           borderLeft: '3px solid var(--accent)', paddingLeft: 16,
//         }}>
//           커뮤니케이션부터{' '}
//           <span style={{ color: 'var(--accent2)' }}>AI·자동화</span>까지 — 실무를 넓게 커버하는 개발자
//         </motion.p>

//         {/* 설명 */}
//         <motion.p {...fadeUp(0.3)} style={{
//           fontSize: 16, color: 'var(--text2)',
//           maxWidth: 500, lineHeight: 1.9, marginBottom: 40,
//         }}>
//           사람을 먼저 읽고, 기술로 문제를 해결합니다.<br />
//           기획부터 배포까지, 팀과 함께 더 나은 시스템을 만듭니다.
//         </motion.p>

//         {/* 필 태그 */}
//         <motion.div {...fadeUp(0.4)} style={{
//           display: 'flex', flexWrap: 'wrap', gap: 9, marginBottom: 48,
//         }}>
//           {pills.map(pill => (
//             <span key={pill} style={{
//               fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//               color: 'var(--text2)', border: '1px solid var(--border2)',
//               borderRadius: 6, padding: '6px 13px', background: 'var(--surface)',
//               cursor: 'default', transition: 'all 0.2s',
//             }}>
//               {pill}
//             </span>
//           ))}
//         </motion.div>

//         {/* CTA 버튼 */}
//         <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
//           <a href="#projects" style={{
//             fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15,
//             background: 'var(--accent)', color: '#fff',
//             padding: '14px 30px', borderRadius: 8,
//             textDecoration: 'none', transition: 'all 0.25s',
//             boxShadow: '0 0 40px var(--accent-glow)',
//           }}>
//             프로젝트 보기 →
//           </a>
//           <a href="#about" style={{
//             fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 15,
//             background: 'transparent', color: 'var(--text)',
//             padding: '14px 30px', borderRadius: 8,
//             textDecoration: 'none', border: '1px solid var(--border2)',
//             transition: 'all 0.25s',
//           }}>
//             About
//           </a>
//           <a href="/resume.pdf" download style={{
//             fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 15,
//             background: 'var(--tag-bg)', color: 'var(--accent)',
//             padding: '14px 30px', borderRadius: 8,
//             textDecoration: 'none', border: '1px solid var(--tag-border)',
//             transition: 'all 0.25s',
//           }}>
//             이력서 다운로드 ↓
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const pills = ['Node.js', 'Next.js', 'React', 'AWS 인프라', 'n8n', '자동화', 'ChatGPT API', 'LiteLLM', 'Supabase']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 60px 80px',
      maxWidth: 1200,
      margin: '0 auto',
      position: 'relative',
    }}>
      {/* 배경 글로우 */}
      <div style={{
        position: 'fixed', top: '5%', right: 0,
        width: 650, height: 650,
        background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: 80,
        alignItems: 'center',
        width: '100%',
      }}>

        {/* 왼쪽 텍스트 */}
        <div>
          {/* 뱃지 */}
          <motion.div {...fadeUp(0)} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
            color: 'var(--accent)', background: 'var(--tag-bg)',
            border: '1px solid var(--tag-border)',
            borderRadius: 100, padding: '6px 16px', marginBottom: 32,
          }}>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ fontSize: 7, color: 'var(--success)' }}
            >
              ●
            </motion.span>
            Available for new opportunities
          </motion.div>

          {/* 이름 */}
          <motion.h1 {...fadeUp(0.1)} style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -3,
            color: 'var(--text)',
            marginBottom: 24,
          }}>
            윤규보<br />
            <span style={{ color: 'var(--accent)' }}>Gyubo</span>
            <span style={{ color: 'var(--text3)', fontSize: '0.55em', letterSpacing: -1 }}> Yoon</span>
          </motion.h1>

          {/* 태그라인 */}
          <motion.p {...fadeUp(0.2)} style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            color: 'var(--text2)', marginBottom: 20,
            borderLeft: '3px solid var(--accent)', paddingLeft: 16,
          }}>
            커뮤니케이션부터{' '}
            <span style={{ color: 'var(--accent2)' }}>AI·자동화</span>까지<br />
            실무를 넓게 커버하는 개발자
          </motion.p>

          {/* 설명 */}
          <motion.p {...fadeUp(0.3)} style={{
            fontSize: 15, color: 'var(--text2)',
            maxWidth: 460, lineHeight: 1.9, marginBottom: 36,
          }}>
            사람을 먼저 읽고, 기술로 문제를 해결합니다.<br />
            기획부터 배포까지, 팀과 함께 더 나은 시스템을 만듭니다.
          </motion.p>

          {/* 필 태그 */}
          <motion.div {...fadeUp(0.4)} style={{
            display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40,
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

          {/* CTA */}
          <motion.div {...fadeUp(0.5)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <motion.a
              href="#projects"
              whileHover={{ y: -3, boxShadow: '0 0 60px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15,
                background: 'var(--accent)', color: '#fff',
                padding: '13px 28px', borderRadius: 8,
                textDecoration: 'none',
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
                padding: '13px 28px', borderRadius: 8,
                textDecoration: 'none', border: '1px solid var(--border2)',
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
                padding: '13px 28px', borderRadius: 8,
                textDecoration: 'none', border: '1px solid var(--tag-border)',
              }}
            >
              이력서 다운로드 ↓
            </motion.a>
          </motion.div>
        </div>

        {/* 오른쪽 사진 */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ position: 'relative', flexShrink: 0 }}
        >
          {/* 글로우 링 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: -3,
              borderRadius: 24,
              background: 'linear-gradient(135deg, var(--accent), transparent, var(--accent2), transparent)',
              zIndex: 0,
            }}
          />

          {/* 사진 래퍼 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'relative', zIndex: 1,
              width: 280, height: 400,
              borderRadius: 22,
              overflow: 'hidden',
              border: '2px solid var(--border2)',
              background: 'var(--surface2)',
            }}
          >
            <Image
              src="/profile.jpg"
              alt="윤규보 프로필"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />

            {/* 하단 오버레이 */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '20px 18px 16px',
              background: 'linear-gradient(transparent, rgba(8,11,18,0.9))',
            }}>
              <p style={{
                fontFamily: 'Syne, sans-serif', fontSize: 15,
                fontWeight: 700, color: '#fff', marginBottom: 2,
              }}>
                윤규보
              </p>
              <p style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 11, color: 'var(--accent2)',
              }}>
                Developer · AX Lead
              </p>
            </div>
          </motion.div>

          {/* 플로팅 뱃지 */}
          {/* <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', top: -16, right: -16, zIndex: 2,
              background: 'var(--surface)',
              border: '1px solid var(--tag-border)',
              borderRadius: 10, padding: '8px 12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: 'var(--accent)',
            }}
          >
            ⚡ AI · 자동화
          </motion.div> */}

          {/* <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            style={{
              position: 'absolute', bottom: -16, left: -16, zIndex: 2,
              background: 'var(--surface)',
              border: '1px solid var(--border2)',
              borderRadius: 10, padding: '8px 12px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11, color: 'var(--text2)',
            }}
          >
            🏗 4년차 개발자
          </motion.div> */}
        </motion.div>

      </div>
    </section>
  )
}