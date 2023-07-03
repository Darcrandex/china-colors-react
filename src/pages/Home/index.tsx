/**
 * @name Home
 * @description
 * @author darcrand
 */

import Color from 'color'
import { useEffect, useMemo, useRef } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Scrollbar from 'smooth-scrollbar'

import colors from '@/data/colors.json'
import { toFixed } from '@/utils'
import ColorValue from './ColorValue'
import './styles.less'

type ColorItem = {
  id: string
  name: string
  pinyin: string
  hex?: string
  rgb?: string
  hsl?: string
  l?: number
}

const list = colors.map<ColorItem>((v) => {
  const c = Color(v.hex)
  const h = toFixed(c.hue(), 0)
  const s = toFixed(c.saturationl(), 0)
  const l = toFixed(c.lightness(), 0)

  return {
    ...v,
    id: v.hex.replace('#', ''),
    rgb: c.rgb().toString(),
    hsl: `hsl(${h}, ${s}%, ${l}%)`,
    l: toFixed(c.lightness(), 0),
  }
})

export default function Home() {
  const { id } = useParams()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (ref.current) {
      const scroll = Scrollbar.init(ref.current)
      return () => {
        scroll.destroy()
      }
    }
  }, [])

  const matchItem = useMemo<ColorItem>(() => {
    const item = list.find((v) => v.id === id)
    return item || { id: 'empty', name: '中国色', pinyin: 'china color', hex: '' }
  }, [id])

  const textColor = useMemo(() => {
    const l = matchItem.l || 100
    return l < 50 ? '#eee' : '#333'
  }, [matchItem.l])

  return (
    <>
      <section className='container' style={{ backgroundColor: matchItem.hex }}>
        <main className='main' style={{ color: textColor }}>
          <header className='empty'></header>
          <article>
            <h1 className='color-name'>{matchItem.name}</h1>
            <p className='color-pinyin'>{matchItem.pinyin}</p>
            <p className='color-values'>
              <ColorValue text={matchItem.hex} />
              <ColorValue text={matchItem.rgb} />
              <ColorValue text={matchItem.hsl} />
            </p>
          </article>

          <footer className='footer'>
            <a className='link' href='https://github.com/Darcrandex/china-colors-react' target='_blank'>
              China Colors React | make with 💖 by @Darcrandex
            </a>
          </footer>
        </main>

        <aside ref={ref} className='side-menus'>
          {list.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              style={{ color: textColor }}
            >
              <i className='left-line' style={{ backgroundColor: item.hex }}></i>
              <span className='name'>{item.name}</span>
              <span className='pinyin'>{item.pinyin}</span>
            </NavLink>
          ))}
        </aside>
      </section>
    </>
  )
}
