// Function that returns a Promise with a delay
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Asynchronous function using async/await
async function performTasks() {
  try {
    console.log("Task 1 started");
    await delay(2000); // Waiting for 2 seconds
    console.log("Task 1 completed");

    console.log("Task 2 started");
    await delay(3000); // Waiting for 3 seconds
    console.log("Task 2 completed");

    console.log("Task 3 started");
    await delay(1500); // Waiting for 1.5 seconds
    console.log("Task 3 completed");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Invoking the asynchronous function
performTasks();

