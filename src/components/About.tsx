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

// const stats = [
//   { num: '4+', label: 'Years of\nDevelopment' },
//   { num: '40%', label: 'API 응답속도\n단축' },
//   { num: '50%', label: '보고서 작성\n시간 절감' },
//   { num: '0%', label: '채팅 메시지\n유실률' },
// ]

// const identityTags = [
//   '커뮤니케이터', '기획자', '개발자',
//   'AI', '자동화', '풀사이클', '사용자 중심', '실행하는 사람',
// ]

// const stories = [
//   {
//     num: '01 / ORIGIN',
//     title: '사람을 먼저 읽는 시각',
//     paragraphs: [
//       '개발자가 되기 전, 백화점과 바(Bar) 등 서비스 현장에서 오랜 시간을 보냈습니다.',
//       '하루에도 수십 명을 만나며 자연스럽게 체득한 것이 있었습니다.\n말을 듣기 전에 상대가 무엇을 원하는지 먼저 읽는 것.\n같은 말도 어떻게 전달하느냐에 따라 결과가 완전히 달라진다는 것.',
//     ],
//     quote: '이 시각이 지금도 제 개발의 출발점입니다.',
//   },
//   {
//     num: '02 / TURNING POINT',
//     title: '생각하는 걸 뭐든 만들 수 있다',
//     paragraphs: [
//       '어느 날 들은 한 마디가 모든 것을 바꿨습니다.',
//       '"컴퓨터 프로그램으로는 생각하는 것을 무엇이든 만들 수 있다."',
//       '그 순간 \'내가 필요한 걸 직접 만들 수 있겠다\'는 생각이 들었고, 주변 개발자 지인들에게 질문을 쏟아내며 독학으로 개발을 시작했습니다.',
//     ],
//   },
//   {
//     num: '03 / NOW',
//     title: '개발하고, 소통하고, 자동화합니다',
//     paragraphs: [
//       'AX팀 팀장으로서 기획부터 n8n 자동화 구축까지 전 과정을 주도했습니다.',
//       '개발자와 비개발 직군 사이를 잇는 커뮤니케이터로서 팀의 불편함을 시스템으로 전환하고, AI 도구로 아이디어를 빠르게 서비스로 연결합니다.',
//     ],
//     quote: '코드로 시작해서, 구조로 끝냅니다.',
//   },
// ]

// export default function About() {
//   return (
//     <section id="about" style={{ background: 'var(--bg2)' }}>
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

//         <RevealBox>
//           <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
//             // about me
//           </p>
//         </RevealBox>

//         <RevealBox delay={0.1}>
//           <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, color: 'var(--text)', marginBottom: 60 }}>
//             어떤 개발자인가요,<br />
//             <span style={{ color: 'var(--accent)' }}>윤규보는.</span>
//           </h2>
//         </RevealBox>

//         {/* 스토리 카드 3열 */}
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 28 }}>
//           {stories.map((story, i) => (
//             <RevealBox key={story.num} delay={i * 0.12}>
//               <motion.div
//                 whileHover={{ y: -6, borderColor: 'var(--accent)', boxShadow: '0 16px 48px var(--accent-glow)' }}
//                 transition={{ duration: 0.25 }}
//                 style={{
//                   background: 'var(--story-bg)', border: '1px solid var(--story-border)',
//                   borderRadius: 16, padding: '32px 28px',
//                   display: 'flex', flexDirection: 'column',
//                   height: '100%', cursor: 'default',
//                 }}
//               >
//                 <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 2, marginBottom: 16, paddingBottom: 14, borderBottom: '1px solid var(--story-border)' }}>
//                   {story.num}
//                 </p>
//                 <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, color: 'var(--text)', marginBottom: 14, lineHeight: 1.3 }}>
//                   {story.title}
//                 </p>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
//                   {story.paragraphs.map((p, j) => (
//                     <p key={j} style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
//                       {p}
//                     </p>
//                   ))}
//                   {story.quote && (
//                     <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--accent2)', background: 'var(--tag-bg)', borderLeft: '3px solid var(--accent)', padding: '10px 14px', borderRadius: '0 8px 8px 0', marginTop: 6, lineHeight: 1.7 }}>
//                       {story.quote}
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </RevealBox>
//           ))}
//         </div>

