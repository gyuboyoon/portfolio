// 'use client'

// import { useState, useRef } from 'react'
// import { motion, useInView } from 'framer-motion'

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

// type Project = {
//   category: 'live' | 'auto' | 'other'
//   status: { label: string; color: string; bg: string; border: string }
//   name: string
//   sub: string
//   desc: string
//   features: string[]
//   stack: string[]
//   link?: string
//   n8nBadge?: boolean
//   pipeline?: { icon: string; label: string }[]
// }

// const projects: Project[] = [
//   {
//     category: 'live',
//     status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
//     name: 'AirHoldings',
//     sub: '공항 차량·컨시어지 예약 B2C 플랫폼',
//     desc: '영업 직원이 고객을 등록하고 공항 차량·컨시어지 예약을 관리하는 모바일 웹앱. AI 코딩 도구를 활용해 기획부터 배포까지 단기간에 완성했습니다.',
//     features: [
//       '직원 어드민 — 고객 관리, 예약 승인, 공항·서비스 설정',
//       '고객 앱 — SMS 로그인, 예약 조회·생성 (모바일 최적화)',
//       'AI 코딩 도구 활용으로 빠른 개발·배포 사이클 검증',
//     ],
//     stack: ['Next.js', 'Node.js', 'Supabase'],
//     link: 'https://airholdings-en27.vercel.app/',
//   },
//   {
//     category: 'live',
//     status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
//     name: 'Leaven Lake',
//     sub: '소상공인 통합 관리 AI 서비스',
//     desc: '직원·스케줄·자재·업체를 한 곳에서 관리하고, 기한 도래 시 AI 자동 알림을 제공하는 소상공인 전용 서비스.',
//     features: [
//       '직원·스케줄·자재·업체 통합 대시보드',
//       '자원 점검·계약 기한 AI 자동 알림',
//       '기획·개발 참여, Vercel 배포 완료',
//     ],
//     stack: ['Next.js', 'Supabase', 'LiteLLM'],
//     link: 'https://leaven-lake.vercel.app/',
//   },
//   {
//     category: 'live',
//     status: { label: '🏢 COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
//     name: 'TestWith',
//     sub: 'AI 감독관 기반 실시간 온라인 시험 솔루션',
//     desc: '서버 아키텍처 개선부터 AWS 인프라 구축, AI 자동 채점까지. 측정 가능한 성과를 만들어낸 핵심 프로젝트입니다.',
//     features: [
//       'API 응답속도 40% 단축 — BFF 패턴 적용 (300ms → 180ms)',
//       '동접 1,000명+ — AWS Auto Scaling 인프라 구축',
//       '채팅 안정성 90% 향상 — Socket.IO 전환, 유실률 0%',
//       'ChatGPT API 자동 채점·챗봇 개발, 이탈률 80% 감소',
//     ],
//     stack: ['Node.js', 'Python Flask', 'AWS', 'Socket.IO', 'ChatGPT API'],
//     link: 'https://testwith.io',
//   },
//   {
//     category: 'auto',
//     status: { label: '◎ BETA', color: 'var(--text2)', bg: 'var(--surface2)', border: 'var(--border2)' },
//     name: 'SNS 콘텐츠 자동화',
//     sub: '블로그 → 인스타 → 숏폼 자동 생성 파이프라인',
//     desc: '키워드 하나로 네이버 블로그 목차·본문·이미지를 자동 생성하고, 인스타·스레드 포맷 변환 및 15초 숏폼까지 자동 제작합니다.',
//     features: [
//       'AI 기반 목차 → 본문 → 이미지 자동 생성',
//       '인스타그램·스레드 포맷 자동 변환',
//       '이미지 기반 15초 숏폼 자동 제작',
//     ],
//     stack: ['React', 'Next.js', 'Supabase', 'LiteLLM', 'kie.ai'],
//     pipeline: [
//       { icon: '⌨️', label: '키워드 입력' },
//       { icon: '📝', label: '블로그 목차' },
//       { icon: '✍️', label: '본문 작성' },
//       { icon: '🖼️', label: '이미지 생성' },
//       { icon: '📱', label: '인스타·스레드' },
//       { icon: '🎬', label: '15초 숏폼' },
//     ],
//   },
//   {
//     category: 'other',
//     status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
//     name: 'Virtual Runway',
//     sub: '패션 디자인 AI 렌더링 솔루션',
//     desc: '패션 디자인과 학생이나 신진 디자이너가 도안을 업로드하면, AI가 실제 의상으로 렌더링하고 모델 컷과 런웨이 시퀀스까지 자동 생성합니다.',
//     features: [
//         '도안 업로드 → AI 의상 렌더링 자동 생성',
//         '렌더링된 의상을 착용한 모델 컷 생성',
//     '컬렉션 완성 시 선택 모델의 런웨이 시퀀스 제작',
//     ],
//     stack: ['React', 'Tailwind CSS', 'Supabase', '이미지 생성 AI'],
//   },
//   {
//     category: 'other',
//     status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
//     name: '문서작성챗',
//     sub: '대화형 AI 문서 작성 솔루션',
//     desc: '사업계획서, 운영계획서 등 작성이 어려운 문서를 AI와 대화하듯 채워나가는 솔루션. 질문에 답하다 보면 문서가 완성됩니다.',
//     features: [
//       '대화형 인터페이스로 문서 항목을 단계별 작성',
//       '사업계획서·운영계획서 등 템플릿 기반 구조화',
//       '작성 중 실시간 AI 피드백 및 수정 제안',
//     ],
//     stack: ['React', 'Tailwind CSS', 'Supabase', 'ChatGPT API'],
//   },
//   {
//     category: 'auto',
//     status: { label: '⚡ COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
//     name: '사내 AX 자동화 시스템',
//     sub: 'n8n으로 설계한 팀 생산성 인프라',
//     desc: '단순 자동화가 아닙니다. 흩어져 있던 업무 흐름을 하나의 워크플로로 연결하고, 반복이 사라진 자리에 사람이 해야 할 일을 채웠습니다.',
//     features: [
//         '보고서 자동화 — 업무기록표 데이터를 읽어 보고서 초안 자동 생성, 작성 시간 50%+ 절감',
//         '요청 워크플로 — 구두·메시지 요청을 표준 업무요청서로 전환, DB 상태 추적 자동화',
//         '실시간 알림 — 신규 데이터 등록 시 Slack 즉시 알림 + Notion 자동 아카이빙',
//     ],
//     stack: ['n8n', 'Slack API', 'Notion API', 'ChatGPT API'],
//     n8nBadge: true,
//     },
// ]

