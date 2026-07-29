import http from 'node:http';
import crypto from 'node:crypto';

const PORT = 3000;
const API_SECRET_KEY = "cc106-super-secret-key";

let iotDevices = [
  { id: 1, name: "Temperature Sensor Alpha", status: "online" }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const isAuthorized = () => {
    const authHeader = req.headers['authorization'];
    return authHeader === `Bearer ${API_SECRET_KEY}`;
  };

  // GET /api/devices
  if (req.method === 'GET' && req.url === '/api/devices') {
    res.writeHead(200);
    res.end(JSON.stringify({
      success: true,
      data: iotDevices
    }));
    return;
  }

  // POST /api/devices
  if (req.method === 'POST' && req.url === '/api/devices') {

    if (!isAuthorized()) {
      res.writeHead(401);
      res.end(JSON.stringify({
        success: false,
        error: "Unauthorized: Invalid or missing secret token"
      }));
      return;
    }

    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const newDevice = JSON.parse(body);

      newDevice.id = iotDevices.length + 1;
      iotDevices.push(newDevice);

      res.writeHead(201);
      res.end(JSON.stringify({
        success: true,
        data: newDevice
      }));
    });

    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    success: false,
    error: "Not Found"
  }));
});

server.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});