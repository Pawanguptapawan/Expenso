// This file defines the schema for the Convex database.
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(), // restored original name
    imageUrl: v.optional(v.string()),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }),

    expenses:defineTable({
      description:v.string(),
      amount:v.number(),
      category:v.optional(v.string()),
      date:v.number(),//timestamp
      paidByUserId:v.id('users'),//reference to users table
      splittype:v.string(),//'equal' or 'unequal'
      splits:v.array(
        v.object({
          userId: v.id('users'),//reference to users table
          amount: v.number(),//amount owed by the user
          paid:v.boolean(),
        })
      ),
      groupId:v.optional(v.id('groups')),//undefined for one-on-one expenses
      createdBy:v.id('users'),//reference to users table


    }).index("by_group", ["groupId"])
    .index('by_user_and_group',['paidByUserId','groupId'])
    .index('by_data',['date']),


    groups:defineTable({
      name:v.string(),
      description:v.optional(v.string()),
      createdBy:v.id('users'), // reference to users table
      members:v.array(
        v.object({
          userId:v.id('users'), // reference to users table
          role:v.string(), // 'admin' or 'member'
          joinedAt:v.number(), // timestamp of when the user joined the group

        })
      ),
    }),

    settlements:defineTable({
      amount: v.number(),
      note: v.optional(v.string()),
      date: v.number(), // timestamp
      paidByUserId: v.id('users'), // reference to users table
      receivedByUserId: v.id('users'), // reference to users table
      groupId: v.optional(v.id('groups')), // undefined for one-on-one settlements
      relatedExpenseIds: v.optional(v.array(v.id('expenses'))), // reference to an expense if applicable
      createdBy:v.id('users'), // reference to users table


    }).index("by_group", ["groupId"])
    .index('by_user_and_group',['paidByUserId','groupId'])
    .index('by_receiver_and_group',['receivedByUserId','groupId'])
    .index('by_date',['date']),


    
});
