import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
})

export const maintenance = sqliteTable('maintenance', {
  user: text('user')
    .primaryKey()
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  wof: text('wof'),
  wofDue: text('wofDue'),
  rego: text('rego'),
  regoDue: text('regoDue'),
  averageKm: integer('averageKm'),
})

export const consumables = sqliteTable('consumables', {
  id: integer('id').primaryKey(),
  name: text('name'),
  replaced: text('replaced'),
  due: text('due'),
  km: integer('km'),
  user: text('user')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export type InsertUser = typeof users.$inferInsert
export type SelectUser = typeof users.$inferSelect

export type InsertPost = typeof maintenance.$inferInsert
export type SelectPost = typeof maintenance.$inferSelect
