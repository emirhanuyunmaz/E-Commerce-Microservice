import nodemailer from 'nodemailer';
import { config } from '../config';
import { randomInt } from 'crypto';

export class SendEmail {
  createCode(): String {
    return randomInt(10000, 99999).toString();
  }
  htmlDesign(code: string) {
    return `<!doctype html>
            <html lang="tr" xmlns="http://www.w3.org/1999/xhtml">
            <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <title>{{APP_NAME}} – Doğrulama Kodu</title>
            <!-- iOS için telefon/bağlantı otomatik biçimlemeyi kapat -->
            <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
            <style>
                /* Outlook (mso) dışı istemciler için küçük yardımcı stiller */
                @media (max-width: 600px) {
                .container { width: 100% !important; }
                .px { padding-left: 16px !important; padding-right: 16px !important; }
                .code { font-size: 28px !important; letter-spacing: 8px !important; }
                .btn { display:block !important; width:100% !important; }
                }
                /* Bazı istemciler koyu modda renkleri tersleyebilir, kontrastı yüksek tutuyoruz */
            </style>
            </head>
            <body style="margin:0; padding:0; background-color:#f2f4f7;">
            <!-- Preheader (gizli) -->
            <div style="display:none; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
                Güvenli giriş için tek kullanımlık kodun: ${code}. 10 dakika içinde kullan.
            </div>

            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f2f4f7;">
                <tr>
                <td align="center" style="padding:24px;">
                    <!-- Wrapper -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="width:600px; max-width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 18px rgba(16,24,40,0.06);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding:24px 24px 8px;">
                        <div style="font:600 18px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#101828; margin-top:8px;">
                            Shopline
                        </div>
                        </td>
                    </tr>

                    <!-- Title -->
                    <tr>
                        <td class="px" style="padding:8px 32px 0;">
                        <h1 style="margin:0; font:700 22px/1.3 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#101828;">
                            Giriş doğrulama kodun
                        </h1>
                        </td>
                    </tr>

                    <!-- Intro -->
                    <tr>
                        <td class="px" style="padding:12px 32px 0;">
                        <p style="margin:0; font:400 15px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#475467;">
                            Merhaba <br>
                            hesabına güvenli giriş yapabilmen için tek kullanımlık kodunu aşağıda bulabilirsin. Bu kod <strong>10 dakika</strong> geçerlidir.
                        </p>
                        </td>
                    </tr>

                    <!-- Code Block -->
                    <tr>
                        <td align="center" style="padding:20px 32px 8px;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border:1px solid #EAECF0; border-radius:10px; background:#F9FAFB;">
                            <tr>
                            <td align="center" style="padding:18px 24px;">
                                <!-- Kod: harf aralıklı, kopyalanabilir düz metin -->
                                <div class="code" style="font:700 32px/1.2 'SFMono-Regular',Consolas,'Liberation Mono',Menlo,monospace; letter-spacing:10px; color:#101828;">
                                ${code}
                                </div>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>

                    <!-- Tips -->
                    <tr>
                        <td class="px" style="padding:20px 32px 0;">
                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#F9FAFB; border:1px solid #EAECF0; border-radius:10px;">
                            <tr>
                            <td style="padding:14px 16px;">
                                <p style="margin:0; font:500 13px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#344054;">
                                Güvenlik ipuçları
                                </p>
                                <ul style="margin:8px 0 0 18px; padding:0; color:#475467; font:400 13px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif;">
                                <li>Kodunu hiç kimseyle paylaşma.</li>
                                <li>Bu işlemi sen başlatmadıysan <a href=\"{{SUPPORT_URL}}\" style=\"color:#0560FD; text-decoration:none;\">bize haber ver</a>.</li>
                                </ul>
                            </td>
                            </tr>
                        </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td class="px" style="padding:24px 32px 28px;">
                        <p style="margin:0; font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#98A2B3;">
                            Bu e-posta <strong>Shopline</strong> tarafından otomatik gönderildi. Yanıtlamana gerek yok.
                        </p>
                        <p style="margin:8px 0 0; font:400 12px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',Arial,sans-serif; color:#98A2B3;">
                            © ${new Date().getFullYear()} Shopline • <a href="{{PRIVACY_URL}}" style="color:#98A2B3; text-decoration:underline;">Gizlilik</a> 
                        </p>
                        </td>
                    </tr>
                    </table>
                    <!-- /Wrapper -->
                </td>
                </tr>
            </table>
            </body>
            </html>
            `;
  }

  async sendMessageVeriyEmail(email: string, code: string): Promise<boolean> {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 587,
      // secure: true, // true for port 465, false for other ports
      auth: {
        user: config.EMAIL_ADDRESS,
        pass: config.EMAIL_PASSWORD,
      },
    });

    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Shopline | Email Verify',
        // text: "Hello world?",
        html: this.htmlDesign(code) as string,
      });
      return true;
    } catch (err) {
      throw new Error(err as string);
    }
  }
}
