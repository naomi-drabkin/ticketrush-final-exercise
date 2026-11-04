# Review: Noa's refund calculation

**Recommendation: do not merge until the refund calculation is corrected.**

- `js/refund.js:8` applies the 90% refund rate to both the ticket price and the non-refundable service fee. The stated policy and tests require refunding only 90% of the ticket price: one ticket should return 315, but the current function returns 325.8; two should return 630, but it returns 651.6.
- `node tests/run.js` also reports two failures in the existing `format.test.js` checks (`₪0.00` instead of the expected ticket and order prices). Those are unrelated to Noa's refund changes; the refund tests independently fail for the fee calculation above.
