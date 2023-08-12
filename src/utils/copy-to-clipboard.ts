/**
 * @description 複製文本到剪貼板
 * @param text
 * @returns
 */
export function copyToClipboard(text: string) {
  return new Promise<void>((resolve, reject) => {
    try {
      window.navigator.clipboard.writeText(text)
      resolve()
    } catch (error) {
      console.log(error)
      reject()
    }
  })
}
