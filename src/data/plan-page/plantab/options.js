const options = [
  {
    id: 1,
    title: "How do you drink your coffee?",
    name: "drink",
    steps: [
      {
        numID: "first",
        group: "group1",
        title: "Capsules",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        numID: "second",
        group: "group1",
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        numID: "third",
        group: "group1",
        title: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: 2,
    title: "What type of coffee?",
    name: "type",
    steps: [
      {
        numID: "fourth",
        group: "group2",
        title: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        numID: "fifth",
        group: "group2",
        title: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        numID: "sixth",
        group: "group2",
        title: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: 3,
    title: "How much would you like?",
    name: "quantity",
    steps: [
      {
        numID: "seventh",
        group: "group3",
        title: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        numID: "eighth",
        group: "group3",
        title: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        numID: "ninth",
        group: "group3",
        title: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },

  {
    id: 4,
    title: "Want us to grind them?",
    name: "grind",
    steps: [
      {
        numID: "tenth",
        group: "group4",
        title: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        numID: "eleventh",
        group: "group4",
        title: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        numID: "twelfth",
        group: "group4",
        title: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: 5,
    title: "How often should we deliver?",
    name: "delivery",
    steps: [
      {
        numID: "thirteenth",
        group: "group5",
        title: "Every week",
        description: "$14.00 per shipment. Includes free first-class shipping.",
      },
      {
        numID: "fourteenth",
        group: "group5",
        title: "Every 2 weeks",
        description: "$17.25 per shipment. Includes free priority shipping.",
      },
      {
        numID: "fifteenth",
        group: "group5",
        title: "Every month",
        description: "$22.50 per shipment. Includes free priority shipping.",
      },
    ],
  },
]

export default options
