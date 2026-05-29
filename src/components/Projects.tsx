'use client'

import { useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

type DetailSection = {
  label: string
  icon: string
  content: string | string[]
  type?: 'text' | 'list' | 'metrics' | 'video'
  metrics?: { value: string; label: string }[]
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
  banner: { gradient: string; icon: string }
  detail?: DetailSection[]
  n8nBadge?: boolean
  pipeline?: { icon: string; label: string }[]
}

const projects: Project[] = [
  {
    category: 'live',
    status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
    banner: { gradient: 'linear-gradient(135deg, #0C447C, #378ADD)', icon: '✈' },
    name: 'AirHoldings',
    sub: '공항 차량·컨시어지 예약 B2C 플랫폼',
    desc: '엑셀·수기로 관리하던 고객·예약 데이터를 웹 시스템으로 전환한 B2C 모바일 플랫폼.',
    features: [
      '직원 어드민 — 고객 관리, 예약 승인, 멤버십 차감',
      '고객 앱 — SMS 로그인, 예약 조회·생성 (모바일 최적화)',
      'AI 코딩 도구 활용으로 기획~배포 단기간 완성',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase'],
    link: 'https://airholdings-en27.vercel.app/',
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '엑셀 시트 하나에 여러 시트를 나눠 관리하다 보니 고객 멤버십 차감, 예약 현황 파악, 데이터 공유가 모두 수작업이었다. 실수가 잦고 시간이 너무 많이 소요됐다.' },
      { label: '왜 이 해결책을 선택했나', icon: '💡', type: 'list', content: ['웹과 앱 동시 사용 요청 → 네이티브 앱보다 빠른 모바일 웹앱 선택', '급한 일정 요구 → AI 코딩 도구로 기획~배포 사이클 단축', 'Supabase → 별도 서버 없이 인증·DB·실시간 기능 한 번에 해결'] },
      { label: '가장 어려웠던 문제', icon: '🔧', type: 'list', content: ['클라이언트가 원하는 것을 두루뭉술하게 표현 → 레퍼런스 제시해도 "이건 아니다" 반복', '해결: 비슷한 서비스 레퍼런스 직접 수집 + 클라이언트에게도 레퍼런스 요청', '레퍼런스 기준으로 AirHoldings 목적에 맞게 재설계 → 니즈 확정'] },
      { label: '핵심 인사이트', icon: '✨', type: 'text', content: '기술보다 커뮤니케이션이 더 어려웠다. 클라이언트가 원하는 것을 언어화하지 못할 때, 개발자가 먼저 시각적 레퍼런스를 제시하는 것이 가장 빠른 해결책이었다.' },
    ],
  },
  {
    category: 'live',
    status: { label: '✦ LIVE · SIDE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
    banner: { gradient: 'linear-gradient(135deg, #085041, #1D9E75)', icon: '🌿' },
    name: 'Leaven Lake',
    sub: '소상공인 통합 관리 AI 서비스',
    desc: '유료 프로그램 도입이 부담스러운 소상공인을 위한 올인원 무료 관리 솔루션.',
    features: [
      '직원·스케줄·자재·업체 통합 대시보드',
      '이전 근무 기록 기반 AI 근무 초안 자동 생성 + 드래그 수정',
      '자원 점검·계약 기한 AI 자동 알림',
    ],
    stack: ['Next.js', 'Supabase', 'LiteLLM'],
    link: 'https://leaven-lake.vercel.app/',
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '소상공인은 직원·스케줄·자재·업체를 각각 다른 방식으로 관리한다. 유료 솔루션은 비용 부담이 크고 엑셀은 기능 한계가 있다. 한 곳에서 모두 관리할 수 있는 무료 올인원 솔루션이 필요했다.' },
      { label: '왜 이 해결책을 선택했나', icon: '💡', type: 'list', content: ['비용 부담 → 완전 무료로 제공, 진입 장벽 최소화', '수동 확인 피로 → 기한 도래 시 자동 알림으로 별도 확인 불필요', 'AI 근무 초안 → 매월 반복되는 스케줄 작성 시간 절감'] },
      { label: '가장 어려웠던 문제', icon: '🔧', type: 'list', content: ['스케줄 관리 UI 방식을 여러 번 뒤엎었다', '단순 입력 → 드래그 방식 전환으로 직관성 향상', '이전 달 근무 기록을 AI가 분석 → 근무 빈도 기반 초안 자동 생성 후 수정 가능'] },
      { label: '서비스 시연', icon: '▶', type: 'video', content: '/leaven-demo.mp4' },
      { label: '핵심 인사이트', icon: '✨', type: 'text', content: 'UI 완성도보다 사용자가 어떻게 쓰는지 바로 알 수 있는가가 더 중요했다. 드래그 인터랙션 하나로 사용성이 크게 달라졌다.' },
    ],
  },
  {
    category: 'live',
    status: { label: '🏢 COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
    banner: { gradient: 'linear-gradient(135deg, #26215C, #7F77DD)', icon: '📝' },
    name: 'TestWith',
    sub: 'AI 감독관 기반 실시간 온라인 시험 솔루션',
    desc: '서버 아키텍처 개선, AWS 인프라 구축, AI 자동 채점까지 측정 가능한 성과를 만들어낸 핵심 프로젝트.',
    features: [
      'API 응답속도 40% 단축 — BFF 패턴 (300ms → 180ms)',
      '동접 1,000명+ — AWS Auto Scaling 인프라',
      '채팅 안정성 90% 향상 — 유실률 0%',
      'ChatGPT API 자동 채점·챗봇, 이탈률 80% 감소',
    ],
    stack: ['Node.js', 'Python Flask', 'AWS', 'Socket.IO', 'ChatGPT API'],
    link: 'https://testwith.io',
    detail: [
      { label: '성과 지표', icon: '📊', type: 'metrics', content: '', metrics: [{ value: '40%', label: 'API 속도 향상' }, { value: '1,000+', label: '동접 처리' }, { value: '0%', label: '메시지 유실' }, { value: '80%', label: '이탈률 감소' }] },
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '사용자가 늘수록 서버가 다운됐고, 채팅 메시지가 유실됐으며, 로그인 과정에서 이탈하는 사용자가 많았다. 서비스 성장이 곧 장애로 이어지는 구조였다.' },
      { label: '왜 이 해결책을 선택했나', icon: '💡', type: 'list', content: ['BFF 패턴 → Node.js + Flask 통합, 중복 로직 제거, 응답속도 40% 단축', 'AWS Auto Scaling → 트래픽에 따라 서버 자동 확장·축소', 'Socket.IO → WebSocket 불안정 문제 해결, 유실률 0% 달성'] },
      { label: 'AI 자동 채점 구현 과정', icon: '🤖', type: 'list', content: ['서술형 채점 특성상 AI가 전체 맥락 파악이 어려운 문제 발생', '핵심 키워드 포함 시 정답 처리 → 프롬프트에 채점 기준·키워드 명시', '채점 일관성과 속도를 동시에 확보'] },
      { label: 'A/B 테스트 — 이탈률 80% 감소', icon: '🧪', type: 'list', content: ['"로그인이 어렵다"는 고객 피드백 지속 접수', 'CS팀 없이 직접 고객 소통하며 불편사항 수집', '로그인 방식 A/B 테스트 변경 → 이탈률 80% 감소'] },
      { label: '핵심 인사이트', icon: '✨', type: 'text', content: '기술 최적화만큼 사용자 피드백을 직접 수집하는 것이 중요했다. CS 역할을 겸하며 실제 불편함을 파악하고 개선한 것이 가장 큰 성과로 이어졌다.' },
    ],
  },
  {
    category: 'auto',
    status: { label: '◎ BETA', color: 'var(--text2)', bg: 'var(--surface2)', border: 'var(--border2)' },
    banner: { gradient: 'linear-gradient(135deg, #3C3489, #7F77DD)', icon: '📱' },
    name: 'SNS 콘텐츠 자동화',
    sub: '블로그 → 인스타 → 숏폼 자동 생성 파이프라인',
    desc: '마케팅 팀의 SNS 콘텐츠 제작 시간을 단축하기 위해 하나의 소재로 블로그·인스타·스레드·틱톡까지 한 번에 생성하는 자동화 파이프라인.',
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
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '마케팅 팀이 SNS 채널별로 콘텐츠를 따로 제작하느라 많은 시간을 소비했다. 하나의 소재로 여러 채널을 동시에 커버할 수 있는 자동화 파이프라인이 필요했다.' },
      { label: '왜 이 해결책을 선택했나', icon: '💡', type: 'list', content: ['채널별 포맷이 달라 수작업 변환 필요 → AI가 각 채널 포맷에 맞게 자동 변환', 'kie.ai → 텍스트 기반 이미지 생성과 영상 제작을 동시에 지원', 'LiteLLM → 여러 LLM을 통합 관리해 품질과 비용을 동시에 최적화'] },
      { label: '가장 어려웠던 문제', icon: '🔧', type: 'list', content: ['채널별 이미지·영상 퀄리티와 일관성을 맞추는 것이 가장 어려웠다', '생성된 이미지마다 스타일이 달라 브랜드 일관성 유지 어려움', '프롬프트 엔지니어링으로 스타일 가이드 고정 → 일관성 향상'] },
      { label: '핵심 인사이트', icon: '✨', type: 'text', content: 'AI 자동화의 품질은 프롬프트 설계에 달려있다. 기술 구현보다 AI에게 무엇을 어떻게 요청할 것인가를 설계하는 과정이 훨씬 더 많은 시간이 필요했다.' },
    ],
  },
  {
    category: 'auto',
    status: { label: '⚡ COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
    banner: { gradient: 'linear-gradient(135deg, #0F6E56, #1D9E75)', icon: '⚙' },
    name: '사내 AX 전환 및 자동화',
    sub: 'n8n으로 설계한 팀 생산성 인프라',
    desc: '흩어져 있던 업무 흐름을 하나의 워크플로로 연결하고, 반복이 사라진 자리에 사람이 해야 할 일을 채웠습니다.',
    features: [
      '보고서 자동화 — 작성 시간 50%+ 절감',
      '요청 워크플로 — 누락 제거 + DB 상태 추적',
      '실시간 알림 — Slack + Notion 자동 연동',
    ],
    stack: ['n8n', 'Slack API', 'Notion API', 'ChatGPT API'],
    n8nBadge: true,
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '각 사업부마다 보고서 양식이 다르고, 업무 요청은 구두나 메시지로 산발적으로 전달되어 누락이 잦았다. 반복 업무가 팀의 생산성을 갉아먹고 있었다.' },
      { label: '왜 n8n을 선택했나', icon: '💡', type: 'list', content: ['Zapier·Make도 검토 → 요금제 제한과 커스터마이징 한계 존재', 'n8n 선택 → 셀프 호스팅 가능, 복잡한 조건 분기, 직관적인 시각적 플로우 설계', '팀원 피드백 → "Make·Zapier보다 접근하기 쉽다" 수렴', '비개발자도 워크플로를 직접 보고 이해할 수 있어 협업 효율 향상'] },
      { label: '구축 내용', icon: '🔧', type: 'list', content: ['보고서 양식 통일화 → n8n이 업무기록표 자동 취합해 초안 생성 (50%+ 절감)', '구두·메시지 요청 → 표준 업무요청서 워크플로 전환, DB 상태 추적', 'Slack·Notion 실시간 연동 → 수동 모니터링 완전 제거', '사업부별 맞춤 자동화 → 반복업무 50%+ 절감'] },
      { label: '핵심 인사이트', icon: '✨', type: 'text', content: '자동화 도입의 성패는 기술보다 팀원의 수용성에 달려있다. 비개발자도 플로우를 직접 볼 수 있는 n8n의 시각적 구조가 팀 전체의 이해와 신뢰를 높이는 데 결정적이었다.' },
    ],
  },
  {
    category: 'other',
    status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
    banner: { gradient: 'linear-gradient(135deg, #993C1D, #D85A30)', icon: '👗' },
    name: 'Virtual Runway',
    sub: '패션 디자인 AI 렌더링 솔루션',
    desc: '도안을 업로드하면 AI가 실제 의상으로 렌더링하고 모델 컷·런웨이 시퀀스까지 자동 생성하는 패션 디자이너 전용 솔루션.',
    features: ['도안 업로드 → AI 의상 렌더링 자동 생성', '렌더링된 의상을 착용한 모델 컷 생성', '컬렉션 완성 시 런웨이 시퀀스 자동 제작'],
    stack: ['React', 'Tailwind CSS', 'Supabase', '이미지 생성 AI'],
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '패션 디자인 학생이나 신진 디자이너는 도안을 실제 의상으로 시각화하기 위해 비용과 시간이 많이 든다. AI 렌더링으로 이 과정을 대폭 단축하고자 했다.' },
      { label: '중단된 이유와 인사이트', icon: '✨', type: 'list', content: ['프로젝트를 요구한 상급자가 퇴사하면서 기획 단계에서 중단됨', 'AI 이미지 생성의 일관성 문제가 패션 도메인에서 더욱 치명적', '스타일·색상·실루엣의 정밀한 제어가 가능한 파인튜닝 모델이 필요하다는 결론 도출'] },
    ],
  },
  {
    category: 'other',
    status: { label: '◌ 기획·개발', color: '#F59E0B', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.25)' },
    banner: { gradient: 'linear-gradient(135deg, #3C3489, #534AB7)', icon: '📄' },
    name: '문서작성챗',
    sub: '대화형 AI 문서 작성 솔루션',
    desc: '사업계획서·운영계획서 등 작성이 어려운 문서를 AI와 대화하듯 채워나가는 솔루션.',
    features: ['대화형 인터페이스로 문서 항목을 단계별 작성', '사업계획서·운영계획서 등 템플릿 기반 구조화', '작성 중 실시간 AI 피드백 및 수정 제안'],
    stack: ['React', 'Tailwind CSS', 'Supabase', 'ChatGPT API'],
    detail: [
      { label: '해결하려는 진짜 문제', icon: '🎯', type: 'text', content: '사업계획서·운영계획서 등 복잡한 문서는 어디서부터 시작해야 할지 몰라 작성 자체를 포기하는 경우가 많다. 대화 형식으로 질문에 답하다 보면 문서가 완성되는 구조가 필요했다.' },
      { label: '중단된 이유와 인사이트', icon: '✨', type: 'list', content: ['프로젝트를 요구한 상급자가 퇴사하면서 기획 단계에서 중단됨', '문서 종류마다 요구하는 맥락이 달라 범용 템플릿의 한계가 명확함', '도메인별 특화 프롬프트 설계가 핵심이라는 결론 도출'] },
    ],
  },
]

