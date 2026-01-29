// 🍪 Cookies vs 🗄️ localStorage

// Both are used to store data in the browser, but they are very different in purpose and security.

// 1️⃣ Cookies
// 📌 What are Cookies?

// Cookies are small pieces of data stored in the browser and automatically sent to the server with every HTTP request.

// 🔧 How Cookies Work
// Set-Cookie: token=abc123; HttpOnly; Secure;


// Browser:

// Stores cookie

// Sends it automatically with requests

// 🔐 Cookie Security Flags
// Flag	Meaning
// HttpOnly	JS cannot access (XSS protection)
// Secure	HTTPS only
// SameSite	Prevents CSRF
// Max-Age / Expires	Expiration
// ✅ Pros of Cookies

// ✔️ Automatically sent with requests
// ✔️ Can be HttpOnly (safe from XSS)
// ✔️ Best for authentication
// ✔️ Supported everywhere

// ❌ Cons of Cookies

// ❌ Limited size (~4KB)
// ❌ Sent on every request (overhead)
// ❌ CSRF risk (if not configured)

// 2️⃣ localStorage
// 📌 What is localStorage?

// localStorage stores key-value pairs only in the browser.

// localStorage.setItem("token", "abc123");

// 🔧 How localStorage Works

// Not sent automatically

// JS must manually attach it to headers

// fetch("/api", {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`
//   }
// });

// ✅ Pros of localStorage

// ✔️ Larger size (~5–10MB)
// ✔️ Simple API
// ✔️ No automatic request overhead

// ❌ Cons of localStorage

// ❌ Accessible by JavaScript (XSS risk)
// ❌ Cannot be HttpOnly
// ❌ No built-in expiration

// 🔐 Security Comparison (VERY IMPORTANT ⭐⭐⭐)
// Attack	Cookies	localStorage
// XSS	✅ Safe (HttpOnly)	❌ Vulnerable
// CSRF	❌ Vulnerable	✅ Safe
// Auto send	✅ Yes	❌ No
// 🧠 Best Practice (Modern Apps)
// ✅ JWT in HttpOnly Cookie (BEST)
// res.cookie("token", jwt, {
//   httpOnly: true,
//   secure: true,
//   sameSite: "strict"
// });


// Why?

// Protected from XSS

// Works seamlessly with backend

// Secure when configured properly

// ⚠️ When localStorage is Used

// Internal tools

// Non-sensitive data

// Tokens in mobile/web hybrid apps (with care)

// ❗ CSRF vs XSS (Quick Clarification)

// XSS steals tokens from JS → affects localStorage

// CSRF abuses auto-sent cookies

// 👉 Cookies need SameSite / CSRF tokens

// 🧠 Interview One-Liners

// Cookies:

// Cookies are browser storage that are automatically sent with HTTP requests and can be secured using HttpOnly and Secure flags.

// localStorage:

// localStorage is browser storage accessible via JavaScript and should not be used for sensitive data like auth tokens.

// 🔑 Final Summary

// Cookies = secure auth storage

// localStorage = simple client storage

// JWT + HttpOnly cookie = recommended

// XSS > CSRF (in modern apps)