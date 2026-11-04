function joinWaitlist(list, email) {
  const result = list.slice();
  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');

  if (atIndex === -1 || normalizedEmail.indexOf('.', atIndex + 1) === -1) {
    return result;
  }

  const alreadyJoined = list.some(function (entry) {
    return typeof entry === 'string' && entry.trim().toLowerCase() === normalizedEmail;
  });
  if (!alreadyJoined) result.push(normalizedEmail);

  return result;
}

if (typeof module !== 'undefined') {
  module.exports = { joinWaitlist };
}
