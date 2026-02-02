// 🔁 CRUD Operations (Create, Read, Update, Delete)

// CRUD represents the four basic operations you perform on data in any application.

// Operation	Meaning	HTTP Method
// Create	Add new data	POST
// Read	Fetch data	GET
// Update	Modify data	PUT / PATCH
// Delete	Remove data	DELETE
// 🗄️ CRUD in SQL (Example: Users Table)
// ➕ Create
// INSERT INTO users (name, email)
// VALUES ('Niroj', 'niroj@gmail.com');

// 📖 Read
// SELECT * FROM users;

// SELECT * FROM users WHERE id = 1;

// ✏️ Update
// UPDATE users
// SET name = 'Niroj Shah'
// WHERE id = 1;

// ❌ Delete
// DELETE FROM users WHERE id = 1;

// 🍃 CRUD in NoSQL (MongoDB)
// ➕ Create
// db.users.insertOne({
//   name: "Niroj",
//   email: "niroj@gmail.com"
// });

// 📖 Read
// db.users.find();

// db.users.find({ _id: 1 });

// ✏️ Update
// db.users.updateOne(
//   { _id: 1 },
//   { $set: { name: "Niroj Shah" } }
// );

// ❌ Delete
// db.users.deleteOne({ _id: 1 });

// 🌐 CRUD in REST API (Node.js + Express)
// ➕ Create
// app.post("/users", (req, res) => {
//   res.send("User created");
// });

// 📖 Read
// app.get("/users", (req, res) => {
//   res.send("All users");
// });

// ✏️ Update
// app.put("/users/:id", (req, res) => {
//   res.send("User updated");
// });

// ❌ Delete
// app.delete("/users/:id", (req, res) => {
//   res.send("User deleted");
// });

// PUT vs PATCH (Very Important 🔥)
// PUT	PATCH
// Updates entire resource	Updates partial fields
// Requires full object	Only changed fields

// Example:

// PUT /users/1
// PATCH /users/1

// 🔐 CRUD + Authentication Example
// Action	Access
// Create user	Public
// Read user	Auth required
// Update user	Owner/Admin
// Delete user	Admin
// 🧠 Interview One-Liner

// “CRUD represents the four fundamental database operations—Create, Read, Update, and Delete—and maps directly to HTTP methods in RESTful APIs.”

// ⚠️ Common Interview Traps

// ❌ Using GET to delete data
// ❌ Using POST for updates
// ❌ Not validating input
// ❌ No authorization on Update/Delete