export default function handler(request, response) {
  response.status(200);
  
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    response.send(JSON.parse(data));
    res.end();
  });
}