const filters = [
  { label: '전체', value: 'all' },
  { label: '✦ Live', value: 'live' },
  { label: '⚡ 자동화', value: 'auto' },
]

// ── 모달 ──────────────────────────────────────────────────────
// function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
//     document.addEventListener('keydown', handleKey)
//     document.body.style.overflow = 'hidden'
//     return () => {
//       document.removeEventListener('keydown', handleKey)
//       document.body.style.overflow = ''
//     }
//   }, [onClose])

//   return (
//     <AnimatePresence>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.25 }}
//         onClick={onClose}
//         style={{
//           position: 'fixed', inset: 0, zIndex: 1000,
//           background: 'rgba(0,0,0,0.75)',
//           backdropFilter: 'blur(12px)',
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           padding: '40px 24px',
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 40, scale: 0.96 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           exit={{ opacity: 0, y: 40, scale: 0.96 }}
//           transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
//           onClick={e => e.stopPropagation()}
//           style={{
//             background: 'var(--surface)',
//             borderRadius: 24,
//             width: '100%', maxWidth: 860,
//             maxHeight: '88vh',
//             overflow: 'hidden',
//             display: 'flex', flexDirection: 'column',
//             border: '1px solid var(--border2)',
//             boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
//           }}
//         >
//           {/* 모달 헤더 — 프로젝트 배너 */}
//           <div style={{
//             height: 160, flexShrink: 0,
//             background: project.banner.gradient,
//             position: 'relative',
//             display: 'flex', alignItems: 'flex-end',
//             padding: '0 36px 24px',
//           }}>
//             {/* 배경 패턴 */}
//             <div style={{
//               position: 'absolute', inset: 0,
//               backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)',
//             }} />

