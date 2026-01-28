// 🔐 Password Hashing & bcrypt (In Detail)
// 🧠 Why Password Hashing is Needed

// ❌ Storing passwords as plain text is dangerous
// If DB leaks → all user accounts are compromised

// ✔️ Hashing converts a password into an irreversible string

// You can’t get the original password back.

// 🔁 Hashing vs Encryption (IMPORTANT)
// Hashing	Encryption
// One-way	Two-way
// Cannot decrypt	Can decrypt
// Used for passwords	Used for data
// Example: bcrypt	Example: AES

// 👉 Passwords must be hashed, NOT encrypted

// 🧩 What is bcrypt?

// bcrypt is a password-hashing algorithm that:

// ✔️ Uses salt
// ✔️ Is slow by design
// ✔️ Protects against brute-force attacks
// ✔️ Industry standard

// 🧂 What is Salt?

// A salt is random data added to the password before hashing.

// password + salt → hash


// This prevents:

// Rainbow table attacks

// Same passwords producing same hashes

// bcrypt automatically handles salt for you.

// 🔄 bcrypt Workflow
// 🔐 Signup (Hashing)

// User enters password

// Generate salt

// Hash password + salt

// Store hash in DB

// 🔓 Login (Verification)

// User enters password

// Compare entered password with stored hash

// bcrypt returns true / false

// 🧪 Example Code (Node.js)
// 📦 Install
// npm install bcrypt

// 🧑‍💻 Hash Password (Signup)
// const bcrypt = require("bcrypt");

// const saltRounds = 10;

// const hashedPassword = await bcrypt.hash(password, saltRounds);


// Stored in DB:

// $2b$10$QzPpX...

// 🔍 Compare Password (Login)
// const isMatch = await bcrypt.compare(password, user.password);

// if (!isMatch) {
//   throw new Error("Invalid credentials");
// }


// ✔️ bcrypt extracts salt from hash
// ✔️ Re-hashes input password
// ✔️ Compares securely

// ⚙️ Salt Rounds (Cost Factor)
// bcrypt.hash(password, saltRounds);

// Rounds	Security	Speed
// 8	Low	Fast
// 10	✅ Balanced	Moderate
// 12	High	Slow

// 📌 Recommended: 10–12

// 🧠 Why bcrypt is Slow (On Purpose)

// Slows brute-force attacks

// One password guess = expensive computation

// Attackers can’t try millions per second

// 🔥 Why NOT use MD5 / SHA?

// ❌ Fast
// ❌ No salt
// ❌ Easily cracked

// ✔️ bcrypt / argon2 / scrypt only

// 🛑 Common Mistakes

// ❌ Storing plain password
// ❌ Re-hashing during compare
// ❌ Using low salt rounds
// ❌ Using SHA256 for passwords

// 🔐 bcrypt vs Argon2
// Feature	bcrypt	Argon2
// Industry usage	Very high	Increasing
// GPU resistance	Moderate	Strong
// Recommendation	✅ Safe	✅ Best (modern)
// 🧠 Interview One-Liner

// bcrypt is a secure password-hashing algorithm that uses salting and adaptive cost to protect against brute-force and rainbow table attacks.

// 🔑 End-to-End Flow (Real App)

// User signs up → password hashed

// Hash stored in DB

// User logs in → password compared

// JWT issued if valid