// Exercise #6
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function getJohnProfile() {
  await delay(1000);
  return {
    name: "John",
    age: 20,
    hobbies: ["Coding", "Football"],
  };
}

async function getJohnOrders() {
  await delay(1500);
  return [
    { orderId: "001", items: ["apple", "banana"] },
    { orderId: "002", items: ["orange", "itim"] },
  ];
}

// Start coding here

async function fetchData() {
  try {
    const johnProfile = await getJohnProfile();
    console.log(johnProfile);

    const johnOrders = await getJohnOrders();
    console.log(johnOrders);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