//         {/* 스탯 2x2 + Identity */}
//         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
//           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
//             {stats.map((s, i) => (
//               <RevealBox key={s.num} delay={i * 0.1}>
//                 <motion.div
//                   whileHover={{ y: -4, borderColor: 'var(--accent)' }}
//                   transition={{ duration: 0.25 }}
//                   style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: '26px 20px', textAlign: 'center' }}
//                 >
//                   <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 40, fontWeight: 800, color: 'var(--accent)', letterSpacing: -2, lineHeight: 1 }}>
//                     {s.num}
//                   </p>
//                   <p style={{ fontSize: 12, color: 'var(--text2)', marginTop: 8, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
//                     {s.label}
//                   </p>
//                 </motion.div>
//               </RevealBox>
//             ))}
//           </div>

//           {/* <RevealBox delay={0.2}>
//             <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, padding: 28, height: '100%',
//     display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
//               <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
//                 // Identity
//               </p>
//               <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
//                 {identityTags.map(tag => (
//                   <motion.span
//                     key={tag}
//                     whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', y: -2 }}
//                     transition={{ duration: 0.15 }}
//                     style={{ fontSize: 13, color: 'var(--text)', background: 'var(--surface2)', border: '1px solid var(--border2)', borderRadius: 20, padding: '7px 15px', cursor: 'default', display: 'inline-block' }}
//                   >
//                     {tag}
//                   </motion.span>
//                 ))}
//               </div>
//             </div>
//           </RevealBox> */}
//           <RevealBox delay={0.2}>
//             <div style={{
//                 background: 'var(--surface)', border: '1px solid var(--border)',
//                 borderRadius: 14, padding: 28, height: '100%',
//                 display: 'flex', flexDirection: 'column',
//                 justifyContent: 'center', alignItems: 'center', gap: 20,
//             }}>
//                 <div style={{ textAlign: 'center' }}>
//                 <p style={{
//                     fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//                     color: 'var(--accent)', letterSpacing: 2,
//                     textTransform: 'uppercase', marginBottom: 12,
//                 }}>
//                     // cover letter
//                 </p>
//                 <p style={{
//                     fontFamily: 'Syne, sans-serif', fontSize: 22,
//                     fontWeight: 700, color: 'var(--text)', marginBottom: 8,
//                 }}>
//                     자기소개서
//                 </p>
//                 <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.7 }}>
//                     개발자로서의 성장 스토리와<br />
//                     앞으로의 방향을 담았습니다.
//                 </p>
//                 </div>

//                 <motion.a
//                 href="/coverletter.pdf"
//                 download
//                 whileHover={{ y: -3, boxShadow: '0 0 40px var(--accent-glow)' }}
//                 whileTap={{ scale: 0.97 }}
//                 style={{
//                     fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15,
//                     background: 'var(--accent)', color: '#fff',
//                     padding: '14px 36px', borderRadius: 8,
//                     textDecoration: 'none', display: 'inline-block',
//                     boxShadow: '0 0 24px var(--accent-glow)',
//                 }}
//                 >
//                 자기소개서 다운로드 ↓
//                 </motion.a>

//                 <p style={{
//                 fontFamily: 'JetBrains Mono, monospace',
//                 fontSize: 11, color: 'var(--text3)',
//                 }}>
//                 PDF · 한국어
//                 </p>
//             </div>
//             </RevealBox>
//         </div>

//       </div>
//     </section>
//   )
// }

// // ----2----
// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'
// import Image from 'next/image'

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