// const filters = [
//   { label: '전체', value: 'all' },
//   { label: '✦ Live', value: 'live' },
//   { label: '⚡ 자동화', value: 'auto' },
// ]

// function ProjectCard({ project, index }: { project: Project; index: number }) {
//   const [pipelineOpen, setPipelineOpen] = useState(false)

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 20 }}
//       transition={{ duration: 0.35, delay: index * 0.06 }}
//       whileHover={{ y: -6 }}
//       style={{
//         background: 'var(--surface)',
//         border: '1px solid var(--border)',
//         borderRadius: 18, padding: 32,
//         position: 'relative', overflow: 'hidden',
//       }}
//     >
//       {/* 상단 라인 */}
//       <motion.div
//         initial={{ scaleX: 0, opacity: 0 }}
//         whileHover={{ scaleX: 1, opacity: 1 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           position: 'absolute', top: 0, left: 0, right: 0, height: 3,
//           background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
//           transformOrigin: 'left',
//         }}
//       />

//       {/* 상태 뱃지 */}
//       <span style={{
//         fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//         padding: '4px 12px', borderRadius: 4,
//         display: 'inline-block', marginBottom: 18,
//         color: project.status.color,
//         background: project.status.bg,
//         border: `1px solid ${project.status.border}`,
//       }}>
//         {project.status.label}
//       </span>

//       <h3 style={{
//         fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800,
//         color: 'var(--text)', letterSpacing: -0.5, marginBottom: 8,
//       }}>
//         {project.name}
//       </h3>
//       <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 14, fontWeight: 500 }}>
//         {project.sub}
//       </p>
//       <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
//         {project.desc}
//       </p>

