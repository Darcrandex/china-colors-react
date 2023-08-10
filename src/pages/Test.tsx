/**
 * @name Test
 * @description
 * @author darcrand
 */

import colorsArr from '@/data/zh-colors-sort.json'

export default function Test() {
  return (
    <>
      <h1>Test</h1>
      <ul className='flex flex-wrap' style={{ fontFamily: 'noto' }}>
        {colorsArr.map((v) => (
          <li key={v.hex} className='w-1/4'>
            <p className='m-4 text-5xl'>{v.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
