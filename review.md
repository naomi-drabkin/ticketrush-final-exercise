# Review: Noa's refund calculation

The reviewed implementation in `js/refund.js` applied the 90% refund rate to both the ticket price and the non-refundable service fee. The one- and two-ticket tests expected refunds of 315 and 630, but the reviewed implementation returned 325.8 and 651.6. I corrected the calculation to refund only 90% of the ticket price; both refund tests now pass.
