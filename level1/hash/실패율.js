function solution(N, stages) {
  // 멈춘 사람 집계
  const failCount = new Map();
  for (const stage of stages) {
    failCount.set(stage, (failCount.get(stage) ?? 0) + 1);
  }

  // 실패율 계산
  let remaining = stages.length;
  const result = [];

  for (let i = 1; i <= N; i++) {
    const fail = failCount.get(i) ?? 0;
    const rate = remaining === 0 ? 0 : fail / remaining;

    result.push({ stage: i, rate });
    remaining -= fail;
  }

  // 정렬
  result.sort((a, b) => {
    if (b.rate === a.rate) return a.stage - b.stage;
    return b.rate - a.rate;
  });

  // stage 반환
  return result.map((x) => x.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
