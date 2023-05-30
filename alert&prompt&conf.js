alert("This is an alert message!");
   
   
const result: boolean = confirm("Do you want to proceed?");
if (result) {
  // User clicked OK
  console.log("Proceeding...");
} else {
  // User clicked Cancel
  console.log("Cancelled.");
}



const name: string | null = prompt("Please enter your name:");
if (name) {
  console.log("Hello, " + name + "!");
} else {
  console.log("No name entered.");
}
