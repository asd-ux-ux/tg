export default function handler(request, response) {
  response.status(200);
  
  let data = '';
  request.on('data', chunk => {
    data += chunk;
  });
  request.on('end', () => {
    response.send(JSON.parse(data));
  });
}
