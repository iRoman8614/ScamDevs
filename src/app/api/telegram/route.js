// app/api/telegram/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
        }
        const bt = '7744594697:AAHw3oSORx-BXn-ATVusYI0lFb2TGAEhIPk';
        const chatId = '-1002447898643';
        const text = `<b>Новое сообщение:</b>\n\n<b>Имя:</b> ${name}\n<b>Email:</b> ${email}\n\n<b>Сообщение:</b>\n${message}`;
        const response = await fetch(
            `https://api.telegram.org/bot${bt}/sendMessage`,
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
