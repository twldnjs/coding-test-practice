function solution(clothes) {
  const map = new Map();
  for (const [_, category] of clothes) {
    map.set(category, (map.get(category) ?? 0) + 1);
  }

  let result = 1;
  for (const count of map.values()) {
    result *= count + 1;
  }
  return result - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
