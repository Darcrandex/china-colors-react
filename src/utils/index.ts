/**
 * @desc 保留小数点
 * @param num 原始值
 * @param [count] 小数位数
 */
export function toFixed(num = 0, count = 2) {
  if (typeof num !== 'number') {
    throw new Error("argument 'num' must be a Number")
  }
  if (typeof count !== 'number') {
    throw new Error("argument 'count' must be a Number")
  }

  const _c = Math.max(0, Math.min(32, count))
  return parseFloat(num.toFixed(_c))
}
