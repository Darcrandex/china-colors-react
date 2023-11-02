/**
 * @name Index
 * @description
 * @author darcrand
 */

import colorArr from '@/assets/zh-colors-sort.json'
import AsideBar from '@/components/AsideBar'
import ColorValue from '@/components/ColorValue'
import { useMemo } from 'react'

export default function Index(props: { searchParams: { id: string } }) {
  const matchedColor = useMemo(
    () => colorArr.find((v) => v.hex.replace('#', '') === props.searchParams.id),
    [props.searchParams.id]
  )

  const textColor = useMemo(() => ((matchedColor?.lightness || 100) < 50 ? '#eee' : '#333'), [matchedColor])

  return (
    <>
      <section
        className='flex h-screen transition-all'
        style={{ color: textColor, backgroundColor: matchedColor?.hex }}
      >
        <main className='flex-1 flex flex-col justify-between items-center'>
          <header></header>

          <article className='text-center'>
            <h1 className='mb-10' style={{ fontFamily: 'qiji', fontSize: '120px' }}>
              {matchedColor?.name || '中國傳統色'}
            </h1>

            {matchedColor ? (
              <>
                <p className='mb-4'>{matchedColor.pinyin}</p>
                <p className='space-x-4 text-sm'>
                  <ColorValue text={matchedColor.hex} />
                  <ColorValue text={matchedColor.rgb} />
                  <ColorValue text={matchedColor.hsl} />
                  <ColorValue text={matchedColor.cmyk} />
                </p>
              </>
            ) : null}
          </article>

          <a href='https://github.com/Darcrandex/china-colors-react' target='_blank' className='my-4 underline'>
            china colors &copy; make with 💖 by darcrand
          </a>
        </main>

        <AsideBar />
      </section>
    </>
  )
}
