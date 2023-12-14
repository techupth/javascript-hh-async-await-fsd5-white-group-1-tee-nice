//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// // เขียนโค้ดเพื่อเรียงลำดับการทำงานด้วยวิธี Promise Property ปกติ
// กำหนดให้ลำดับการทำงานต้องเป็นดังนี้
// getJohnProfile จะต้องถูก Execute ก่อน
// ให้แสดงผลตัวข้อมูลที่ได้จาก Function getJohnProfile ด้วย console.log()
// getJohnOrders จะต้องถูก Execute ถัดมา
// ให้แสดงผลตัวข้อมูลที่ได้จาก Function getJohnOrders ด้วย console.log()
const profile = (data) => {
  console.log(data);
};

const order = (data) => {
  console.log(data);
};

getJohnProfile().then(profile);
getJohnOrders().then(order);
