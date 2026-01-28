// 🔐 JWT Authentication Flow (In Detail)
// 🧠 What is JWT?

// JWT (JSON Web Token) is a stateless authentication mechanism used to securely transmit user information between client and server.

// Server does NOT store session data — the token itself carries the proof.

// 📦 JWT Structure

// A JWT has 3 parts, separated by dots:

// HEADER.PAYLOAD.SIGNATURE


// Example:

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// .eyJ1c2VySWQiOjEsImlhdCI6MTY5...
// .HMACSHA256(...)

// 1️⃣ Header

// Contains:

// {
//   "alg": "HS256",
//   "typ": "JWT"
// }


// Algorithm used for signing

// Token type

// 2️⃣ Payload (Claims)

// Contains user data:

// {
//   "userId": 1,
//   "email": "test@gmail.com",
//   "role": "admin",
//   "exp": 1699999999
// }


// ⚠️ NOT encrypted (Base64 encoded)
// Never store passwords!

// 3️⃣ Signature

// Created using:

// HMACSHA256(
//   base64(header) + "." + base64(payload),
//   SECRET_KEY
// )


// ✔️ Prevents tampering
// ✔️ Verifies authenticity

// 🔄 JWT Authentication Flow (Step-by-Step)
// 1️⃣ User Login

// User sends credentials:

// POST /login
// {
//   "email": "user@gmail.com",
//   "password": "123456"
// }

// 2️⃣ Server Validates User

// Server:

// Checks email

// Verifies hashed password

// If valid → generate JWT

// 3️⃣ Server Generates JWT
// const jwt = require("jsonwebtoken");

// const token = jwt.sign(
//   { userId: user.id, role: user.role },
//   process.env.JWT_SECRET,
//   { expiresIn: "1h" }
// );

// 4️⃣ Token Sent to Client

// Response:

// {
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
// }

// 5️⃣ Client Stores Token

// Common options:

// ✅ HTTP-Only Cookie (BEST)

// ⚠️ localStorage (XSS risk)

// ⚠️ sessionStorage

// 6️⃣ Client Sends Token with Requests

// For protected routes:

// Authorization: Bearer <token>

// 7️⃣ Auth Middleware Verifies Token ⭐⭐⭐
// function auth(req, res, next) {
//   const token = req.headers.authorization?.split(" ")[1];

//   if (!token) return res.status(401).json({ message: "No token" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token" });
//   }
// }

// 8️⃣ Access Granted

// Controller uses:

// req.user.userId

// 🔁 Token Expiration Flow

// Token expires (exp)

// Server rejects request

// Client must:

// Login again OR

// Use refresh token

// 🔄 Access Token vs Refresh Token ⭐⭐⭐
// 🔑 Access Token

// Short lived (15m–1h)

// Sent with every request

// 🔄 Refresh Token

// Long lived (7–30 days)

// Used to get new access token

// Flow:

// Access token expires

// Client sends refresh token

// Server validates refresh token

// Issues new access token

// 🧠 Stateless Nature (Important)

// ✔️ Server does NOT store sessions
// ✔️ Horizontal scaling is easy
// ✔️ Works well with microservices

// ❌ JWT Weaknesses

// Token revocation is hard

// Payload is readable

// Token theft risk

// Mitigations:

// Short expiry

// HTTPS

// HttpOnly cookies

// Token rotation

// 🔐 Where JWT is Used

// REST APIs

// Mobile apps

// SPAs (React, Angular)

// Microservices

// 🧠 Interview One-Liner

// JWT authentication works by issuing a signed token after successful login, which the client sends with each request and the server verifies without storing session data.

// ⚡ Common Interview Questions
// Q: Why JWT over sessions?

// ✔️ Stateless
// ✔️ Scalable
// ✔️ No server memory

// Q: Can JWT be hacked?

// ❌ If secret leaks or stored insecurely

// 🔑 Summary (Your Style)

// JWT = stateless auth

// Token = header + payload + signature

