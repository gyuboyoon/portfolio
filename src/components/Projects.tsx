'use client'

import { useState } from 'react'
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
}

const projects: Project[] = [
  {
    category: 'live',
    status: { label: '✦ LIVE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
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
    status: { label: '✦ LIVE', color: '#34D399', bg: 'rgba(52,211,153,0.1)', border: 'rgba(52,211,153,0.25)' },
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
  },
  {
    category: 'auto',
    status: { label: '⚡ COMPANY', color: 'var(--accent2)', bg: 'var(--tag-bg)', border: 'var(--tag-border)' },
    name: '사내 AX 자동화 시스템',
    sub: 'n8n으로 설계한 팀 생산성 인프라',
    desc: '단순 자동화가 아닙니다. 흩어져 있던 업무 흐름을 하나의 워크플로로 연결하고, 반복이 사라진 자리에 사람이 해야 할 일을 채웠습니다.',
    features: [
      '보고서 자동화 — 업무기록표 데이터를 읽어 보고서 초안 자동 생성, 작성 시간 50%+ 절감',
      '요청 워크플로 — 구두·메시지 요청을 표준 업무요청서로 전환, DB 상태 추적 자동화',
      '실시간 알림 — 신규 데이터 등록 시 Slack 즉시 알림 + Notion 자동 아카이빙',
    ],
    stack: ['n8n', 'Slack API', 'Notion API', 'ChatGPT API'],
    n8nBadge: true,
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
]

const filters = [
  { label: '전체', value: 'all' },
  { label: '✦ Live', value: 'live' },
  { label: '⚡ 자동화', value: 'auto' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

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

        {/* 필터 탭 */}
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

        {/* 카드 그리드 */}
        <motion.div
          layout
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 18, padding: 32,
                position: 'relative', overflow: 'hidden',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              whileHover={{ y: -6, borderColor: 'rgba(79,142,247,0.3)' }}
            >
              {/* 상단 라인 호버 효과 */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                opacity: 0, transition: 'opacity 0.3s',
              }} />

              {/* 상태 뱃지 */}
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                padding: '4px 12px', borderRadius: 4,
                display: 'inline-block', marginBottom: 18,
                color: project.status.color,
                background: project.status.bg,
                border: `1px solid ${project.status.border}`,
              }}>
                {project.status.label}
              </span>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800, color: 'var(--text)', letterSpacing: -0.5, marginBottom: 8 }}>
                {project.name}
              </h3>
              <p style={{ fontSize: 13, color: 'var(--accent)', marginBottom: 14, fontWeight: 500 }}>
                {project.sub}
              </p>
              <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 20 }}>
                {project.desc}
              </p>

              {/* 피처 리스트 */}
              <ul style={{ listStyle: 'none', marginBottom: 22 }}>
                {project.features.map((f, j) => (
                  <li key={j} style={{
                    fontSize: 14, color: 'var(--text2)',
                    padding: '6px 0',
                    borderBottom: j < project.features.length - 1 ? '1px solid var(--border)' : 'none',
                    display: 'flex', alignItems: 'flex-start', gap: 8,
                  }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* 스택 태그 */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: project.link || project.n8nBadge ? 22 : 0 }}>
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

              {/* n8n 뱃지 */}
              {project.n8nBadge && (
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                  color: 'var(--accent2)', background: 'var(--tag-bg)',
                  border: '1px solid var(--tag-border)',
                  borderRadius: 8, padding: '10px 14px',
                  marginBottom: 16,
                }}>
                  ⚙ Powered by n8n — 코드 없이 설계한 자동화 아키텍처
                </div>
              )}

              {/* 링크 */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: 14,
                  color: 'var(--accent)', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                }}>
                  서비스 보기 →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}