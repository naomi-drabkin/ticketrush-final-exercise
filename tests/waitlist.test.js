const { joinWaitlist } = require('../js/waitlist');

test('adds a trimmed lowercase email without mutating the list', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, '  NEW@Example.COM  ');

  assertEq(JSON.stringify(result), JSON.stringify(['first@example.com', 'new@example.com']));
  assertEq(JSON.stringify(original), JSON.stringify(['first@example.com']));
});

test('invalid email returns a new unchanged list', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, 'invalid-email');

  assertEq(JSON.stringify(result), JSON.stringify(original));
  assertEq(result === original, false);
});

test('does not add an existing email again', function () {
  const original = ['first@example.com'];
  const result = joinWaitlist(original, ' FIRST@EXAMPLE.COM ');

  assertEq(JSON.stringify(result), JSON.stringify(original));
  assertEq(result === original, false);
});
