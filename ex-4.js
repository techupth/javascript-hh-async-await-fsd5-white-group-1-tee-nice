// Exercise #4

let getJohnProfile = async () => {
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
// //ให้นำ Function getJohnProfile จากโจทย์ Exercise #1 มาเขียนใหม่ด้วยวิธี Async / Await
// ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log()
const profile = await getJohnProfile();
console.log(profile);
