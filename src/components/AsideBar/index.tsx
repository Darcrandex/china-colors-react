/**
 * @name AsideBar
 * @description
 * @author darcrand
 */

'use client'
import colorArr from '@/assets/zh-colors-sort.json'
import { cls } from '@/utils/cls'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

const navs = colorArr.map((v) => ({ ...v, id: v.hex.replace('#', '') }))

export type AsideBarProps = { className?: string }

export default function AsideBar(props: AsideBarProps) {
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
      <aside ref={elRef} className={cls('w-96 bg-red-300 p-4 overflow-hidden', props.className)}>
        <ul>
          {navs.map((item, i) => (
            <li key={item.id}>
              <Link replace href={`/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
