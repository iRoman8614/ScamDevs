export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const botToken = '7744594697:AAHw3oSORx-BXn-ATVusYI0lFb2TGAEhIPk';
        const chatId = "-4522962405";

        const text = `Новое сообщение:\n\nИмя: ${name}\n\nEmail: ${email}\n\nСообщение: ${message}`;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text,
                        parse_mode: 'HTML'
                    }),
                }
            );

            if (response.ok) {
                res.status(200).json({ success: true, message: 'Сообщение отправлено!' });
            } else {
                res.status(500).json({ success: false, message: 'Ошибка при отправке сообщения.' });
            }
        } catch (error) {
            res.status(500).json({ success: false, message: 'Ошибка сети при отправке сообщения.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
