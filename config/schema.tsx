import { integer, pgTable, varchar, text, json } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  credits : integer()
});



export const sessionChatTable = pgTable("sessionChatTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sessionId : varchar({ length: 255 }).notNull(),
  notes : text(),
  createdOn: varchar({ length: 255 }).notNull(),
  createdBy: varchar({ length: 255 }).notNull().unique(),
  report : json(),
  conversation : json(),
  selectedDoctor : json() 
});