//       {/* 피처 리스트 */}
//       <ul style={{ listStyle: 'none', marginBottom: 22 }}>
//         {project.features.map((f, j) => (
//           <li key={j} style={{
//             fontSize: 14, color: 'var(--text2)', padding: '6px 0',
//             borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
//             display: 'flex', alignItems: 'flex-start', gap: 8,
//           }}>
//             <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
//             {f}
//           </li>
//         ))}
//       </ul>

//       {/* 스택 태그 */}
//       <div style={{
//         display: 'flex', flexWrap: 'wrap', gap: 7,
//         marginBottom: 22,
//       }}>
//         {project.stack.map(tag => (
//           <span key={tag} style={{
//             fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//             color: 'var(--text3)', border: '1px solid var(--border)',
//             borderRadius: 4, padding: '4px 9px',
//           }}>
//             {tag}
//           </span>
//         ))}
//       </div>

//       {/* n8n 뱃지 */}
//       {project.n8nBadge && (
//         <div style={{
//           fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//           color: 'var(--accent2)', background: 'var(--tag-bg)',
//           border: '1px solid var(--tag-border)',
//           borderRadius: 8, padding: '10px 14px', marginBottom: 16,
//         }}>
//           ⚙ Powered by n8n — 코드 없이 설계한 자동화 아키텍처
//         </div>
//       )}

//       {/* 파이프라인 토글 */}
//       {project.pipeline && (
//         <div style={{ marginBottom: project.link ? 16 : 0 }}>
//           <motion.button
//             onClick={() => setPipelineOpen(prev => !prev)}
//             whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
//             whileTap={{ scale: 0.97 }}
//             style={{
//               fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//               color: 'var(--text2)', background: 'var(--surface2)',
//               border: '1px solid var(--border2)',
//               borderRadius: pipelineOpen ? '8px 8px 0 0' : 8,
//               padding: '9px 16px', cursor: 'pointer',
//               display: 'flex', alignItems: 'center',
//               gap: 8, width: '100%', justifyContent: 'space-between',
//             }}
//           >
//             <span>⚡ automation pipeline</span>
//             <motion.span
//               animate={{ rotate: pipelineOpen ? 180 : 0 }}
//               transition={{ duration: 0.2 }}
//               style={{ fontSize: 10 }}
//             >
//               ▼
//             </motion.span>
//           </motion.button>

//           <motion.div
//             initial={false}
//             animate={{ height: pipelineOpen ? 'auto' : 0, opacity: pipelineOpen ? 1 : 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             style={{ overflow: 'hidden' }}
//           >
//             <div style={{
//               background: 'var(--surface2)',
//               border: '1px solid var(--border2)',
//               borderTop: 'none',
//               borderRadius: '0 0 8px 8px',
//               padding: '16px 18px',
//             }}>
//               <div style={{
//                 display: 'flex', flexWrap: 'wrap',
//                 alignItems: 'center', gap: 6,
//               }}>
//                 {project.pipeline.map((step, idx) => (
//                   <div key={step.label} style={{
//                     display: 'flex', alignItems: 'center', gap: 6,
//                   }}>
//                     <motion.div
//                       whileHover={{ y: -2, borderColor: 'var(--accent)' }}
//                       transition={{ duration: 0.15 }}
//                       style={{
//                         display: 'flex', flexDirection: 'column',
//                         alignItems: 'center', gap: 4,
//                         background: 'var(--surface)',
//                         border: '1px solid var(--border2)',
//                         borderRadius: 8, padding: '8px 10px',
//                         minWidth: 60, cursor: 'default',
//                       }}
//                     >
//                       <span style={{ fontSize: 16 }}>{step.icon}</span>
//                       <span style={{
//                         fontFamily: 'JetBrains Mono, monospace',
//                         fontSize: 9, color: 'var(--text2)',
//                         textAlign: 'center', lineHeight: 1.3,
//                         whiteSpace: 'nowrap',
//                       }}>
//                         {step.label}
//                       </span>
//                     </motion.div>
//                     {idx < project.pipeline!.length - 1 && (
//                       <span style={{
//                         color: 'var(--accent)', fontSize: 12,
//                         fontWeight: 700, flexShrink: 0,
//                       }}>
//                         →
//                       </span>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}