// const stories = [
//   {
//     num: '01 / ORIGIN',
//     title: '사람을 먼저 읽는 시각',
//     paragraphs: [
//       '개발자가 되기 전, 백화점과 바(Bar) 등 서비스 현장에서 오랜 시간을 보냈습니다.',
//       '하루에도 수십 명을 만나며 자연스럽게 체득한 것이 있었습니다.\n말을 듣기 전에 상대가 무엇을 원하는지 먼저 읽는 것.\n같은 말도 어떻게 전달하느냐에 따라 결과가 완전히 달라진다는 것.',
//     ],
//     quote: '이 시각이 지금도 제 개발의 출발점입니다.',
//   },
//   {
//     num: '02 / TURNING POINT',
//     title: '생각하는 걸 뭐든 만들 수 있다',
//     paragraphs: [
//       '어느 날 들은 한 마디가 모든 것을 바꿨습니다.',
//       '"컴퓨터 프로그램으로는 생각하는 것을 무엇이든 만들 수 있다."',
//       '그 순간 \'내가 필요한 걸 직접 만들 수 있겠다\'는 생각이 들었고, 주변 개발자 지인들에게 질문을 쏟아내며 독학으로 개발을 시작했습니다.',
//     ],
//   },
//   {
//     num: '03 / NOW',
//     title: '개발하고, 소통하고, 자동화합니다',
//     paragraphs: [
//       'AX팀 팀장으로서 기획부터 n8n 자동화 구축까지 전 과정을 주도했습니다.',
//       '개발자와 비개발 직군 사이를 잇는 커뮤니케이터로서 팀의 불편함을 시스템으로 전환하고, AI 도구로 아이디어를 빠르게 서비스로 연결합니다.',
//     ],
//     quote: '코드로 시작해서, 구조로 끝냅니다.',
//   },
// ]

// export default function About() {
//   return (
//     <section id="about" style={{ background: 'var(--bg2)' }}>
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

//         <RevealBox>
//           <p style={{
//             fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//             color: 'var(--accent)', letterSpacing: 3,
//             textTransform: 'uppercase', marginBottom: 12,
//           }}>
//             // about me
//           </p>
//         </RevealBox>

//         <RevealBox delay={0.1}>
//           <h2 style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(30px, 5vw, 52px)',
//             fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
//             color: 'var(--text)', marginBottom: 60,
//           }}>
//             어떤 개발자인가요,<br />
//             <span style={{ color: 'var(--accent)' }}>윤규보는.</span>
//           </h2>
//         </RevealBox>

//         {/* 메인 레이아웃 — 왼쪽 사진 / 오른쪽 스토리 */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '320px 1fr',
//           gap: 60,
//           alignItems: 'start',
//         }}>

//           {/* 왼쪽 — 사진 + 다운로드 버튼 */}
//           <RevealBox delay={0.1}>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'sticky', top: 100 }}>

//               {/* 사진 */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//                 style={{
//                   position: 'relative',
//                   width: '100%', aspectRatio: '3/4',
//                   borderRadius: 22, overflow: 'hidden',
//                   border: '1px solid var(--border2)',
//                 }}
//               >
//                 {/* 글로우 링 */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//                   style={{
//                     position: 'absolute', inset: -3,
//                     borderRadius: 24,
//                     background: 'linear-gradient(135deg, var(--accent), transparent, var(--accent2), transparent)',
//                     zIndex: 0,
//                   }}
//                 />
//                 <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
//                   <Image
//                     src="/profile.jpg"
//                     alt="윤규보 프로필"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                   {/* 하단 오버레이 */}
//                   <div style={{
//                     position: 'absolute', bottom: 0, left: 0, right: 0,
//                     padding: '24px 20px 18px',
//                     background: 'linear-gradient(transparent, rgba(8,11,18,0.92))',
//                   }}>
//                     <p style={{
//                       fontFamily: 'Syne, sans-serif', fontSize: 16,
//                       fontWeight: 700, color: '#fff', marginBottom: 3,
//                     }}>
//                       윤규보
//                     </p>
//                     <p style={{
//                       fontFamily: 'JetBrains Mono, monospace',
//                       fontSize: 11, color: 'var(--accent2)',
//                     }}>
//                       Developer · AX Lead
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* 다운로드 버튼 */}
//               <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
//                 <motion.a
//                   href="/resume.pdf"
//                   download
//                   whileHover={{ y: -2, boxShadow: '0 0 40px var(--accent-glow)' }}
//                   whileTap={{ scale: 0.97 }}
//                   style={{
//                     fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
//                     background: 'var(--accent)', color: '#fff',
//                     padding: '13px 0', borderRadius: 8,
//                     textDecoration: 'none', textAlign: 'center',
//                     boxShadow: '0 0 24px var(--accent-glow)',
//                   }}
//                 >
//                   이력서 다운로드 ↓
//                 </motion.a>

