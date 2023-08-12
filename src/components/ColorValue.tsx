/**
 * @name ColorValue
 * @description
 * @author darcrand
 */

import { copyToClipboard } from '@/utils/copy-to-clipboard'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export type ColorValueProps = { text?: string }
export default function ColorValue(props: ColorValueProps) {
  const onCopy = () => {
    if (!props.text) return

    copyToClipboard(props.text).then(() => {
      toast.success('复制成功', {
        autoClose: 1000,
        closeButton: false,
        progressStyle: { visibility: 'hidden' },
      })
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
