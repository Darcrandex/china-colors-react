/**
 * @name ColorValue
 * @description
 * @author darcrand
 */

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useCopyToClipboard } from 'react-use'

export type ColorValueProps = { text?: string }
export default function ColorValue(props: ColorValueProps) {
  const [, copy] = useCopyToClipboard()

  const onCopy = () => {
    if (!props.text) return
    copy(props.text)
    toast.success('复制成功', {
      autoClose: 1000,
      closeButton: false,
      progressStyle: { visibility: 'hidden' },
    })
  }

  if (!props.text) return null

  return (
    <>
      <span className='hover:underline cursor-pointer' onClick={onCopy}>
        {props.text}
      </span>
    </>
  )
}
