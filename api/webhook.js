export default function handler(request, response) {
  response.status(200);
  console.log(request);
  response.send(request.statusCode);
  alert('asd')
}
