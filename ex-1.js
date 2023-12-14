//Exercise #1

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
//Function getJohnProfile ดึงข้อมูลจาก Server สำเร็จเสมอ
// ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()
const result = (data) => {
  console.log(data);
};
getJohnProfile().then(result);
//Asynchronous Operaction ทำงานสำเร็จจะให้ Execute ตัว Function อะไรต่อ ด้วย then และ catch
