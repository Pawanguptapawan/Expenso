// import { defineSchema, defineTable } from 'convex/server';
// import { v } from 'convex/values';

// export default defineSchema({
//   users: defineTable({
//     name: v.string(),
//     email: v.string(),
//     tokenIdentifier: v.string(),
//     imageUrl: v.optional(v.string()),
//   })
//     .index('by_token', ['tokenIdentifier'])
//     .index('by_email', ['email'])
//     .searchIndex('search_name', {
//       searchField: 'name',
//     })
//     .searchIndex('search_email', {
//       searchField: 'email',
//     }),
// });
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    token: v.string(), // renamed from tokenIdentifier
    imageUrl: v.optional(v.string()),
  })
    .index("by_token", ["token"]) // now indexing 'token' field
    .index("by_email", ["email"])
    .searchIndex("search_name", { searchField: "name" })
    .searchIndex("search_email", { searchField: "email" }),
});
