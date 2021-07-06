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
