const moduleAlias = require('module-alias')
const path = require('path')

if (process.env.NODE_ENV === 'development') {
  moduleAlias.addAliases({
    '@': path.resolve(__dirname, 'src')
  })
} else {
  moduleAlias.addAliases({
    '@': path.resolve(__dirname, 'dist')

  })
}
