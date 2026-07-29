const API_URL = 'http://localhost:3000/api/devices';
const SECRET_TOKEN = 'cc106-super-secret-key';

async function runDemo() {

  console.log("1. Fetching public devices list...");

  const getRes = await fetch(API_URL);
  const getData = await getRes.json();

  console.log("GET Response:", getData);

  console.log("\n2. Attempting to add a device WITHOUT token...");

  const unauthorizedRes = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Unauthorized Device'
    })
  });

  console.log("Status Code:", unauthorizedRes.status);

  console.log("\n3. Adding a device WITH authorization token...");

  const authorizedRes = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${SECRET_TOKEN}`
    },
    body: JSON.stringify({
      name: 'Edge AI Camera'
    })
  });

  const postData = await authorizedRes.json();

  console.log("POST Response:", postData);
}

runDemo();