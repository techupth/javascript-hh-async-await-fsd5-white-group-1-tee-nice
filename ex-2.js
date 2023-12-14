//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
//Function getJohnProfile ดึงข้อมูลจาก Server ไม่สำเร็จเสมอ
//ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()
const result = (data) => {
  console.log(data);
};
getJohnProfile().catch(result);
