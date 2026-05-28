// 'use client'

// import { useTheme } from '@/hooks/useTheme'

// const navLinks = [
//   { href: '#about', label: 'about' },
//   { href: '#experience', label: 'experience' },
//   { href: '#skills', label: 'skills' },
//   { href: '#projects', label: 'projects' },
//   { href: '#contact', label: 'contact' },
// ]

// export default function Nav() {
//   const { theme, toggleTheme } = useTheme()

//   return (
//     <nav style={{
//       position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
//       padding: '15px 60px',
//       display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//       background: 'var(--nav-bg)',
//       backdropFilter: 'blur(20px)',
//       borderBottom: '1px solid var(--border)',
//       transition: 'all 0.3s',
//     }}>
//       <a href="#hero" style={{
//         fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20,
//         color: 'var(--text)', textDecoration: 'none',
//       }}>
//         YGB<span style={{ color: 'var(--accent)' }}>.</span>
//       </a>

//       <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }}>
//         {navLinks.map(link => (
//           <li key={link.href}>
//             <a href={link.href} style={{
//               fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
//               color: 'var(--text2)', textDecoration: 'none',
//             }}
//               onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
//               onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
//             >
//               ./{link.label}
//             </a>
//           </li>
//         ))}

//         <li>
//           <button onClick={toggleTheme} style={{
//             background: 'var(--surface2)', border: '1px solid var(--border2)',
//             borderRadius: 50, padding: '6px 13px', cursor: 'pointer',
//             fontSize: 13, color: 'var(--text2)', transition: 'all 0.2s',
//           }}>
//             {theme === 'dark' ? '🌙 다크' : '☀️ 라이트'}
//           </button>
//         </li>

//         <li>
//           <a href="/resume.pdf" download style={{
//             fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
//             background: 'var(--accent)', color: '#fff',
//             padding: '8px 18px', borderRadius: 6,
//             textDecoration: 'none', whiteSpace: 'nowrap',
//           }}>
//             이력서 다운 ↓
//           </a>
//         </li>
//       </ul>
//     </nav>
//   )
// }

'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'

const navLinks = [
  { href: '#about', label: 'about' },
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#education', label: 'education' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '15px 60px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <motion.a
        href="#hero"
        whileHover={{ opacity: 0.8 }}
        style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20,
          color: 'var(--text)', textDecoration: 'none',
        }}
      >
        YGB<span style={{ color: 'var(--accent)' }}>.</span>
      </motion.a>

      <ul style={{ display: 'flex', gap: 28, listStyle: 'none', alignItems: 'center' }}>
        {navLinks.map(link => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              whileHover={{ color: 'var(--accent)' }}
              transition={{ duration: 0.15 }}
              style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 12,
                color: 'var(--text2)', textDecoration: 'none',
              }}
            >
              ./{link.label}
            </motion.a>
          </li>
        ))}

        <li>
          <motion.button
            onClick={toggleTheme}
            whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'var(--surface2)', border: '1px solid var(--border2)',
              borderRadius: 50, padding: '6px 13px', cursor: 'pointer',
              fontSize: 13, color: 'var(--text2)',
            }}
          >
            {theme === 'dark' ? '🌙 다크' : '☀️ 라이트'}
          </motion.button>
        </li>

        <li>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ opacity: 0.85, y: -1 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 13,
              background: 'var(--accent)', color: '#fff',
              padding: '8px 18px', borderRadius: 6,
              textDecoration: 'none', whiteSpace: 'nowrap',
              display: 'inline-block',
            }}
          >
            이력서 다운 ↓
          </motion.a>
        </li>
      </ul>
    </nav>
  )
}