const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('two member tickets cost 584', function () { assertEq(calcTotal(2, true), 584); });
test('member ticket price excludes the service fee discount', function () { assertEq(calcTotal(1, true), 292); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('member orders above the limit are rejected', function () { assertEq(calcTotal(7, true), null); });
test('members can buy 5 tickets under the updated limit', function () { assertEq(calcTotal(5, true), 1460); });
test('regular orders above the limit are rejected', function () { assertEq(calcTotal(9), null); });
test('zero tickets are rejected', function () { assertEq(calcTotal(0), null); });
test('fractional ticket quantities are rejected', function () { assertEq(calcTotal(1.5), null); });
