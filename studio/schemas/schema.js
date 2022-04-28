import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userSchema } from './userSchema'
import { ridesSchema } from './ridesSchema'
import { tripSchema } from './tripSchema'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([userSchema, ridesSchema, tripSchema]),
})

//after all this we need to go to the studio folder and then "sanity start" then go to localhost3333
//  from here also we can access the database
