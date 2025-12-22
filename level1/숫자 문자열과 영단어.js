function solution(s) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i < words.length; i++) {
    s = s.split(words[i]).join(String(i));
  }
  return Number(s);
}

console.log(solution('one4seveneight'));
