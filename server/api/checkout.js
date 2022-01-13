const stripeAPI = require("../stripe");

const createCheckoutSession = async (req, res) => {
  const domainURL = process.env.WEB_APP_URL || "http://localhost:3000";
  const { line_items } = req.body;
  //check req body has line items and customer email
  if (!line_items) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }

  let session;

  try {
    session = await stripeAPI.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainURL}/cancel`,
      shipping_address_collection: { allowed_countries: ["GB", "US"] },
    });
    res.status(200).json({ sessionId: session.id });
  } catch (error) {
    res.status(400).json({ error: "unable to create checkout session" });
  }
};

module.exports = createCheckoutSession;
