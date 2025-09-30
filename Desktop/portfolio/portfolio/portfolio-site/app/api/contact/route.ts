import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    // バリデーション
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: '必須フィールドが不足しています' },
        { status: 400 }
      )
    }

    // メールアドレスの検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '有効なメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // ここでメール送信処理を実装
    // 例: nodemailer, SendGrid, AWS SES などを使用
    
    // 開発環境ではコンソールに出力
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
    }

    // 本番環境では実際のメール送信サービスを使用
    // 例: SendGrid
    /*
    if (process.env.SENDGRID_API_KEY) {
      const sgMail = require('@sendgrid/mail')
      sgMail.setApiKey(process.env.SENDGRID_API_KEY)
      
      const msg = {
        to: process.env.CONTACT_EMAIL || 'your.email@example.com',
        from: process.env.SENDER_EMAIL || 'noreply@yourdomain.com',
        subject: `[Portfolio Contact] ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
        `,
        html: `
          <h3>新しいお問い合わせ</h3>
          <p><strong>お名前:</strong> ${name}</p>
          <p><strong>メールアドレス:</strong> ${email}</p>
          <p><strong>件名:</strong> ${subject}</p>
          <p><strong>メッセージ:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      }
      
      await sgMail.send(msg)
    }
    */

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。ありがとうございます。' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    )
  }
}