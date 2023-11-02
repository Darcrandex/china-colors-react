/**
 * @name ColorValue
 * @description
 * @author darcrand
 */

'use client'
import { useDebounceFn, useSize, useTimeout } from 'ahooks'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export type ColorValueProps = { text?: string }
export default function ColorValue(props: ColorValueProps) {
  const elRef = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const winSize = useSize(() => document.documentElement)

  const { run: setTipsPos } = useDebounceFn(
    () => {
      if (elRef.current) {
        const rect = elRef.current.getBoundingClientRect()
        setPos({ x: rect.left + 0.5 * rect.width, y: rect.top })
      }
    },
    { wait: 500 }
  )

  useEffect(() => {
    if (winSize) setTipsPos()
  }, [winSize, setTipsPos])

  const { run: onCopySuccess } = useDebounceFn(
    () => {
      setOpen(true)
    },
    { wait: 250 }
  )

  const onCopy = async () => {
    if (!props.text || open) return

    try {
      await navigator.clipboard.writeText(props.text)
      onCopySuccess()
    } catch (error) {}
  }

  if (!props.text) return null

  return (
    <>
      <span ref={elRef} className='py-2 hover:underline cursor-pointer select-none' onClick={onCopy}>
        {props.text}
      </span>

      <AnimatePresence>{open && <Tips left={pos.x} top={pos.y} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  )
}

function Tips(props: { left: number; top: number; onClose: () => void }) {
  useTimeout(() => {
    props.onClose()
  }, 1000)

  return createPortal(
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{ left: props.left, top: props.top }}
      className='fixed z-10 -translate-y-full -translate-x-1/2 rounded-md shadow-md p-2 text-gray-800 bg-white pointer-events-none'
    >
      copied
    </motion.span>,
    document.body
  )
}
