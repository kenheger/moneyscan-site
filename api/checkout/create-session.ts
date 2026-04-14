import Stripe from 'stripe';

// Initialize Stripe with secret key from environment
// Note: You'll need to add STRIPE_SECRET_KEY to Vercel project settings
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, productName, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!priceId) {
      return res.status(400).json({ error: 'Missing priceId' });
    }

    // Create Stripe Checkout Session with automatic receipts
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      // This enables automatic receipt emails to the customer
      receipt_email: true,
      // Customer email will be collected by Stripe checkout
      customer_email: undefined, // Let Stripe collect it
      success_url: successUrl || `${req.headers.origin}/?payment=success`,
      cancel_url: cancelUrl || `${req.headers.origin}/?payment=cancelled`,
      metadata: {
        product: productName || 'MONEYSCAN Purchase',
      },
    });

    return res.status(200).json({ 
      sessionId: session.id, 
      url: session.url 
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to create checkout session' 
    });
  }
}