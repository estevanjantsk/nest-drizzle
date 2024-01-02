import { integer, serial, text, pgSchema } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const mySchema = pgSchema('my_schema');

export const users = mySchema.table('user', {
  id: serial('id').primaryKey(),
  email: text('email').unique(),
  role_id: integer('role_id'),
});

export const user_role = mySchema.table('user_role', {
  id: serial('id').primaryKey(),
  name: text('name'),
});

export const usersRelations = relations(users, ({ one }) => ({
  user_role: one(user_role, {
    fields: [users.role_id],
    references: [user_role.id],
  }),
}));
