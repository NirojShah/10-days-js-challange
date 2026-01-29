// 🌐 CORS (Cross-Origin Resource Sharing)
// 🧠 What is CORS?

// CORS is a browser security mechanism that controls whether a web page can request resources from a different origin.

// It protects users from malicious websites making unauthorized requests.

// 🌍 What is an Origin?

// An origin = combination of:

// protocol + domain + port


// Example:

// http://localhost:3000

// Different origin if ANY of these change:

// Protocol → http vs https

// Domain → example.com vs api.example.com

// Port → 3000 vs 4000

// ❌ Same-Origin Policy (Default Browser Rule)

// By default:

// Browser blocks cross-origin requests

// Example:

// Frontend: http://localhost:3000
// Backend:  http://localhost:5000


// ❌ Browser blocks the response

// ✅ CORS Solves This

// CORS allows the server to say:

// “I trust this origin, let it access my API.”

// 🔁 Basic CORS Flow

// Browser sends request

// Server sends CORS headers

// Browser checks headers

// If allowed → response is accessible

// 🧾 Important CORS Headers
// 1️⃣ Allow Origin
// Access-Control-Allow-Origin: http://localhost:3000


// or (dangerous):

// Access-Control-Allow-Origin: *

// 2️⃣ Allow Methods
// Access-Control-Allow-Methods: GET, POST, PUT, DELETE

// 3️⃣ Allow Headers
// Access-Control-Allow-Headers: Content-Type, Authorization

// 4️⃣ Allow Credentials
// Access-Control-Allow-Credentials: true


// Required when:

// Cookies

// Authorization headers

// ⚠️ Simple Request vs Preflight Request
// 🟢 Simple Request

// No preflight if:

// Method: GET, POST, HEAD

// Headers: basic headers only

// No credentials

// Browser directly sends request.

// 🔴 Preflight Request (OPTIONS) ⭐⭐⭐

// Triggered when:

// Custom headers (Authorization)

// Methods like PUT, DELETE

// Cookies included

// Browser sends:
// OPTIONS /api


// Server must respond:

// Access-Control-Allow-Origin: http://localhost:3000
// Access-Control-Allow-Methods: GET, POST
// Access-Control-Allow-Headers: Authorization


// Then actual request is sent.

// 🧠 Why Preflight Exists?

// To ask permission first before sending sensitive data.

// 🧪 Example: Express CORS Setup
// 📦 Install
// npm install cors

// ✅ Basic Usage
// const cors = require("cors");

// app.use(cors());

// 🔐 Secure CORS (Recommended)
// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));

// 🍪 CORS with Cookies (IMPORTANT)

// Frontend:

// fetch("/api", {
//   credentials: "include"
// });


// Backend:

// app.use(cors({
//   origin: "http://localhost:3000",
//   credentials: true
// }));


// ⚠️ Cannot use:

// Access-Control-Allow-Origin: *


// with credentials

// ❌ Common CORS Mistakes

// Missing credentials: true

// Using * with cookies

// Forgetting OPTIONS handling

// Thinking CORS is backend-only (it's browser-enforced)

// 🧠 CORS vs Postman

// Postman ❌ ignores CORS

// Browsers ✅ enforce CORS

// That’s why APIs work in Postman but fail in browser.

// 🔐 CORS is NOT Security

// ❗ CORS does NOT protect backend
// ❗ Backend must still validate auth

// CORS only protects browsers

// 🧠 Interview One-Liner

// CORS is a browser-enforced security mechanism that allows servers to control which origins can access their resources.

// 🔑 Summary (Your Style)

// Browser blocks cross-origin by default

// Server enables access using headers

// Preflight checks permissions

// Cookies need credentials config

// CORS ≠ backend security