//                 <motion.a
//                   href="/coverletter.pdf"
//                   download
//                   whileHover={{ y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
//                   whileTap={{ scale: 0.97 }}
//                   style={{
//                     fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
//                     background: 'transparent', color: 'var(--text)',
//                     padding: '13px 0', borderRadius: 8,
//                     textDecoration: 'none', textAlign: 'center',
//                     border: '1px solid var(--border2)',
//                   }}
//                 >
//                   자기소개서 다운로드 ↓
//                 </motion.a>
//               </div>

//             </div>
//           </RevealBox>

//           {/* 오른쪽 — 스토리 카드 세로 */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
//             {stories.map((story, i) => (
//               <RevealBox key={story.num} delay={i * 0.12}>
//                 <motion.div
//                   whileHover={{ x: 6, borderColor: 'var(--accent)', boxShadow: '0 8px 32px var(--accent-glow)' }}
//                   transition={{ duration: 0.25 }}
//                   style={{
//                     background: 'var(--story-bg)',
//                     border: '1px solid var(--story-border)',
//                     borderRadius: 16, padding: '28px 28px',
//                     cursor: 'default',
//                   }}
//                 >
//                   <p style={{
//                     fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//                     color: 'var(--accent)', letterSpacing: 2,
//                     marginBottom: 14, paddingBottom: 12,
//                     borderBottom: '1px solid var(--story-border)',
//                   }}>
//                     {story.num}
//                   </p>
//                   <p style={{
//                     fontFamily: 'Syne, sans-serif', fontSize: 17,
//                     fontWeight: 700, color: 'var(--text)',
//                     marginBottom: 12, lineHeight: 1.3,
//                   }}>
//                     {story.title}
//                   </p>
//                   <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                     {story.paragraphs.map((p, j) => (
//                       <p key={j} style={{
//                         fontSize: 14, color: 'var(--text2)',
//                         lineHeight: 1.85, whiteSpace: 'pre-line',
//                       }}>
//                         {p}
//                       </p>
//                     ))}
//                     {story.quote && (
//                       <div style={{
//                         fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//                         color: 'var(--accent2)', background: 'var(--tag-bg)',
//                         borderLeft: '3px solid var(--accent)',
//                         padding: '10px 14px', borderRadius: '0 8px 8px 0',
//                         marginTop: 4, lineHeight: 1.7,
//                       }}>
//                         {story.quote}
//                       </div>
//                     )}
//                   </div>
//                 </motion.div>
//               </RevealBox>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

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

const stories = [
  {
    num: '01 / ORIGIN',
    title: '사람을 먼저 읽는 시각',
    paragraphs: [
      '개발자가 되기 전, 백화점과 바(Bar) 등 서비스 현장에서 오랜 시간을 보냈습니다.',
      '하루에도 수십 명을 만나며 자연스럽게 체득한 것이 있었습니다.\n말을 듣기 전에 상대가 무엇을 원하는지 먼저 읽는 것.\n같은 말도 어떻게 전달하느냐에 따라 결과가 완전히 달라진다는 것.',
    ],
    quote: '이 시각이 지금도 제 개발의 출발점입니다.',
  },
  {
    num: '02 / TURNING POINT',
    title: '생각하는 걸 뭐든 만들 수 있다',
    paragraphs: [
      '어느 날 들은 한 마디가 모든 것을 바꿨습니다.',
      '"컴퓨터 프로그램으로는 생각하는 것을 무엇이든 만들 수 있다."',
      '그 순간 \'내가 필요한 걸 직접 만들 수 있겠다\'는 생각이 들었고, 주변 개발자 지인들에게 질문을 쏟아내며 독학으로 개발을 시작했습니다.',
    ],
  },
  {
    num: '03 / NOW',
    title: '개발하고, 소통하고, 자동화합니다',
    paragraphs: [
      'AX팀 팀장으로서 기획부터 n8n 자동화 구축까지 전 과정을 주도했습니다.',
      '개발자와 비개발 직군 사이를 잇는 커뮤니케이터로서 팀의 불편함을 시스템으로 전환하고, AI 도구로 아이디어를 빠르게 서비스로 연결합니다.',
    ],
    quote: '코드로 시작해서, 구조로 끝냅니다.',
  },
]

