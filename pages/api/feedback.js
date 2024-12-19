// pages/api/feedback.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { feedback } = req.body;

    if (!feedback) {
      return res.status(400).json({ message: 'Отзыв обязателен.' });
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const message = `📣 *Новый отзыв:*\n\n${feedback}`;

    try {
      await axios.post(telegramUrl, {
        chat_id: TELEGRAM_CHANNEL_ID,
        text: message,
        parse_mode: 'Markdown',
      });

      return res.status(200).json({ message: 'Отзыв отправлен.' });
    } catch (error) {
      console.error('Ошибка при отправке отзыва в Telegram:', error.message);
      return res.status(500).json({ message: 'Не удалось отправить отзыв.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Метод ${req.method} не разрешен.`);
  }
}
