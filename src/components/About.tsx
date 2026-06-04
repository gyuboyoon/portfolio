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
    // title: '사람을 먼저 읽는 시각',
    title: '같은 말도, 누가 듣느냐에 따라 전혀 다른 문제가 보입니다.',
    paragraphs: [
    //   '개발자가 되기 전, 백화점과 바(Bar) 등 서비스 현장에서 오랜 시간을 보냈습니다.',
    //   '하루에도 수십 명을 만나며 자연스럽게 체득한 것이 있었습니다.\n말을 듣기 전에 상대가 무엇을 원하는지 먼저 읽는 것.\n같은 말도 어떻게 전달하느냐에 따라 결과가 완전히 달라진다는 것.',
        '백화점 서비스 현장에서 수천 명의 고객을 만났습니다.\n"마음에 안 든다, 별로야"라는 말 뒤에는 언제나 정작 필요한 것이 숨어 있었습니다.\n저는 그걸 찾기 위해 — 상대의 입장으로 들어가 질문했습니다.',
    ],
    // quote: '이 시각이 지금도 제 개발의 출발점입니다.',
    quote: '클라이언트가 "불편하다"고 말하면, 묻고, 파고들고, 정작 필요한 게 무엇인지를 찾아냅니다. 그게 제 개발의 첫 번째 단계입니다.',
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
        '불편함을 발견하면 시스템으로 바꿉니다.',
        '사용자의 언어로 문제를 정의하고, 기획부터 자동화 구축까지 아이디어가 서비스가 되는 전 과정을 주도했습니다.',
        '에어홀딩스 클라이언트의 첫 마디는 "예약 관리가 불편하다"였습니다.\n인터뷰로 파고들었더니 진짜 문제가 보였습니다 —\n엑셀에 흩어진 고객 데이터, 수기로 처리되던 승인 프로세스.\n문제를 정의하고, 구조를 설계하고, 직접 배포했습니다.',
    // 'Leaven Lake에서는 팀원이 기능 구현에만 집중하고 있을 때,\n실제 사용자 입장에서 직접 써보며 막히는 지점을 찾아냈습니다.\n시나리오로 그려 공유했고, 대화로 방향을 함께 바꿨습니다.\n기능이 아니라, 서비스가 됐습니다.',
  ],
    quote: '필요한 것은 묻지 않으면 나오지 않습니다. 저는 끝까지 묻습니다.',
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