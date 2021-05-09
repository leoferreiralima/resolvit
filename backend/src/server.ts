import 'module-alias/register'
import '@/config/env'
import '@/validators'

import express from 'express'

import adminRoutes from '@/admin/routes'
import routes from '@/routes'

const app = express()

app.use('/admin',adminRoutes)
app.use(routes)

app.listen(process.env.PORT || 3333,() => console.log('Server started'))