export default function About() {
  const [hoveredStory, setHoveredStory] = useState<number | null>(null)
  const isAnyHovered = hoveredStory !== null

  return (
    <section id="about" style={{ background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'var(--accent)', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 12,
          }}>
            // about me
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
            color: 'var(--text)', marginBottom: 60,
          }}>
            어떤 개발자인가요,<br />
            <span style={{ color: 'var(--accent)' }}>윤규보는.</span>
          </h2>
        </RevealBox>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.7fr 1fr',
          gap: 50, alignItems: 'center',
        }}>

          {/* 왼쪽 — 사진 + 다운로드 */}
          <RevealBox delay={0.15}>
            <div style={{
              display: 'flex', flexDirection: 'column',
              gap: 20, position: 'sticky', top: 100,
            }}>

              {/* 사진 */}
              <div style={{ position: 'relative' }}>
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

                <motion.div
                  animate={{ scale: isAnyHovered ? 0.88 : 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  style={{
                    position: 'relative', zIndex: 1,
                    width: '100%', aspectRatio: '2/3',
                    borderRadius: 22, overflow: 'hidden',
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
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '24px 20px 18px',
                    background: 'linear-gradient(transparent, rgba(8,11,18,0.92))',
                  }}>
                    <p style={{
                      fontFamily: 'Syne, sans-serif', fontSize: 16,
                      fontWeight: 700, color: '#fff', marginBottom: 3,
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

                
              </div>

              {/* 다운로드 버튼 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ y: -2, boxShadow: '0 0 40px var(--accent-glow)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                    background: 'var(--accent)', color: '#fff',
                    padding: '13px 0', borderRadius: 8,
                    textDecoration: 'none', textAlign: 'center',
                    boxShadow: '0 0 24px var(--accent-glow)',
                    display: 'block',
                  }}
                >
                  이력서 다운로드 ↓
                </motion.a>

                <motion.a
                  href="/coverletter.pdf"
                  download
                  whileHover={{ y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                    background: 'transparent', color: 'var(--text)',
                    padding: '13px 0', borderRadius: 8,
                    textDecoration: 'none', textAlign: 'center',
                    border: '1px solid var(--border2)',
                    display: 'block',
                  }}
                >
                  자기소개서 다운로드 ↓
                </motion.a>
              </div>

            </div>
          </RevealBox>

          {/* 오른쪽 — 스토리 카드 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {stories.map((story, i) => (
              <RevealBox key={story.num} delay={i * 0.12}>
                <motion.div
                  onHoverStart={() => setHoveredStory(i)}
                  onHoverEnd={() => setHoveredStory(null)}
                  animate={{
                    scale: hoveredStory === i ? 1.03 : isAnyHovered ? 0.98 : 1,
                    opacity: isAnyHovered && hoveredStory !== i ? 0.5 : 1,
                  }}
                  whileHover={{
                    borderColor: 'var(--accent)',
                    boxShadow: '0 12px 40px var(--accent-glow)',
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    // 불투명 배경으로 변경 — 글 가독성 향상
                    background: 'var(--surface)',
                    border: '1px solid var(--border2)',
                    borderRadius: 16, padding: '28px',
                    cursor: 'default',
                  }}
                >
                  <p style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                    color: 'var(--accent)', letterSpacing: 2,
                    marginBottom: 14, paddingBottom: 12,
                    borderBottom: '1px solid var(--border)',
                  }}>
                    {story.num}
                  </p>
                  <p style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 17,
                    fontWeight: 700, color: 'var(--text)',
                    marginBottom: 12, lineHeight: 1.3,
                  }}>
                    {story.title}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {story.paragraphs.map((p, j) => (
                      <p key={j} style={{
                        fontSize: 14,
                        // 호버 시 더 밝게
                        color: hoveredStory === i ? 'var(--text)' : 'var(--text2)',
                        lineHeight: 1.85, whiteSpace: 'pre-line',
                        transition: 'color 0.3s',
                      }}>
                        {p}
                      </p>
                    ))}
                    {story.quote && (
                      <div style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                        color: 'var(--accent2)',
                        background: 'rgba(79,142,247,0.12)',
                        borderLeft: '3px solid var(--accent)',
                        padding: '10px 14px', borderRadius: '0 8px 8px 0',
                        marginTop: 4, lineHeight: 1.7,
                      }}>
                        {story.quote}
                      </div>
                    )}
                  </div>
                </motion.div>
              </RevealBox>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}