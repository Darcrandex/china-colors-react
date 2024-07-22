/**
 * @name SaveColorImage
 * @description
 * @author darcrand
 */

'use client'
import { CloudDownloadOutlined } from '@ant-design/icons'
import { saveAs } from 'file-saver'
import { useRef } from 'react'

export type SaveColorImageProps = {
  color?: {
    name: string
    pinyin: string
    hex: string
    rgb: string
    hsl: string
    cmyk: string
    lightness: number
  }

  width?: number
  height?: number
}

export default function SaveColorImage(props: SaveColorImageProps) {
  const dpr = Number.parseFloat(window.devicePixelRatio.toFixed(2))
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imgWidth = props.width || 1920
  const imgHeight = props.height || 1080

  console.log('dpr', dpr)

  const onClick = () => {
    if (!canvasRef.current || !props.color) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.scale(dpr, dpr)

    // 背景色
    ctx.clearRect(0, 0, imgWidth, imgHeight)
    ctx.fillStyle = props.color?.hex
    ctx.fillRect(0, 0, imgWidth, imgHeight)

    // 名称
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = (props.color.lightness || 100) < 50 ? '#eee' : '#333'

    const size1 = 120
    const size2 = 22
    const size3 = 18
    const baseSpacing = 20
    const centerX = Math.round(imgWidth / 2)
    const centerY = Math.round(imgHeight / 2)

    ctx.font = `${size1}px qiji`
    ctx.fillText(props.color?.name, centerX, centerY - size1 - baseSpacing)

    ctx.font = `${size2}px sans-serif`
    ctx.fillText(props.color?.pinyin, centerX, centerY)

    ctx.font = `${size3}px sans-serif`
    ctx.fillText(
      [props.color?.hex, props.color?.rgb, props.color?.hsl, props.color?.cmyk].join('\t\t'),
      centerX,
      centerY + size2 + baseSpacing + size3
    )

    // 保存
    canvas.toBlob((blob) => {
      if (!blob) return
      saveAs(blob, `${props.color?.name}.png`)
    })
  }

  return (
    <>
      <i className='p-2 cursor-pointer text-lg' onClick={onClick}>
        <CloudDownloadOutlined />
      </i>

      <canvas
        ref={canvasRef}
        style={{ display: 'none', position: 'absolute' }}
        width={Math.round(imgWidth * dpr)}
        height={Math.round(imgHeight * dpr)}
      ></canvas>
    </>
  )
}
