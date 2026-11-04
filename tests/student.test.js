const { calcTotal } = require('../js/pricing');

test('student discount: 2 tickets', function () { assertEq(calcTotal(2, false, true), 619); });
test('no discount for regular price', function () { assertEq(calcTotal(2, false, false), 724); });
test('member and student receive only the larger member discount', function () {
  assertEq(calcTotal(2, true, true), 584);
});
