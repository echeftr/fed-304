console.log("Welcome to our club!");

const age = 19;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 54;

if (age >= 18) {
  console.log("Hello welkom. U mag naar binnen.");
} else {
  console.log("Helaas ben je nog te jong om naar binnen te komen.");
}

if (isFemale) {
  console.log("another Lady in tha house.");
} else {
  console.log("Not a lady.");
}

if (driverStatus === "bob") {
  console.log("Bob and can drive.");
} else {
  console.log("Alcohol consumption, can not drive!");
}

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Veel plezier!");
}

if (name == "Sarah" || name === "Bram") {
  console.log("Vanwege jouw naam krijg je een gratis biertje!");
} else {
  console.lo("Helaas je heet niet Sarah of Bram");
}

if (totalAmount >= 100) {
  console.log("Fles champagne van the club!");
} else if (totalAmount > 50) {
  console.log("Portie nacho's van the club!");
} else if (totalAmount > 25) {
  console.log("(vega) bitterballen van the club!");
} else {
  console.log("a.u.b. veel plezier nog!");
}
