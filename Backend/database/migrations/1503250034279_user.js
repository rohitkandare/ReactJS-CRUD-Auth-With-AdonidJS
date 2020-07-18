'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.string('name', 80).notNullable()
      table.string('phone', 80).notNullable()
      table.string('website', 80).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).defaultTo("123456789")
      table.integer('id_delete', 60).defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