// Stored client-side

// Verified via middleware

// Access + refresh tokens




// 1️⃣ JWT vs Sessions (Very Important)
// 🔐 Session-Based Authentication

// How it works:

// User logs in

// Server creates a session

// Session ID is stored in:

// Server memory / DB / Redis

// Session ID sent to client via cookie

// Client sends cookie on every request

// Server looks up session → validates user

// Flow:

// Client → Session ID → Server → Session Store

// ✅ Pros

// Easy to revoke sessions

// More secure for traditional apps

// Sensitive data never sent to client

// ❌ Cons

// Server must store sessions

// Hard to scale (needs shared store)

// Not ideal for microservices

// 🔑 JWT-Based Authentication

// How it works:

// User logs in

// Server creates a JWT

// Token sent to client

// Client sends token with every request

// Server verifies token signature

// Flow:

// Client → JWT → Server (no DB lookup)

// ✅ Pros

// Stateless

// Highly scalable

// Works great with microservices & APIs

// ❌ Cons

// Hard to revoke tokens

// Token theft risk

// Payload is readable

// ⚔️ JWT vs Session (Comparison)
// Feature	Sessions	JWT
// Storage	Server	Client
// Stateless	❌ No	✅ Yes
// Scalability	❌ Hard	✅ Easy
// Revocation	✅ Easy	❌ Hard
// Best for	Traditional apps	APIs / SPAs
// 🧠 Interview One-Liner

// Sessions are stateful and stored on the server, while JWT is stateless and stores authentication data inside a signed token on the client.

// 2️⃣ Cookie-Based Authentication

// Cookie-based auth is a transport mechanism, not a replacement for JWT or sessions.

// 🍪 What is Cookie-Based Auth?

// Authentication data (session ID or JWT) is stored in a cookie and automatically sent with every request.

// 🧩 Cookie + Session (Classic)

// Cookie stores session ID

// Server stores session data

// Set-Cookie: sessionId=abc123; HttpOnly;

// 🧩 Cookie + JWT (Modern & Secure ⭐⭐⭐)

// Cookie stores JWT

// Server verifies JWT

// Set-Cookie: token=jwt_here; HttpOnly; Secure;

// 🔒 Important Cookie Flags
// res.cookie("token", jwt, {
//   httpOnly: true,
//   secure: true,
//   sameSite: "strict"
// });

// Flag	Purpose
// HttpOnly	Prevents XSS
// Secure	HTTPS only
// SameSite	Prevents CSRF
// ❗ Why Cookies Over localStorage?
// Storage	Risk
// localStorage	❌ XSS
// Cookies (HttpOnly)	✅ Safer
// 🧠 Interview Line

// Cookie-based authentication stores auth data in cookies, allowing automatic transmission with requests and improved security using HttpOnly and Secure flags.

// 3️⃣ Role-Based Authorization (RBAC)

// Authentication ❌ ≠ Authorization

// Authentication → Who are you?

// Authorization → What can you do?

// 🎭 What is Role-Based Authorization?

// Access is granted based on roles like:

// admin

// user

// manager

// 🧠 Flow with JWT

// User logs in

// JWT contains role

// {
//   "userId": 1,
//   "role": "admin"
// }


// Middleware checks role

// 🧱 Role Middleware Example
// function authorizeRole(role) {
//   return (req, res, next) => {
//     if (req.user.role !== role) {
//       return res.status(403).json({ message: "Forbidden" });
//     }
//     next();
//   };
// }


// Usage:

// app.get("/admin", auth, authorizeRole("admin"), controller);

// 📌 Common Patterns

// RBAC (Role-Based)

// ABAC (Attribute-Based)

// Permission-based (read, write, delete)

// 🧠 Interview One-Liner

// Role-based authorization restricts access to resources based on user roles after successful authentication.

// 🔑 Final Summary (Crisp)

// Sessions → server-stored auth

// JWT → stateless token-based auth

// Cookies → secure way to store tokens

// RBAC → controls access after login