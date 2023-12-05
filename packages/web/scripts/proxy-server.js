const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Define your API server endpoint
const apiEndpoint = process.env.API_BASE_URL;

// Create a proxy for the API endpoint
const proxyMiddleware = createProxyMiddleware({
  target: apiEndpoint,
  changeOrigin: true, // Enable CORS bypass
  logLevel: "debug", // Set log level as needed
});

// Use the proxy middleware for incoming requests
app.use("/", proxyMiddleware);

// Start the server
const port = 4000; // Set the desired port

app.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});
