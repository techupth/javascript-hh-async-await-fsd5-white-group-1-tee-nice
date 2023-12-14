// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (reject) {
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
// Start coding here
const profile = await getJohnProfile();
console.log(profile);
