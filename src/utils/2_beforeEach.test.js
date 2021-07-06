// https://www.youtube.com/watch?v=TRZ2XdmctSQ

const add = (num1, num2) => num1 + num2;

let num = 0;

// test("0 + 1 = 1", () => {
//   num = add(num, 1);
//   expect(num).toBe(1);
// });

// // 이 시점에서 num이 1이기 때문에 오류 발생
// test("0 + 2 = 2", () => {
//   num = add(num, 2);
//   expect(num).toBe(2);
// });

// 하지만 beforeEach를 쓰면 다르다
// beforeEach는 테스트 이전의 콜백
// afterEach는 테스트 종료 후의 콜백

beforeEach(() => {
  num = 0;
});

test("0 + 1 = 1", () => {
  num = add(num, 1);
  expect(num).toBe(1);
});

// 이 시점에서 num이 1이기 때문에 오류 발생
test("0 + 2 = 2", () => {
  num = add(num, 2);
  expect(num).toBe(2);
});
