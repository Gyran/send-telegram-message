const sendTelegramMessage = async (botToken, chatId, message, options = {}) => {
  const baseUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const data = {
    chat_id: chatId,
    text: message,
    ...options,
  };

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.ok;
};

export default sendTelegramMessage;
