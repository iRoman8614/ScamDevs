// app/api/telegram/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message, telegram, phone } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            console.error("Ошибка: Переменные окружения Telegram не установлены!");
            return NextResponse.json({ success: false, message: 'Ошибка конфигурации сервера' }, { status: 500 });
        }

        const text = `<b>Новое сообщение:</b>\n\n<b>Имя:</b> ${name}\n<b>Telegram:</b> ${telegram}\n<b>Номер:</b> ${phone}\n<b>Email:</b> ${email}\n\n<b>Сообщение:</b>\n${message}`;
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
        const telegramResponse = await response.json();
        if (response.ok && telegramResponse.ok) {
            return NextResponse.json({ success: true, message: 'Сообщение отправлено!' });
        } else {
            console.error('Telegram API Error:', telegramResponse);
            return NextResponse.json({ success: false, message: `Ошибка при отправке сообщения: ${telegramResponse.description || 'Unknown error'}` }, { status: response.status });
        }
    } catch (error) {
        console.error('API Route Error:', error);
        if (error instanceof SyntaxError) {
            return NextResponse.json({ success: false, message: 'Invalid JSON body' }, { status: 400 });
        }
        return NextResponse.json({ success: false, message: 'Внутренняя ошибка сервера.' }, { status: 500 });
    }
}
