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

const experiences = [
  {
    period: '2025.10 — 현재',
    company: '머스트컴퍼니',
    role: 'AX팀 팀장',
    sub: '개발 / 기획 / 설계 / 자동화 구축 주도',
    title: 'AI Transformation · 기획 · 자동화',
    desc: 'AX팀 팀장으로 합류해 서비스 기획, 프로세스 설계, n8n 자동화 구축 전 과정을 주도했습니다. 개발·비개발 직군 간 커뮤니케이터 역할을 담당하며 각 사업부의 니즈를 기술 요구사항으로 번역했습니다.',
    achievements: [
      { bold: '보고서 작성 시간 50%+ 절감', rest: ' — 업무기록표 기반 주간·월간 보고서 초안 자동 생성' },
      { bold: '요청 누락 사실상 제거', rest: ' — 워크플로 기반 업무요청서 시스템 + DB 상태 추적' },
      { bold: '반복업무 50%+ 절감', rest: ' — Slack·Notion 실시간 연동, 사업부 맞춤 자동화' },
    ],
    tags: ['Next.js', 'React', 'Flask', 'n8n', 'Slack API', 'Notion API', 'LiteLLM', 'Claude Code', 'Jira'],
  },
  {
    period: '2023.01 — 2024.10',
    company: '(주)스마트디아그노시스',
    role: 'R&D 연구원 · Web Developer',
    title: 'TestWith — AI 기반 온라인 시험 솔루션',
    desc: '서버 아키텍처 개선, AWS 인프라 구축, 실시간 채팅 시스템 안정화, ChatGPT API 기반 AI 기능 개발을 담당했습니다. 클라이언트·영업팀 커뮤니케이션 및 코드 리뷰 리드도 병행했습니다.',
    achievements: [
      { bold: 'API 응답속도 40% 단축', rest: ' — Node.js + Flask BFF 패턴 통합 (300ms → 180ms)' },
      { bold: '동접 1,000명+ 인프라', rest: ' — AWS EC2 Auto Scaling, RDS Read Replica' },
      { bold: '채팅 안정성 90% 향상', rest: ' — Socket.IO 전환, 메시지 유실률 0%' },
      { bold: '사용자 이탈률 80% 감소', rest: ' — A/B 테스트 기반 UX 개선' },
    ],
    tags: ['Node.js', 'Python Flask', 'AWS', 'Socket.IO', 'ChatGPT API', 'MySQL'],
    kma: {
      title: 'KMA — 한국능률협회 인터넷강의 플랫폼',
      desc: '전체 UI/UX 리뉴얼을 주도하며 사용자 흐름 개선과 프론트엔드 전반을 재정비했습니다. Flask 서버 운영 및 AWS 인프라 관리도 병행했습니다.',
      tags: ['HTML/CSS/JS', 'Python Flask', 'AWS RDS', 'CloudFront', 'S3'],
    },
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 60px' }}>

        <RevealBox>
          <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>
            // experience
          </p>
        </RevealBox>

        <RevealBox delay={0.1}>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(30px, 5vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, color: 'var(--text)', marginBottom: 60 }}>
            경력 <span style={{ color: 'var(--accent)' }}>&</span> 성과
          </h2>
        </RevealBox>

        <div>
          {experiences.map((exp, i) => (
            <RevealBox key={exp.company} delay={i * 0.1}>
              <div style={{
                display: 'grid', gridTemplateColumns: '220px 1fr',
                gap: 48, padding: '48px 0',
                borderBottom: i < experiences.length - 1 ? '1px solid var(--border)' : 'none',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', left: 207, top: 54, width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 16px var(--accent-glow)', zIndex: 1 }} />
                <div style={{ position: 'absolute', left: 214, top: 60, bottom: 0, width: 1, background: 'var(--border)' }} />

                <div style={{ paddingTop: 4 }}>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--text3)', marginBottom: 10 }}>{exp.period}</p>
                  <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>{exp.company}</p>
                  <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 500 }}>{exp.role}</p>
                  {exp.sub && <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 6, fontStyle: 'italic' }}>{exp.sub}</p>}
                </div>

                <div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 12, marginTop: 4 }}>{exp.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--text2)', lineHeight: 1.85, marginBottom: 20 }}>{exp.desc}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                    {exp.achievements.map((a, j) => (
                      <motion.div
                        key={j}
                        whileHover={{ x: 4, borderColor: 'var(--accent)' }}
                        transition={{ duration: 0.2 }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '12px 16px', fontSize: 14, color: 'var(--text2)' }}
                      >
                        <span style={{ color: 'var(--success)', fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>↑</span>
                        <span><strong style={{ color: 'var(--text)' }}>{a.bold}</strong>{a.rest}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: exp.kma ? 24 : 0 }}>
                    {exp.tags.map(tag => (
                      <motion.span
                        key={tag}
                        whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                        transition={{ duration: 0.15 }}
                        style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent2)', background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', borderRadius: 4, padding: '4px 10px' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {exp.kma && (
                    <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                      <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{exp.kma.title}</p>
                      <p style={{ fontSize: 14, color: 'var(--text2)', lineHeight: 1.8, marginBottom: 12 }}>{exp.kma.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                        {exp.kma.tags.map(tag => (
                          <motion.span
                            key={tag}
                            whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                            transition={{ duration: 0.15 }}
                            style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--accent2)', background: 'var(--tag-bg)', border: '1px solid var(--tag-border)', borderRadius: 4, padding: '4px 10px' }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </RevealBox>
          ))}
        </div>
      </div>
    </section>
  )
}