//             {/* 닫기 버튼 */}
//             <button
//               onClick={onClose}
//               style={{
//                 position: 'absolute', top: 16, right: 16,
//                 width: 36, height: 36, borderRadius: '50%',
//                 background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.2)',
//                 color: '#fff', fontSize: 18, cursor: 'pointer',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 transition: 'background 0.2s',
//               }}
//             >
//               ✕
//             </button>

//             {/* 프로젝트 아이콘 + 제목 */}
//             <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 16 }}>
//               <div style={{
//                 width: 56, height: 56, borderRadius: 14,
//                 background: 'rgba(255,255,255,0.15)',
//                 border: '1px solid rgba(255,255,255,0.25)',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 fontSize: 28, backdropFilter: 'blur(8px)',
//               }}>
//                 {project.banner.icon}
//               </div>
//               <div>
//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//                   color: 'rgba(255,255,255,0.65)', marginBottom: 4,
//                 }}>
//                   {project.status.label}
//                 </p>
//                 <h2 style={{
//                   fontFamily: 'Syne, sans-serif', fontSize: 26,
//                   fontWeight: 800, color: '#fff', letterSpacing: -0.5,
//                 }}>
//                   {project.name}
//                 </h2>
//                 <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>
//                   {project.sub}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* 모달 본문 */}
//           <div style={{ overflowY: 'auto', flex: 1 }}>
//             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>

