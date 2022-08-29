const axios = require('axios');
const TELEGRAM_TOKEN = '5748172921:AAHd3LaQzbaR_Psqych_iyHwrgTBnqYGIQw';

export default function handler(request, response) {
  response.status(200);  
  let data = '';

  request.on('data', chunk => {
    data += chunk;
  });

  request.on('end', () => {
    data = JSON.parse(data).message;
    axios.get(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${data.chat.id}&text=${data.text}`);
  });
}
