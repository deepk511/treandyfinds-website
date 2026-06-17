import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = 'Treandyfinds India <orders@treandyfindsindia.com>'
const OWNER_EMAIL = process.env.OWNER_EMAIL

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      customerName,
      customerEmail,
      customerPhone,
      address,
      city,
      pincode,
      items, // [{ name, price, qty }]
      total,
      paymentMethod, // 'online' | 'cod'
    } = body

    if (!customerEmail || !items || !total) {
      return Response.json({ error: 'Missing required order fields' }, { status: 400 })
    }

    const itemsHtml = items
      .map(
        (item) =>
          `<tr>
            <td style="padding:8px 0;color:#1A1A1A;">${item.name}${item.qty > 1 ? ` × ${item.qty}` : ''}</td>
            <td style="padding:8px 0;text-align:right;color:#1A1A1A;font-weight:bold;">₹${item.price * item.qty}</td>
          </tr>`
      )
      .join('')

    const paymentLabel = paymentMethod === 'cod' ? 'Cash on Delivery' : 'Paid Online (Razorpay)'

    const customerHtml = `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;">
        <h2 style="color:#FF6B35;">Thank you, ${customerName}! 🎉</h2>
        <p style="color:#1A1A1A;">Your order with <strong>Treandyfinds India</strong> has been confirmed.</p>
        <table style="width:100%;border-collapse:collapse;margin:16px 0;">
          ${itemsHtml}
          <tr><td style="padding-top:12px;border-top:1px solid #eee;font-weight:bold;">Total</td>
              <td style="padding-top:12px;border-top:1px solid #eee;text-align:right;font-weight:bold;color:#FF6B35;">₹${total}</td></tr>
        </table>
        <p style="color:#1A1A1A;"><strong>Payment:</strong> ${paymentLabel}</p>
        <p style="color:#1A1A1A;"><strong>Delivery Address:</strong><br/>${address}, ${city} - ${pincode}</p>
        <p style="color:#666;font-size:14px;">Your order will be dispatched within 24 hours and delivered in 5–7 business days.</p>
        <p style="color:#666;font-size:14px;">Questions? Email us at treandyfindsindia@gmail.com</p>
      </div>
    `

    const ownerHtml = `
      <div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;">
        <h2 style="color:#FF6B35;">🛒 New Order Received — ₹${total}</h2>
        <table style="width:100%;border-collapse:collapse;margin:16px 0;">
          ${itemsHtml}
          <tr><td style="padding-top:12px;border-top:1px solid #eee;font-weight:bold;">Total</td>
              <td style="padding-top:12px;border-top:1px solid #eee;text-align:right;font-weight:bold;color:#FF6B35;">₹${total}</td></tr>
        </table>
        <p><strong>Payment:</strong> ${paymentLabel}</p>
        <p><strong>Customer:</strong> ${customerName}<br/>
           <strong>Phone:</strong> ${customerPhone}<br/>
           <strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Delivery Address:</strong><br/>${address}, ${city} - ${pincode}</p>
      </div>
    `

    const results = await Promise.allSettled([
      resend.emails.send({
        from: FROM,
        to: customerEmail,
        subject: 'Your Treandyfinds India order is confirmed!',
        html: customerHtml,
      }),
      resend.emails.send({
        from: FROM,
        to: OWNER_EMAIL,
        subject: `New Order Received — ₹${total} (${paymentLabel})`,
        html: ownerHtml,
      }),
    ])

    const failed = results.filter((r) => r.status === 'rejected')
    if (failed.length > 0) {
      console.error('Email send failures:', failed)
    }

    return Response.json({ success: true, emailsSent: results.length - failed.length })
  } catch (err) {
    console.error('send-order-email error:', err)
    return Response.json({ error: 'Failed to send order emails' }, { status: 500 })
  }
}