//               {/* 왼쪽 — 프로젝트 기본 정보 */}
//               <div style={{
//                 padding: '28px 32px',
//                 borderRight: '1px solid var(--border)',
//               }}>
//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
//                   color: 'var(--accent)', letterSpacing: 2,
//                   textTransform: 'uppercase', marginBottom: 14,
//                 }}>
//                   // overview
//                 </p>
//                 <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
//                   {project.desc}
//                 </p>

//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
//                   color: 'var(--accent)', letterSpacing: 2,
//                   textTransform: 'uppercase', marginBottom: 12,
//                 }}>
//                   // features
//                 </p>
//                 <ul style={{ listStyle: 'none', marginBottom: 22 }}>
//                   {project.features.map((f, j) => (
//                     <li key={j} style={{
//                       fontSize: 13, color: 'var(--text2)', padding: '6px 0',
//                       borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
//                       display: 'flex', alignItems: 'flex-start', gap: 8,
//                     }}>
//                       <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>{f}
//                     </li>
//                   ))}
//                 </ul>

//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
//                   color: 'var(--accent)', letterSpacing: 2,
//                   textTransform: 'uppercase', marginBottom: 12,
//                 }}>
//                   // stack
//                 </p>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 20 }}>
//                   {project.stack.map(tag => (
//                     <span key={tag} style={{
//                       fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
//                       color: 'var(--text3)', border: '1px solid var(--border)',
//                       borderRadius: 4, padding: '4px 9px',
//                     }}>
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {project.n8nBadge && (
//                   <div style={{
//                     fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//                     color: 'var(--accent2)', background: 'var(--tag-bg)',
//                     border: '1px solid var(--tag-border)',
//                     borderRadius: 8, padding: '10px 14px', marginBottom: 16,
//                   }}>
//                     ⚙ Powered by n8n
//                   </div>
//                 )}

//                 {project.pipeline && (
//                   <div>
//                     <p style={{
//                       fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
//                       color: 'var(--accent)', letterSpacing: 2,
//                       textTransform: 'uppercase', marginBottom: 12,
//                     }}>
//                       // pipeline
//                     </p>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 6 }}>
//                       {project.pipeline.map((step, idx) => (
//                         <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
//                           <div style={{
//                             display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
//                             background: 'var(--surface2)', border: '1px solid var(--border2)',
//                             borderRadius: 8, padding: '8px 10px', minWidth: 56,
//                           }}>
//                             <span style={{ fontSize: 16 }}>{step.icon}</span>
//                             <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--text2)', textAlign: 'center', whiteSpace: 'nowrap' }}>{step.label}</span>
//                           </div>
//                           {idx < project.pipeline!.length - 1 && (
//                             <span style={{ color: 'var(--accent)', fontSize: 11, fontWeight: 700 }}>→</span>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {project.link && (
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{
//                       display: 'inline-flex', alignItems: 'center', gap: 8,
//                       marginTop: 20,
//                       fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
//                       color: '#fff', background: 'var(--accent)',
//                       padding: '11px 22px', borderRadius: 8,
//                       textDecoration: 'none',
//                       boxShadow: '0 0 20px var(--accent-glow)',
//                     }}
//                   >
//                     서비스 보기 →
//                   </a>
//                 )}
//               </div>

//               {/* 오른쪽 — 사고 과정 */}
//               <div style={{ padding: '28px 32px', background: 'var(--surface2)' }}>
//                 <p style={{
//                   fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
//                   color: 'var(--accent)', letterSpacing: 2,
//                   textTransform: 'uppercase', marginBottom: 20,
//                 }}>
//                   // 사고 과정
//                 </p>

//                 <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
//                   {project.detail?.map((section, si) => (
//                     <motion.div
//                       key={section.label}
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 + si * 0.07 }}
//                     >
//                       <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
//                         <span style={{
//                           width: 28, height: 28, borderRadius: 7,
//                           background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
//                           display: 'flex', alignItems: 'center', justifyContent: 'center',
//                           fontSize: 13, flexShrink: 0,
//                         }}>
//                           {section.icon}
//                         </span>
//                         <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--text)' }}>
//                           {section.label}
//                         </p>
//                       </div>

//                       {section.type === 'metrics' && section.metrics && (
//                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, paddingLeft: 38 }}>
//                           {section.metrics.map(m => (
//                             <div key={m.label} style={{
//                               background: 'var(--surface)', border: '1px solid var(--border)',
//                               borderRadius: 10, padding: '12px 8px', textAlign: 'center',
//                             }}>
//                               <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 800, color: 'var(--accent)', letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>{m.value}</p>
//                               <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--text2)', lineHeight: 1.4 }}>{m.label}</p>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {section.type === 'video' && (
//                         <div style={{ paddingLeft: 38 }}>
//                           <video src={section.content as string} controls style={{ width: '100%', borderRadius: 10, border: '1px solid var(--border)' }} />
//                         </div>
//                       )}

//                       {section.type === 'text' && (
//                         <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.8, paddingLeft: 38 }}>
//                           {section.content as string}
//                         </p>
//                       )}

//                       {section.type === 'list' && (
//                         <div style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingLeft: 38 }}>
//                           {(section.content as string[]).map((item, ii) => (
//                             <div key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
//                               <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>·</span>
//                               {item}
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       {si < (project.detail?.length ?? 0) - 1 && (
//                         <div style={{ marginTop: 16, borderBottom: '1px solid var(--border)' }} />
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   )
// }

    function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
        document.removeEventListener('keydown', handleKey)
        document.body.style.overflow = ''
        }
    }, [onClose])

    return (
        <AnimatePresence>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(16px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            }}
        >
            <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={e => e.stopPropagation()}
            style={{
                background: 'var(--surface)',
                borderRadius: 24,
                width: '100%', maxWidth: 900,
                height: '85vh',
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 60px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.08)',
            }}
            >
            {/* ── 헤더 ── */}
            <div style={{
                flexShrink: 0, height: 100,
                background: project.banner.gradient,
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                {/* 배경 패턴 */}
                <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255,255,255,0.1) 0%, transparent 55%), radial-gradient(circle at 85% 30%, rgba(255,255,255,0.06) 0%, transparent 45%)',
                }} />

                {/* 중앙 — 아이콘 + 제목 */}
                <div style={{
                position: 'relative', zIndex: 1,
                display: 'flex', alignItems: 'center', gap: 14,
                }}>
                <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, backdropFilter: 'blur(8px)',
                    flexShrink: 0,
                }}>
                    {project.banner.icon}
                </div>
                <div>
                    <h2 style={{
                    fontFamily: 'Syne, sans-serif', fontSize: 22,
                    fontWeight: 800, color: '#fff', letterSpacing: -0.5,
                    lineHeight: 1.1, marginBottom: 3,
                    }}>
                    {project.name}
                    </h2>
                    <p style={{
                    fontSize: 12, color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'JetBrains Mono, monospace',
                    }}>
                    {project.sub}
                    </p>
                </div>
                </div>

                {/* 닫기 버튼 */}
                <motion.button
                onClick={onClose}
                whileHover={{ background: 'rgba(255,255,255,0.2)', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    position: 'absolute', top: 14, right: 14,
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff', fontSize: 14, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                >
                ✕
                </motion.button>

                {/* 상태 뱃지 */}
                <div style={{
                position: 'absolute', top: 14, left: 14,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: project.status.color,
                background: 'rgba(0,0,0,0.3)',
                border: `1px solid ${project.status.border}`,
                borderRadius: 4, padding: '3px 10px',
                backdropFilter: 'blur(4px)',
                }}>
                {project.status.label}
                </div>

                {/* 하단 페이드 */}
                <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
                background: 'linear-gradient(transparent, var(--surface))',
                }} />
            </div>

            {/* ── 본문 — 스크롤 없이 꽉 채움 ── */}
            <div style={{
                flex: 1, overflow: 'hidden',
                display: 'grid', gridTemplateColumns: '1fr 1fr',
            }}>

                {/* 왼쪽 */}
                <div style={{
                overflowY: 'auto', padding: '24px 28px',
                borderRight: '1px solid var(--border)',
                scrollbarWidth: 'none',
                }}>
                <style>{`.modal-scroll::-webkit-scrollbar { display: none; }`}</style>

                <Section label="overview" />
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.85, marginBottom: 22 }}>
                    {project.desc}
                </p>

                <Section label="features" />
                <ul style={{ listStyle: 'none', marginBottom: 22 }}>
                    {project.features.map((f, j) => (
                    <li key={j} style={{
                        fontSize: 13, color: 'var(--text2)', padding: '6px 0',
                        borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
                        display: 'flex', alignItems: 'flex-start', gap: 8,
                    }}>
                        <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>{f}
                    </li>
                    ))}
                </ul>

                <Section label="stack" />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 22 }}>
                    {project.stack.map(tag => (
                    <span key={tag} style={{
                        fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                        color: 'var(--text3)', border: '1px solid var(--border)',
                        borderRadius: 4, padding: '4px 9px',
                    }}>{tag}</span>
                    ))}
                </div>

                {project.n8nBadge && (
                    <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                    color: 'var(--accent2)', background: 'var(--tag-bg)',
                    border: '1px solid var(--tag-border)',
                    borderRadius: 8, padding: '10px 14px', marginBottom: 18,
                    }}>
                    ⚙ Powered by n8n
                    </div>
                )}

                {project.pipeline && (
                    <>
                    <Section label="pipeline" />
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 5, marginBottom: 22 }}>
                        {project.pipeline.map((step, idx) => (
                        <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                            background: 'var(--surface2)', border: '1px solid var(--border2)',
                            borderRadius: 8, padding: '7px 9px', minWidth: 52,
                            }}>
                            <span style={{ fontSize: 14 }}>{step.icon}</span>
                            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--text2)', textAlign: 'center', whiteSpace: 'nowrap' }}>{step.label}</span>
                            </div>
                            {idx < project.pipeline!.length - 1 && (
                            <span style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 700 }}>→</span>
                            )}
                        </div>
                        ))}
                    </div>
                    </>
                )}

                {project.link && (
                    <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, boxShadow: '0 0 40px var(--accent-glow)' }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14,
                        color: '#fff', background: 'var(--accent)',
                        padding: '11px 22px', borderRadius: 8,
                        textDecoration: 'none',
                        boxShadow: '0 0 24px var(--accent-glow)',
                    }}
                    >
                    서비스 보기 →
                    </motion.a>
                )}
                </div>

                {/* 오른쪽 */}
                <div style={{
                overflowY: 'auto', padding: '24px 28px',
                background: 'var(--surface2)',
                scrollbarWidth: 'none',
                }}>
                <Section label="사고 과정" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {project.detail?.map((section, si) => (
                    <motion.div
                        key={section.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 + si * 0.06 }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                        <span style={{
                            width: 26, height: 26, borderRadius: 7,
                            background: 'var(--tag-bg)', border: '1px solid var(--tag-border)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 12, flexShrink: 0,
                        }}>
                            {section.icon}
                        </span>
                        <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 12, fontWeight: 700, color: 'var(--text)' }}>
                            {section.label}
                        </p>
                        </div>

                        {section.type === 'metrics' && section.metrics && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 7, paddingLeft: 35 }}>
                            {section.metrics.map(m => (
                            <div key={m.label} style={{
                                background: 'var(--surface)', border: '1px solid var(--border)',
                                borderRadius: 10, padding: '10px 6px', textAlign: 'center',
                            }}>
                                <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 800, color: 'var(--accent)', letterSpacing: -1, lineHeight: 1, marginBottom: 4 }}>{m.value}</p>
                                <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 8, color: 'var(--text2)', lineHeight: 1.4 }}>{m.label}</p>
                            </div>
                            ))}
                        </div>
                        )}

                        {section.type === 'video' && (
                        <div style={{ paddingLeft: 35 }}>
                            <video src={section.content as string} controls style={{ width: '100%', borderRadius: 10, border: '1px solid var(--border)' }} />
                        </div>
                        )}

                        {section.type === 'text' && (
                        <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.85, paddingLeft: 35 }}>
                            {section.content as string}
                        </p>
                        )}

                        {section.type === 'list' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, paddingLeft: 35 }}>
                            {(section.content as string[]).map((item, ii) => (
                            <div key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontSize: 12, color: 'var(--text2)', lineHeight: 1.75 }}>
                                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>·</span>
                                {item}
                            </div>
                            ))}
                        </div>
                        )}

                        {si < (project.detail?.length ?? 0) - 1 && (
                        <div style={{ marginTop: 14, borderBottom: '1px solid var(--border)' }} />
                        )}
                    </motion.div>
                    ))}
                </div>
                </div>

            </div>
            </motion.div>
        </motion.div>
        </AnimatePresence>
    )
    }

    function Section({ label }: { label: string }) {
    return (
        <p style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'var(--accent)', letterSpacing: 2,
        textTransform: 'uppercase', marginBottom: 10,
        }}>
        // {label}
        </p>
    )
    }

