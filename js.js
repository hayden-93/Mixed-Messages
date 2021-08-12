function randomMessage() {
  protein = [
    "Chicken ",
    "Steak ",
    "Shrimp ",
    "Ham ",
    "Salmon ",
    "Ribs ",
    "Wings ",
    "Burger ",
  ];
  starch = ["Rice ", "Couscous ", "Mashed Potatoes ", "French Fries "];
  veggie = [
    "Corn ",
    "Green Beans ",
    "Carrots ",
    "Peas ",
    "Broccoli ",
    "Brussel Sprouts ",
    "Sweet Potatoes ",
    "Asparagus ",
  ];
  desert = [
    "Cupcakes",
    "Jell-O",
    "Carrot Cake",
    "Apple Pie",
    "Ice Cream",
    "Brownies",
    "Chocolate Chip Cookies",
    "Chocolate Cake",
  ];

  const randomize = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  let mealMaker =
    randomize(protein) +
    ", " +
    randomize(starch) +
    ", " +
    randomize(veggie) +
    "and " +
    randomize(desert);

  document.getElementById("message").innerHTML = mealMaker;
}
