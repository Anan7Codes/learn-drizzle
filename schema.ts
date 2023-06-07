import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
 
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const userRelations = relations(users, ({ many }) => ({
    todos: many(todos)
}))

export const todos = pgTable('todos', {
    id: serial('id').primaryKey(),
    title: text('title'),
    description: text('description'),
    completed: text('completed'),
    userId: integer('user_id').references(() => users.id),
});

export const todoRelations = relations(todos, ({ one }) => ({
    user: one(users, {
        fields: [todos.id],
        references: [users.id]
    })
}))