//       {/* 링크 */}
//       {project.link && (
//         <a href={project.link} target="_blank" rel="noreferrer" style={{
//           fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
//           color: 'var(--accent)', textDecoration: 'none',
//           display: 'inline-flex', alignItems: 'center', gap: 6,
//         }}>
//           서비스 보기 →
//         </a>
//       )}
//     </motion.div>
//   )
// }

// export default function Projects() {
//   const [active, setActive] = useState('all')

//   const filtered = projects.filter(p =>
//     active === 'all' ? true : p.category === active
//   )

//   return (
//     <section id="projects" style={{ background: 'var(--bg)' }}>
//       <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

//         <RevealBox>
//           <p style={{
//             fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//             color: 'var(--accent)', letterSpacing: 3,
//             textTransform: 'uppercase', marginBottom: 12,
//           }}>
//             // projects
//           </p>
//         </RevealBox>

//         <RevealBox delay={0.1}>
//           <h2 style={{
//             fontFamily: 'Syne, sans-serif',
//             fontSize: 'clamp(30px, 5vw, 52px)',
//             fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
//             color: 'var(--text)', marginBottom: 40,
//           }}>
//             프로젝트
//           </h2>
//         </RevealBox>

//         {/* 필터 탭 */}
//         <RevealBox delay={0.15}>
//           <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
//             {filters.map(f => (
//               <button
//                 key={f.value}
//                 onClick={() => setActive(f.value)}
//                 style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
//                   padding: '8px 20px', borderRadius: 50,
//                   border: `1px solid ${active === f.value ? 'var(--accent)' : 'var(--border2)'}`,
//                   background: active === f.value ? 'var(--accent)' : 'transparent',
//                   color: active === f.value ? '#fff' : 'var(--text2)',
//                   cursor: 'pointer', transition: 'all 0.2s',
//                 }}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>
//         </RevealBox>

//         {/* 카드 그리드 */}
//         <motion.div
//           layout
//           style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}
//         >
//           {filtered.map((project, i) => (
//             <ProjectCard key={project.name} project={project} index={i} />
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }

'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

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

type Project = {
  category: 'live' | 'auto' | 'other'
  status: { label: string; color: string; bg: string; border: string }
  name: string
  sub: string
  desc: string
  features: string[]
  stack: string[]
  link?: string
  n8nBadge?: boolean
  pipeline?: { icon: string; label: string }[]
  expandable?: {
    sections: {
      title: string
      icon: string
      items: string[]
    }[]
  }
}

