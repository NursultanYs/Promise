setTimeout(() => {
  console.log("Отправка запроса на сервер...");
  setTimeout(() => {
    console.log("Получение данных...");
    setTimeout(() => {
      console.log("выводим данные");
    }, 2000);
  }, 2000);
}, 2000);

const data = "";
// Получение данных

// Кладем данные в нашу переменную
// Выводим data

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const data = ["Banana", "orange"];
    resolve(data);
    throw new Error("ПОшло не так");
  }, 300);
});

promise1
  .then((data) => {
    data.push("Mango");
    return data;
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("123");
  });
