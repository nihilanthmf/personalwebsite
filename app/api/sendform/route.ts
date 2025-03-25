import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: any) {
  const body = await request.json();

  console.log("body :>> ", body);

  const botToken = process.env.TELEGRAM_BOT_ID;
  const chatId = "-1002255586705";

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  await axios.post(url, {
    chat_id: chatId,
    text: `Somebody wants to get in touch (artemymedvedev.com)!

Name: ${body.name}
Email: ${body.email}
Message: ${body.message}`,
  });

  try {
    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(
      "ERROR MOTHERFUCKER PLEASE NOTICE THIS telegram notification:>> ",
      error
    );
    return NextResponse.json({}, { status: 500 });
  }
}
