export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const subString = [];
  for (const string of set.values()) {
    if (typeof string === 'string' && string.startsWith(startString)) {
      const sub = string.substring(startString.length);
      if (sub) {
        subString.push(sub);
      }
    }
  }
  return subString.join('-');
}
