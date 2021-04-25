import Validator from 'validatorjs'

import { exists, unique, minAge } from './custom'

Validator.registerAsync('exists',exists,"The entry :value don't exists.")

Validator.registerAsync('unique',unique,'The :attribute is not unique.')

Validator.register('min_age',minAge,'The minimum age is :min_age.')
