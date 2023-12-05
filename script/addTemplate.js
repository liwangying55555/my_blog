;(async () => {
  try {
    const dayjs = require('dayjs')
    const inquirer = require('inquirer')
    const fs = require('fs')
    const path = require('path')
    const rootPath = path.resolve(process.cwd(), './docs')

    // 1、选择分类
    const choices = outDirList(rootPath)
    const { dirName } = await inquirer.prompt([
      {
        name: 'dirName',
        type: 'list',
        message: '请选择文档分类：',
        choices,
      },
    ])

    // 2、填写文档名称
    let { docsName } = await inquirer.prompt([
      {
        name: 'docsName',
        message: '请输入新增的文档名称',
        type: 'input',
      },
    ])

    // 3、组合形成文件名
    const filesIdx = fs.readdirSync(dirName).length + 1
    const fileName = `${filesIdx < 10 ? '0' + filesIdx : filesIdx}.${docsName}`

    // 4、创建新文件
    const templatePath = path.join(process.cwd(), 'script/template.md')
    const destPath = path.join(dirName, fileName + '.md')
    fs.copyFileSync(templatePath, destPath)

    // 5、读取文件,修改变量部分
    const data = fs
      .readFileSync(destPath)
      .toString()
      .replace('${title}', docsName)
      .replace('${date}', dayjs().format('YYYY-MM-DD HH:mm:ss'))
      .replace('${permalink}', getRandomCode())
    // 6、写入文件
    fs.writeFileSync(destPath, data)

    console.log(`${fileName}.md 创建成功`)
  } catch (error) {
    throw error
  }
})()

/**
 * 查找文件夹，后缀名称不为md的名称
 * @param {string} dir 文档路径
 * @returns {array} list
 */
function outDirList(dir) {
  const path = require('path')
  const fs = require('fs')
  let list = []
  const isRuleFiles = /^\d{2}\..*/

  // 读取一级目录
  fs.readdirSync(dir)
    .filter((_dir) => isRuleFiles.test(_dir))
    .forEach((m) => {
      // 判断二级目录是否还有子目录
      if (!m.endsWith('.md')) {
        const targetPath = path.join(dir, m)
        const innerDirList = fs.readdirSync(targetPath).filter((_dir) => !_dir.endsWith('.md'))
        if (innerDirList.length) {
          list = list.concat(outDirList(targetPath))
        } else {
          list.push({
            name: m.slice(3),
            value: targetPath,
          })
        }
      }
    })
  return list
}

function getRandomCode(len = 8) {
  const codeStr = '0123456789qwertyuiopasdfghjklzxcvbnm'
  let str = ''
  for (let i = 0; i < len; i++) {
    const index = Math.floor(Math.random() * codeStr.length)
    str += codeStr.slice(index, index + 1)
  }
  return str
}
