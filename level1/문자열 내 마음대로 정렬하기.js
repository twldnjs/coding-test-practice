function solution(strings, n) {
  return strings.slice().sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    return a[n].localeCompare(b[n]);
  });
}

console.log(solution(['abce', 'abcd', 'cdx']));
