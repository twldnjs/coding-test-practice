function solution(nums) {
  const count = nums.length / 2;
  const num = new Set(nums).size;

  return count < num ? count : num;
}

console.log(solution([3, 1, 2, 3]));
