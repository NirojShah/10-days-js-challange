// 🔒 Rate Limiting (in detail)
// What is Rate Limiting?

// Rate limiting is a technique used to control how many requests a client can make to a server within a given time window.

// In simple words:

// “Don’t let one user or bot hit my server too many times too fast.”

// ❓ Why do we need Rate Limiting?

// Without rate limiting, your API is vulnerable to:

// Brute-force attacks (password guessing)

// DDoS attacks

// API abuse (free APIs being spammed)

// Server overload

// Unfair usage (one user eats all resources)

// Example:

// Login API without rate limit:
// Attacker → 100,000 password attempts per minute 😵


// With rate limiting:

// Max 5 requests per minute → Attack blocked 🚫

// 🧠 How Rate Limiting Works (Conceptually)

// Identify the client

// IP address

// User ID

// API key

// Token

// Track request count

// Count how many requests are made

// Apply rules

// Allow or block based on limits

// ⏱️ Common Rate Limiting Strategies
// 1. Fixed Window

// Time is divided into fixed chunks (e.g., 1 minute)

// Count resets at the end of the window

// Example:

// Limit: 100 requests per minute
// 00:00–00:59 → allowed
// 01:00 → counter resets


// ❌ Problem: Burst traffic

// User can send 100 requests at 00:59 and 100 more at 01:00

// 2. Sliding Window

// Uses timestamps instead of fixed buckets

// More accurate

// Example:

// Last 60 seconds → max 100 requests


// ✅ Prevents bursts
// ❌ Slightly more expensive to calculate

// 3. Token Bucket (Very popular)

// Bucket has tokens

// Each request consumes 1 token

// Tokens refill at a fixed rate

// Example:

// Bucket size: 10
// Refill rate: 1 token/sec


// If bucket is empty → request blocked ❌

// ✅ Allows small bursts
// ✅ Smooth traffic control

// 4. Leaky Bucket

// Requests are processed at a constant rate

// Extra requests are queued or dropped

// Think of it like:

// Water leaking at fixed speed 💧

// 🧩 Where Rate Limiting is Implemented
// 1. Application Level (Node.js / Express)

// Most common for APIs

// 2. Reverse Proxy

// Nginx

// Cloudflare

// AWS API Gateway

// 3. CDN / WAF

// Best for large-scale protection

// 🧪 Rate Limiting in Node.js (Express Example)

// Using express-rate-limit:

// import rateLimit from "express-rate-limit";

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // max requests per IP
//   message: "Too many requests, please try again later"
// });

// app.use("/api", limiter);

// What happens here?

// One IP → max 100 requests per 15 minutes

// After limit → 429 Too Many Requests

// 🔑 Rate Limiting with Authentication
// Public APIs

// Limit by:

// IP address

// Authenticated APIs

// Limit by:

// User ID

// JWT subject (sub)

// API key

// Example:

// /login → strict rate limit
// /api/data → moderate
// /api/upload → very strict

// 📡 HTTP Status Codes Used
// Code	Meaning
// 429	Too Many Requests
// 403	Forbidden (sometimes)

// Headers often returned:

// X-RateLimit-Limit: 100
// X-RateLimit-Remaining: 0
// Retry-After: 60

// 🔐 Security Best Practices

// Stricter limits for auth routes

// /login

// /forgot-password

// Different limits per route

// Read APIs → higher limit

// Write APIs → lower limit

// Combine with

// CAPTCHA

// JWT authentication

// IP blocking

// ⚠️ Common Mistakes

// ❌ Only rate limit frontend
// ❌ No limit on login APIs
// ❌ Using only IP (breaks behind NAT)
// ❌ Not handling distributed attacks

// 🧠 Real-World Example (Interview-ready)

// “Rate limiting is used to protect APIs from abuse by restricting the number of requests a client can make in a given time.
//  In Node.js, it is commonly implemented using middleware like express-rate-limit. It helps prevent brute-force attacks, DDoS 
// attempts, and ensures fair resource usage.”