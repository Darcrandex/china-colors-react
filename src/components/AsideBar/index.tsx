/**
 * @name AsideBar
 * @description
 * @author darcrand
 */

'use client'
import { cls } from '@/utils/cls'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Scrollbar from 'smooth-scrollbar'

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
          {Array.from({ length: 100 }).map((_, i) => (
            <li key={i}>
              <Link replace href={`/${i}`}>
                {i}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