const projects: Project[] = [
  {
    category: 'live',
    status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
    name: 'AirHoldings',
    sub: '공항 차량·컨시어지 예약 B2C 플랫폼',
    desc: '영업 직원이 고객을 등록하고 공항 차량·컨시어지 예약을 관리하는 모바일 웹앱. AI 코딩 도구를 활용해 기획부터 배포까지 단기간에 완성했습니다.',
    features: [
      '직원 어드민 — 고객 관리, 예약 승인, 공항·서비스 설정',
      '고객 앱 — SMS 로그인, 예약 조회·생성 (모바일 최적화)',
      'AI 코딩 도구 활용으로 빠른 개발·배포 사이클 검증',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase'],
    link: 'https://airholdings-en27.vercel.app/',
  },
  {
    category: 'live',
    status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
    name: 'Leaven Lake',
    sub: '소상공인 통합 관리 AI 서비스',
    desc: '직원·스케줄·자재·업체를 한 곳에서 관리하고, 기한 도래 시 AI 자동 알림을 제공하는 소상공인 전용 서비스.',
    features: [
      '직원·스케줄·자재·업체 통합 대시보드',
      '자원 점검·계약 기한 AI 자동 알림',
      '기획·개발 참여, Vercel 배포 완료',
    ],
    stack: ['Next.js', 'Supabase', 'LiteLLM'],
    link: 'https://leaven-lake.vercel.app/',
  },
  {
    category: 'live',
    status: { label: '🏢 COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
    name: 'TestWith',
    sub: 'AI 감독관 기반 실시간 온라인 시험 솔루션',
    desc: '서버 아키텍처 개선부터 AWS 인프라 구축, AI 자동 채점까지. 측정 가능한 성과를 만들어낸 핵심 프로젝트입니다.',
    features: [
      'API 응답속도 40% 단축 — BFF 패턴 적용 (300ms → 180ms)',
      '동접 1,000명+ — AWS Auto Scaling 인프라 구축',
      '채팅 안정성 90% 향상 — Socket.IO 전환, 유실률 0%',
      'ChatGPT API 자동 채점·챗봇 개발, 이탈률 80% 감소',
    ],
    stack: ['Node.js', 'Python Flask', 'AWS', 'Socket.IO', 'ChatGPT API'],
    link: 'https://testwith.io',
  },
  {
    category: 'auto',
    status: { label: '◎ BETA', color: 'var(--text2)', bg: 'var(--surface2)', border: 'var(--border2)' },
    name: 'SNS 콘텐츠 자동화',
    sub: '블로그 → 인스타 → 숏폼 자동 생성 파이프라인',
    desc: '키워드 하나로 네이버 블로그 목차·본문·이미지를 자동 생성하고, 인스타·스레드 포맷 변환 및 15초 숏폼까지 자동 제작합니다.',
    features: [
      'AI 기반 목차 → 본문 → 이미지 자동 생성',
      '인스타그램·스레드 포맷 자동 변환',
      '이미지 기반 15초 숏폼 자동 제작',
    ],
    stack: ['React', 'Next.js', 'Supabase', 'LiteLLM', 'kie.ai'],
    pipeline: [
      { icon: '⌨️', label: '키워드 입력' },
      { icon: '📝', label: '블로그 목차' },
      { icon: '✍️', label: '본문 작성' },
      { icon: '🖼️', label: '이미지 생성' },
      { icon: '📱', label: '인스타·스레드' },
      { icon: '🎬', label: '15초 숏폼' },
    ],
  },
  
  {
    category: 'other',
    status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
    name: 'Virtual Runway',
    sub: '패션 디자인 AI 렌더링 솔루션',
    desc: '패션 디자인과 학생이나 신진 디자이너가 도안을 업로드하면, AI가 실제 의상으로 렌더링하고 모델 컷과 런웨이 시퀀스까지 자동 생성합니다.',
    features: [
      '도안 업로드 → AI 의상 렌더링 자동 생성',
      '렌더링된 의상을 착용한 모델 컷 생성',
      '컬렉션 완성 시 선택 모델의 런웨이 시퀀스 제작',
    ],
    stack: ['React', 'Tailwind CSS', 'Supabase', '이미지 생성 AI'],
  },
  {
    category: 'other',
    status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
    name: '문서작성챗',
    sub: '대화형 AI 문서 작성 솔루션',
    desc: '사업계획서, 운영계획서 등 작성이 어려운 문서를 AI와 대화하듯 채워나가는 솔루션. 질문에 답하다 보면 문서가 완성됩니다.',
    features: [
      '대화형 인터페이스로 문서 항목을 단계별 작성',
      '사업계획서·운영계획서 등 템플릿 기반 구조화',
      '작성 중 실시간 AI 피드백 및 수정 제안',
    ],
    stack: ['React', 'Tailwind CSS', 'Supabase', 'ChatGPT API'],
  },
  {
    category: 'auto',
    status: { label: '⚡ COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
    name: '사내 AX 전환 및 자동화',
    sub: 'n8n으로 설계한 팀 생산성 인프라',
    desc: '단순 자동화가 아닙니다. 흩어져 있던 업무 흐름을 하나의 워크플로로 연결하고, 반복이 사라진 자리에 사람이 해야 할 일을 채웠습니다.',
    features: [
      '보고서 자동화 — 작성 시간 50%+ 절감',
      '요청 워크플로 — 누락 제거 + DB 상태 추적',
      '실시간 알림 — Slack + Notion 자동 연동',
    ],
    stack: ['n8n', 'Slack API', 'Notion API', 'ChatGPT API'],
    n8nBadge: true,
    expandable: {
      sections: [
        {
          title: '보고서 자동화',
          icon: '📊',
          items: [
            '각 사업부별로 제각각이던 보고서 양식을 통일화',
            '업무 시트 데이터를 n8n으로 자동으로 읽어 해당 주차·월 내용 취합',
            'gemini API로 보고서 초안 자동 생성 및 자동 요약',
            '주간·월간 보고서 작성 시간 50%+ 절감',
          ],
        },
        {
          title: '업무 요청 워크플로',
          icon: '🔄',
          items: [
            '구두·메시지로 산발적으로 전달되던 요청을 워크플로로 표준화',
            '요청자가 직접 항목 입력 → 업무요청서 자동 생성',
            'DB 기반 상태 추적 (접수 → 검토 → 승인 → 완료)',
            '수기 전달 시 발생하던 누락 문제 사실상 제거',
          ],
        },
        {
          title: 'Slack · Notion 실시간 연동',
          icon: '🔔',
          items: [
            '신규 데이터 등록 시 담당자 Slack 즉시 알림',
            'Notion에 자동 적재되어 별도 수동 입력 불필요',
            '매일 수동으로 확인하던 반복업무 완전 제거',
            '사업부별 맞춤 자동화로 반복업무 50%+ 절감',
          ],
        },
        {
          title: '사업부 간 협업 체계화',
          icon: '🤝',
          items: [
            '각 사업부 현황 파악 후 자동화 우선순위 도출',
            '사업부 맞춤형 커스텀 자동화 시스템 구축',
            'Notion·Jira 기반 업무 프로세스 문서화',
            '비개발 직군도 쉽게 사용할 수 있는 워크플로 설계',
          ],
        },
      ],
    },
  },
]

const filters = [
  { label: '전체', value: 'all' },
  { label: '✦ Live', value: 'live' },
  { label: '⚡ 자동화', value: 'auto' },
]

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: Project
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const [pipelineOpen, setPipelineOpen] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      style={{
        gridColumn: isExpanded ? '1 / -1' : 'auto',
        background: 'var(--surface)',
        border: `1px solid ${isExpanded ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 18,
        position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.3s',
        cursor: project.expandable ? 'pointer' : 'default',
        boxShadow: isExpanded ? '0 0 40px var(--accent-glow)' : 'none',
      }}
      onClick={project.expandable ? onToggle : undefined}
      whileHover={!isExpanded ? { y: -6 } : {}}
    >
      {/* 상단 라인 */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
        opacity: isExpanded ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />

      <div style={{
        display: isExpanded ? 'grid' : 'block',
        gridTemplateColumns: isExpanded ? '1fr 1fr' : '1fr',
        gap: isExpanded ? 0 : 0,
      }}>

        {/* 왼쪽 — 기본 카드 내용 */}
        <div style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
              padding: '4px 12px', borderRadius: 4,
              display: 'inline-block',
              color: project.status.color,
              background: project.status.bg,
              border: `1px solid ${project.status.border}`,
            }}>
              {project.status.label}
            </span>
            {project.expandable && (
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  color: 'var(--accent)', cursor: 'pointer',
                  padding: '4px 10px',
                  background: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)',
                  borderRadius: 6,
                  userSelect: 'none',
                }}
              >
                {isExpanded ? '접기 ✕' : '자세히 →'}
              </motion.span>
            )}
          </div>

          <h3 style={{
            fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800,
            color: 'var(--text)', letterSpacing: -0.5, marginBottom: 8,
          }}>
            {project.name}
          </h3>
          <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 14, fontWeight: 500 }}>
            {project.sub}
          </p>
          <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
            {project.desc}
          </p>

          <ul style={{ listStyle: 'none', marginBottom: 22 }}>
            {project.features.map((f, j) => (
              <li key={j} style={{
                fontSize: 14, color: 'var(--text2)', padding: '6px 0',
                borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex', alignItems: 'flex-start', gap: 8,
              }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                {f}
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>
            {project.stack.map(tag => (
              <span key={tag} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                color: 'var(--text3)', border: '1px solid var(--border)',
                borderRadius: 4, padding: '4px 9px',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {project.n8nBadge && (
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
              color: 'var(--accent2)', background: 'var(--tag-bg)',
              border: '1px solid var(--tag-border)',
              borderRadius: 8, padding: '10px 14px', marginBottom: 16,
            }}
              onClick={e => e.stopPropagation()}
            >
              ⚙ Powered by n8n — 코드 없이 설계한 자동화 아키텍처
            </div>
          )}

          {/* 파이프라인 토글 */}
          {project.pipeline && (
            <div style={{ marginBottom: project.link ? 16 : 0 }} onClick={e => e.stopPropagation()}>
              <motion.button
                onClick={() => setPipelineOpen(prev => !prev)}
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                  color: 'var(--text2)', background: 'var(--surface2)',
                  border: '1px solid var(--border2)',
                  borderRadius: pipelineOpen ? '8px 8px 0 0' : 8,
                  padding: '9px 16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center',
                  gap: 8, width: '100%', justifyContent: 'space-between',
                }}
              >
                <span>⚡ automation pipeline</span>
                <motion.span
                  animate={{ rotate: pipelineOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ fontSize: 10 }}
                >▼</motion.span>
              </motion.button>
              <motion.div
                initial={false}
                animate={{ height: pipelineOpen ? 'auto' : 0, opacity: pipelineOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{
                  background: 'var(--surface2)', border: '1px solid var(--border2)',
                  borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '16px 18px',
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
                    {project.pipeline.map((step, idx) => (
                      <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{
                          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                          background: 'var(--surface)', border: '1px solid var(--border2)',
                          borderRadius: 8, padding: '8px 10px', minWidth: 60,
                        }}>
                          <span style={{ fontSize: 16 }}>{step.icon}</span>
                          <span style={{
                            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                            color: 'var(--text2)', textAlign: 'center', whiteSpace: 'nowrap',
                          }}>{step.label}</span>
                        </div>
                        {idx < project.pipeline!.length - 1 && (
                          <span style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 700 }}>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                color: 'var(--accent)', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              서비스 보기 →
            </a>
          )}
        </div>

        {/* 오른쪽 — 확장 디테일 패널 */}
        <AnimatePresence>
          {isExpanded && project.expandable && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              onClick={e => e.stopPropagation()}
              style={{
                borderLeft: '1px solid var(--border)',
                padding: 32,
                background: 'var(--surface2)',
                borderRadius: '0 18px 18px 0',
                overflowY: 'auto',
              }}
            >
              <p style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                color: 'var(--accent)', letterSpacing: 2,
                textTransform: 'uppercase', marginBottom: 24,
              }}>
                // 상세 내용
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {project.expandable.sections.map((section, si) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 + si * 0.08 }}
                  >
                    {/* 섹션 헤더 */}
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      marginBottom: 12,
                    }}>
                      <span style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, flexShrink: 0,
                      }}>
                        {section.icon}
                      </span>
                      <p style={{
                        fontFamily: 'Syne, sans-serif', fontSize: 15,
                        fontWeight: 700, color: 'var(--text)',
                      }}>
                        {section.title}
                      </p>
                    </div>

                    {/* 아이템 리스트 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, paddingLeft: 42 }}>
                      {section.items.map((item, ii) => (
                        <motion.div
                          key={ii}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.2 + si * 0.08 + ii * 0.04 }}
                          style={{
                            display: 'flex', alignItems: 'flex-start', gap: 8,
                            fontSize: 14, color: 'var(--text2)', lineHeight: 1.7,
                          }}
                        >
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>·</span>
                          {item}
                        </motion.div>
                      ))}
                    </div>

                    {si < project.expandable!.sections.length - 1 && (
                      <div style={{ marginTop: 20, borderBottom: '1px solid var(--border)' }} />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const filtered = projects.filter(p =>
    active === 'all' ? true : p.category === active
  )

  const handleToggle = (name: string) => {
    setExpandedProject(prev => prev === name ? null : name)
  }

  return (
    <section id="projects" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
            color: 'var(--accent)', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 12,
          }}>
            // projects
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(30px, 5vw, 52px)',
            fontWeight: 800, letterSpacing: -2, lineHeight: 1.05,
            color: 'var(--text)', marginBottom: 40,
          }}>
            프로젝트
          </h2>
        </RevealBox>

        <RevealBox delay={0.15}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
                  padding: '8px 20px', borderRadius: 50,
                  border: `1px solid ${active === f.value ? 'var(--accent)' : 'var(--border2)'}`,
                  background: active === f.value ? 'var(--accent)' : 'transparent',
                  color: active === f.value ? '#fff' : 'var(--text2)',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealBox>

        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              isExpanded={expandedProject === project.name}
              onToggle={() => handleToggle(project.name)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}