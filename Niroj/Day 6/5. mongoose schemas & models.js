// ✅ Mongoose Schemas & Models (Detailed Explanation)
// 📌 What is Mongoose?

// Mongoose is an ODM library.

// ODM = Object Data Modeling

// It provides a structured way to work with MongoDB:

// Schema definitions

// Validations

// Middleware (hooks)

// Relationships (populate)

// Easy CRUD methods

// MongoDB is schema-less, but Mongoose helps enforce structure.

// 1️⃣ What is a Schema?
// ✅ Schema = Blueprint of a Document

// A schema defines:

// Fields

// Data types

// Validation rules

// Default values

// Relationships

// Example Schema
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number
// });


// This means every user document should have:

// name (string)

// email (string)

// age (number)

// Schema Defines Document Structure

// MongoDB allows:

// { name: "Niroj", randomField: 100 }


// But Mongoose prevents unwanted fields if strict mode is enabled.

// 2️⃣ Schema Types (Important)

// Mongoose supports many types:

// Type	Example
// String	"Niroj"
// Number	25
// Boolean	true
// Date	Date.now()
// Array	["a", "b"]
// Object	{ city: "Delhi" }
// ObjectId	Reference another document
// Example
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   isActive: Boolean,
//   createdAt: Date,
//   skills: [String],
//   address: {
//     city: String,
//     zip: Number
//   }
// });

// 3️⃣ Schema Validation (Very Important)

// Validation ensures correct data is saved.

// Required Fields
// email: {
//   type: String,
//   required: true
// }

// Unique Fields
// email: {
//   type: String,
//   unique: true
// }

// Min/Max Validation
// age: {
//   type: Number,
//   min: 18,
//   max: 60
// }

// Custom Validation
// email: {
//   type: String,
//   validate: {
//     validator: function (value) {
//       return value.includes("@");
//     },
//     message: "Invalid email"
//   }
// }

// 4️⃣ Default Values
// role: {
//   type: String,
//   default: "user"
// }


// If role is not given → it becomes "user" automatically.

// 5️⃣ Schema Options
// timestamps

// Automatically adds:

// createdAt

// updatedAt

// const userSchema = new mongoose.Schema(
//   {
//     name: String
//   },
//   { timestamps: true }
// );

// strict mode

// If strict = true, extra fields are ignored.

// 6️⃣ What is a Model?
// ✅ Model = Schema + MongoDB Collection

// A model is used to perform CRUD operations.

// Creating a Model
// const User = mongoose.model("User", userSchema);


// Now User represents the users collection.

// 7️⃣ CRUD with Models
// Create Document
// const user = await User.create({
//   name: "Niroj",
//   email: "niroj@gmail.com",
//   age: 24
// });

// Read Documents
// Find all
// const users = await User.find();

// Find one
// const user = await User.findOne({ email: "niroj@gmail.com" });

// Find by ID
// const user = await User.findById(id);

// Update Document
// await User.updateOne(
//   { email: "niroj@gmail.com" },
//   { $set: { age: 30 } }
// );

// Delete Document
// await User.deleteOne({ email: "niroj@gmail.com" });

// 8️⃣ Relationships in Mongoose (ObjectId References)

// MongoDB doesn't have joins, but Mongoose supports references.

// Example: User and Orders
// Order Schema
// const orderSchema = new mongoose.Schema({
//   product: String,
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User"
//   }
// });


// Here userId references User model.

// Populate (Join-like feature)
// const orders = await Order.find().populate("userId");


// Now you get full user data inside order.

// 9️⃣ Schema Middleware (Hooks)

// Middleware runs automatically before/after operations.

// Pre Save Hook (Password Hashing)
// userSchema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });


// Used for:

// hashing passwords

// logging

// validations

// Post Hook
// userSchema.post("save", function (doc) {
//   console.log("User saved:", doc);
// });

// 🔟 Instance Methods vs Static Methods
// Instance Method (on document)
// userSchema.methods.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };


// Usage:

// const user = await User.findOne();
// console.log(user.getFullName());

// Static Method (on model)
// userSchema.statics.findByEmail = function (email) {
//   return this.findOne({ email });
// };


// Usage:

// const user = await User.findByEmail("niroj@gmail.com");

// 1️⃣1️⃣ Virtual Fields

// Virtuals are not stored in DB.

// userSchema.virtual("isAdult").get(function () {
//   return this.age >= 18;
// });

// 1️⃣2️⃣ Common Interview Questions
// Q1: Schema vs Model?
// Schema	Model
// Blueprint	Collection interface
// Defines structure	Performs CRUD
// No DB interaction	Talks to MongoDB
// Q2: What is populate?

// It fetches referenced documents like SQL JOIN.

// Q3: Why use Mongoose?

// Validation, middleware, relationships, cleaner code.

// Q4: What are hooks used for?

// Password hashing, auditing, cleanup.

// ✅ Best Practice Structure (MERN Projects)
// src/
//  ├── models/
//  │    ├── User.js
//  │    ├── Order.js
//  ├── controllers/
//  ├── routes/
//  ├── config/db.js

// 🎯 Final Summary (One Line)

// Schema defines structure, Model provides DB operations, and Mongoose makes MongoDB organized and production-ready.