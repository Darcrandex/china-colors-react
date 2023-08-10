/**
 * @name ColorItem
 * @description
 * @author darcrand
 */

import ColorValue from '@/components/ColorValue'
import colorsArr from '@/data/zh-colors-sort.json'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

export default function ColorItem() {
  const { id } = useParams()
  const color = useMemo(() => colorsArr.find((v) => v.hex.replace('#', '') === id), [id])

  return (
    <>
      <article className='text-center'>
        <h1 className='text-5xl mb-10'>{color?.name || '中国色'}</h1>

        {color ? (
          <>
            <p className='mb-4'>{color.pinyin}</p>
            <p className='space-x-4 text-sm'>
              <ColorValue text={color.hex} />
              <ColorValue text={color.rgb} />
              <ColorValue text={color.hsl} />
              <ColorValue text={color.cmyk} />
            </p>
          </>
        ) : null}
      </article>
    </>
  )
}
