// 根据使用到的字符集重新生成字体文件，大幅度减少字体文件大小
// https://github.com/ecomfe/fontmin

import Fontmin from 'fontmin'
import data from './src/data/zh-colors-sort.json' assert { type: 'json' }

// 所有用到字符
const baseChars = '中國傳統色'
const colorNameChars = Array.from(new Set(data.map((v) => v.name))).join('')
const allChars = baseChars.concat(colorNameChars)

function main() {
  const fontmin = new Fontmin()

  fontmin
    // 最原始的中文字体文件（路径）
    .src('./public/fonts/qiji-fallback.ttf')
    // 输入目录文件夹
    .dest('./dist')
    .use(
      Fontmin.glyph({
        text: allChars,
        hinting: false,
      })
    )
    // 转成 woff2 进一步压缩字体大小
    .use(Fontmin.ttf2woff2())

  fontmin.run(function (err, files) {
    if (err) {
      throw err
    }

    console.log('ok \n', files[0])
  })
}

main()
