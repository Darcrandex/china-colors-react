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
      <ul className='flex flex-wrap'>
        {colorsArr.map((v) => (
          <li key={v.hex} className='w-1/4'>
            <p className='m-4 text-2xl' style={{ fontFamily: 'HuaWenXingKai' }}>
              {v.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
