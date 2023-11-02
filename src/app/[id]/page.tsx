/**
 * @name ColorDetail
 * @description
 * @author darcrand
 */

export default function ColorDetail(props: { params: { id: string } }) {
  return (
    <>
      <h1>ColorDetail</h1>
      <p>id: {props.params.id}</p>
    </>
  )
}
