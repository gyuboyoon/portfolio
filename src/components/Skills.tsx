// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'

// function RevealBox({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-80px' })
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 28 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay }}
//     >
//       {children}
//     </motion.div>
//   )
// }

// const skillGroups = [
//   {
//     icon: '⚙️',
//     title: 'Backend',
//     items: ['Node.js', 'Express', 'Python', 'Flask', 'PHP'],
//     hot: ['Node.js', 'Express'],
//   },
//   {
//     icon: '🖥️',
//     title: 'Frontend',
//     items: ['Next.js', 'React', 'JavaScript ES6+', 'HTML/CSS'],
//     hot: ['Next.js', 'React'],
//   },
//   {
//     icon: '🗄️',
//     title: 'Database',
//     items: ['Supabase', 'MySQL', 'MongoDB', 'AWS RDS'],
//     hot: ['Supabase'],
//   },
//   {
//     icon: '☁️',
//     title: 'Infra & DevOps',
//     items: ['AWS EC2', 'Auto Scaling', 'S3', 'CloudFront', 'GitHub Actions', 'PM2'],
//     hot: ['AWS EC2'],
//   },
//   {
//     icon: '🤖',
//     title: 'AI & Automation',
//     items: ['n8n', 'LiteLLM', 'ChatGPT API', 'Gemini API', 'Claude Code', 'Copilot'],
//     hot: ['n8n', 'LiteLLM'],
//   },
//   {
//     icon: '🛠️',
//     title: 'Tools',
//     items: ['Git / GitHub', 'Slack', 'Notion', 'Jira', 'Miro'],
//     hot: [],
//   },
// ]

// export default function Skills() {
//   return (
//     <section id="skills" style={{ background: 'var(--bg2)' }}>
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

//         <RevealBox>
//           <p style={{
//             fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//             color: 'var(--accent)', letterSpacing: 3,
//             textTransform: 'uppercase', marginBottom: 12,
//           }}>
//             // tech stack
//           </p>
//         </RevealBox>

//         <RevealBox delay={0.1}>
//           <h2 style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(30px, 5vw, 52px)',
//             fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
//             color: 'var(--text)', marginBottom: 60,
//           }}>
//             기술 <span style={{ color: 'var(--accent)' }}>스택</span>
//           </h2>
//         </RevealBox>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3, 1fr)',
//           gap: 18,
//         }}>
//           {skillGroups.map((group, i) => (
//             <RevealBox key={group.title} delay={i * 0.08}>
//               <div style={{
//                 background: 'var(--surface)',
//                 border: '1px solid var(--border)',
//                 borderRadius: 14, padding: 26,
//                 transition: 'all 0.3s', height: '100%',
//               }}>
//                 <div style={{ fontSize: 22, marginBottom: 10 }}>{group.icon}</div>
//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//                   color: 'var(--accent)', letterSpacing: 2,
//                   textTransform: 'uppercase', marginBottom: 16,
//                 }}>
//                   {group.title}
//                 </p>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
//                   {group.items.map(item => {
//                     const isHot = group.hot.includes(item)
//                     return (
//                       <span key={item} style={{
//                         fontSize: 13,
//                         color: isHot ? 'var(--accent2)' : 'var(--text)',
//                         background: isHot ? 'var(--tag-bg)' : 'var(--surface2)',
//                         border: `1px solid ${isHot ? 'var(--tag-border)' : 'var(--border)'}`,
//                         borderRadius: 6, padding: '5px 11px',
//                         transition: 'all 0.2s',
//                       }}>
//                         {item}
//                       </span>
//                     )
//                   })}
//                 </div>
//               </div>
//             </RevealBox>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function RevealBox({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

const skillGroups = [
  { icon: '⚙️', title: 'Backend', items: ['Node.js', 'Express', 'Python', 'Flask', 'PHP'], hot: ['Node.js', 'Express'] },
  { icon: '🖥️', title: 'Frontend', items: ['Next.js', 'React', 'JavaScript ES6+', 'HTML/CSS'], hot: ['Next.js', 'React'] },
  { icon: '🗄️', title: 'Database', items: ['Supabase', 'MySQL', 'MongoDB', 'AWS RDS'], hot: ['Supabase'] },
  { icon: '☁️', title: 'Infra & DevOps', items: ['AWS EC2', 'Auto Scaling', 'S3', 'CloudFront', 'GitHub Actions', 'PM2'], hot: ['AWS EC2'] },
  { icon: '🤖', title: 'AI & Automation', items: ['n8n', 'LiteLLM', 'ChatGPT API', 'Gemini API', 'Claude Code', 'Copilot'], hot: ['n8n', 'LiteLLM'] },
  { icon: '🛠️', title: 'Tools', items: ['Git / GitHub', 'Slack', 'Notion', 'Jira', 'Miro'], hot: [] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            // tech stack
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, color: 'var(--text)', marginBottom: 60 }}>
            기술 <span style={{ color: 'var(--accent)' }}>스택</span>
          </h2>
        </RevealBox>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {skillGroups.map((group, i) => (
            <RevealBox key={group.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                transition={{ duration: 0.25 }}
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 26, height: '100%' }}
              >
                <div style={{ fontSize: 22, marginBottom: 10 }}>{group.icon}</div>
                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
                  {group.title}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {group.items.map(item => {
                    const isHot = group.hot.includes(item)
                    return (
                      <motion.span
                        key={item}
                        whileHover={{ borderColor: 'var(--accent2)', color: 'var(--accent2)', y: -2 }}
                        transition={{ duration: 0.15 }}
                        style={{
                          fontSize: 13,
                          color: isHot ? 'var(--accent2)' : 'var(--text)',
                          background: isHot ? 'var(--tag-bg)' : 'var(--surface2)',
                          border: `1px solid ${isHot ? 'var(--tag-border)' : 'var(--border)'}`,
                          borderRadius: 6, padding: '5px 11px',
                          display: 'inline-block', cursor: 'default',
                        }}
                      >
                        {item}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>
            </RevealBox>
          ))}
        </div>

      </div>
    </section>
  )
}