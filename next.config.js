/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  
  env: {
    secretKey: "$2y$10$TJgfqgYaFBbZ5445Up0Hu5BPQxbQQOXjLdyAxhDZYKHB0fUvh",
  },

}

module.exports = nextConfig
