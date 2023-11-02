/**
 * @name AsideBar
 * @description
 * @author darcrand
 */

'use client'
import colorArr from '@/assets/zh-colors-sort.json'
import { cls } from '@/utils/cls'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

const navs = colorArr.map((v) => ({ ...v, id: v.hex.replace('#', '') }))

export default function AsideBar() {
  const { id } = useParams()

  const elRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (elRef.current) {
      const sb = Scrollbar.init(elRef.current)
      return () => {
        sb.destroy()
      }
    }
  }, [])

  return (
    <>
      <aside ref={elRef} className='w-80 shrink-0 opacity-50 hover:opacity-100 transition-all overflow-hidden'>
        <ul>
          {navs.map((item) => (
            <li key={item.id}>
              <Link
                href={`?id=${item.id}`}
                replace
                className={cls('block group relative p-4 cursor-pointer indent-4', item.id === id && 'font-bold')}
              >
                <i
                  className={cls(
                    'w-2 absolute top-0 bottom-0 left-0 transition-all group-hover:w-4',
                    item.id === id && 'w-4'
                  )}
                  style={{ backgroundColor: item.hex }}
                ></i>
                <span className='block'>{item.name}</span>
                <span className='block text-sm'>{item.pinyin}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
