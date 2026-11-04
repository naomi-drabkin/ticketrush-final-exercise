// Refund 90% of the ticket price; the service fee is not refundable.
const { TICKET_PRICE } = require('./pricing');

const REFUND_RATE = 0.9;

function calcRefund(qty) {
  return qty * TICKET_PRICE * REFUND_RATE;
}

module.exports = { calcRefund, REFUND_RATE };
