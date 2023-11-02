/**
 * @name ColorDetail
 * @description
 * @author darcrand
 */

import colorArr from '@/assets/zh-colors-sort.json'

export default async function ColorDetail(props: { params: { id: string } }) {
  const matched = colorArr.find((v) => v.hex.replace('#', '') === props.params.id)
  return (
    <>
      <h1>ColorDetail</h1>
      <p>id: {props.params.id}</p>
      <pre>{JSON.stringify(matched, null, 2)}</pre>
    </>
  )
}
