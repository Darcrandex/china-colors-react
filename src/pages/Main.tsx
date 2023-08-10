/**
 * @name Main
 * @description
 * @author darcrand
 */

import colorsArr from '@/data/zh-colors-sort.json'
import { clsx } from 'clsx'
import { useEffect, useMemo, useRef } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import Scrollbar from 'smooth-scrollbar'

export default function Main() {
  const navigate = useNavigate()
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (ref.current) {
      const scroll = Scrollbar.init(ref.current)
      return () => {
        scroll.destroy()
      }
    }
  }, [])

  const { id } = useParams()
  const color = useMemo(() => colorsArr.find((v) => v.hex.replace('#', '') === id), [id])
  const textColor = useMemo(() => ((color?.lightness || 100) < 50 ? '#eee' : '#333'), [color])

  return (
    <>
      <section className='flex h-screen transition-all' style={{ color: textColor, backgroundColor: color?.hex }}>
        <main className='flex-1 flex flex-col justify-between items-center'>
          <header></header>
          <Outlet />
          <a href='https://github.com/Darcrandex/china-colors-react' target='_blank' className='my-4 underline'>
            china colors &copy; make with 💖 by darcrand
          </a>
        </main>

        <aside ref={ref} className='w-60 shrink-0'>
          <ul>
            {colorsArr.map((v) => (
              <li
                key={v.hex}
                className={clsx('relative p-4 cursor-pointer indent-4', v.hex.replace('#', '') === id && 'font-bold')}
                onClick={() => navigate(`/${v.hex.replace('#', '')}`)}
              >
                <i className='w-2 absolute top-0 bottom-0 left-0' style={{ backgroundColor: v.hex }}></i>
                <p>{v.name}</p>
                <p className='text-sm'>{v.pinyin}</p>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </>
  )
}
