/**
 * @name Main
 * @description
 * @author darcrand
 */

import json from '@/data/zh-colors.json'
import { useEffect } from 'react'

export default function Main() {
  useEffect(() => {
    console.log(json)
  }, [])

  return (
    <>
      <section className='flex h-screen'>
        <main className='flex-1 flex flex-col justify-between'>
          <header></header>
          <article>中国色</article>
          <footer>china colors</footer>
        </main>

        <aside className='w-60 shrink-0 bg-red-200'></aside>
      </section>
    </>
  )
}
