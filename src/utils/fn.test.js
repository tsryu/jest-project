// https://www.youtube.com/watch?v=g4MdUjxA-S4

const add = (num1, num2) => num1 + num2;

test("1은 1이야.", () => {
  expect(1).toBe(1);
});

test("2 더하기 3은 5야", () => {
  expect(add(2, 3)).toBe(5);
});

// test("3 더하기 3은 5야", () => {
//   expect(add(3, 3)).toBe(5);
// });

const makeUser = (name, age) => ({ name, age, gender: undefined });

// 객체와 배열은 깊은 비교를 해야 되기 때문에 toEqual을 써야함
test("Equal", () => {
  expect(makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });
});

// toStrictEqual은 값이 조금이라도 다르면 에러뿜는다. 아래 예제도 gender가 없기 때문에 error
// test("toStrictEqual", () => {
//   expect(makeUser("mike", 30)).toStrictEqual({
//     name: "Mike",
//     age: 30,
//   });
// });

test("비밀번호 4자리 이상", () => {
  const pw = "1234";
  expect(pw.length).toBeGreaterThanOrEqual(4);
});

// 부동소수점은 toBeCloseTo로 근사값을 허용할 수 있다
test("0.1 더하기 0.2는 0.3입니다", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
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

const throwErr = () => {
  throw new Error("에러내용");
};

test("이거 에러 나나요?", () => {
  expect(() => throwErr()).toThrow("에러내용");
});

// https://www.youtube.com/watch?v=snFRUjYR6j4&t=2s

// 비동기 테스트

const getName = (callback) => {
  const name = "Mike";
  setTimeout(() => {
    callback(name);
  }, 3000);
};

test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  getName(callback);
});

const getName2 = () => {
  setTimeout(() => {
    throw new Error("서버 에러");
  }, 3000);
};

// test("3초 후에 받아온 이름은 Mike", (done) => {
//   function callback(name) {
//     try {
//       expect(name).toBe("Mike");
//       done();
//     } catch (error) {
//       done();
//     }
//   }
//   getName2(callback);
// });

// promise
const getAge = () => {
  const age = 30;
  return new Promise((res) => {
    setTimeout(() => {
      res(age);
    }, 3000);
  });
};
// promise는 리턴해줘야함
test("3초 후에 받아온 나이는 30", () => {
  return getAge().then((age) => {
    expect(age).toBe(30);
  });
});
// resolves matcher로 간단히 해결
test("3초 후에 받아온 나이는 30", () => {
  expect(getAge()).resolves.toBe(30);
});

const getError = () => {
  return new Promise((_, rej) => {
    setTimeout(() => {
      rej("error");
    }, 3000);
  });
};

test("3초 후에 에러가 납니다", () => {
  return expect(getError()).rejects.toMatch("error");
});

// async await
test("3초 후에 에러가 납니다", async () => {
  const age = await getAge();
  expect(age).toBe(30);
});

test("3초 후에 에러가 납니다", async () => {
  await expect(getAge()).resolves.toBe(30);
});