// ── 카드 ──────────────────────────────────────────────────────
function ProjectCard({ project, index, onOpen }: {
  project: Project; index: number; onOpen: () => void
}) {
  const [pipelineOpen, setPipelineOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 18, overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* 배너 */}
      <motion.div
        onClick={project.detail ? onOpen : undefined}
        whileHover={project.detail ? { opacity: 0.88 } : {}}
        style={{
          height: 120,
          background: project.banner.gradient,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
          cursor: project.detail ? 'pointer' : 'default',
          position: 'relative',
        }}
      >
        <span style={{ fontSize: 36 }}>{project.banner.icon}</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>
          {project.name.toLowerCase().replace(/ /g, '-')}
        </span>
        {project.detail && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backdropFilter: 'blur(2px)',
            }}
          >
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
              color: '#fff', background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: 8, padding: '8px 18px',
              backdropFilter: 'blur(4px)',
            }}>
              자세히 보기 →
            </span>
          </motion.div>
        )}
      </motion.div>

      {/* 카드 내용 */}
      <div style={{ padding: 28 }}>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
          padding: '4px 12px', borderRadius: 4, display: 'inline-block', marginBottom: 14,
          color: project.status.color, background: project.status.bg,
          border: `1px solid ${project.status.border}`,
        }}>
          {project.status.label}
        </span>

        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5, marginBottom: 6 }}>
          {project.name}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 12, fontWeight: 500 }}>
          {project.sub}
        </p>
        <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 18 }}>
          {project.desc}
        </p>

        <ul style={{ listStyle: 'none', marginBottom: 18 }}>
          {project.features.map((f, j) => (
            <li key={j} style={{
              fontSize: 13, color: 'var(--text2)', padding: '5px 0',
              borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
              display: 'flex', alignItems: 'flex-start', gap: 8,
            }}>
              <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>{f}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
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
            borderRadius: 8, padding: '10px 14px', marginBottom: 14,
          }}>
            ⚙ Powered by n8n — 코드 없이 설계한 자동화 아키텍처
          </div>
        )}

        {project.pipeline && (
          <div style={{ marginBottom: 14 }}>
            <button
              onClick={() => setPipelineOpen(prev => !prev)}
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
              <span style={{ fontSize: 10, display: 'inline-block', transform: pipelineOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
            </button>
            {pipelineOpen && (
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
                        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--text2)', textAlign: 'center', whiteSpace: 'nowrap' }}>{step.label}</span>
                      </div>
                      {idx < project.pipeline!.length - 1 && (
                        <span style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 700 }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
            color: 'var(--accent)', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            서비스 보기 →
          </a>
        )}
      </div>
    </motion.div>
  )
}

// ── 메인 ──────────────────────────────────────────────────────
export default function Projects() {
  const [active, setActive] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered = projects.filter(p =>
    active === 'all' ? true : p.category === active
  )

  return (
    <section id="projects" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            // projects
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, color: 'var(--text)', marginBottom: 40 }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

      </div>

      {/* 모달 */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}