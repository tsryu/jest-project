// https://www.youtube.com/watch?v=g4MdUjxA-S4
const fn = require("./fn");

test("1은 1이야.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("3 더하기 3은 5야", () => {
  expect(fn.add(3, 3)).toBe(5);
});

// 객체와 배열은 깊은 비교를 해야 되기 때문에 toEqual을 써야함
test("Equal", () => {
  expect(fn.makeUser("mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// toStrictEqual은 값이 조금이라도 다르면 에러뿜는다. 아래 예제도 gender가 없기 때문에 error
test("toStrictEqual", () => {
  expect(fn.makeUser("mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
  });
});

test("비밀번호 4자리 이상", () => {
  const pw = "1234";
  expect(pw.length).toBeGreaterThanOrEqual(4);
});

// 부동소수점은 toBeCloseTo로 근사값을 허용할 수 있다
test("0.1 더하기 0.2는 0.3입니다", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("0.1 더하기 0.2는 0.3입니다", () => {
  expect("Hello World").toMatch(/H/);
});

test("0.1 더하기 0.2는 0.3입니다", () => {
  expect("Hello World").toMatch(/h/i); // 대소문자 구분 없앨 땐 i 추가
});

test("유저 리스트에 Mike가 있나?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

test("이거 에러 나나요?", () => {
  expect(() => fn.throwErr()).toThrow("에러내용");
});
