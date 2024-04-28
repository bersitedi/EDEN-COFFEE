// categories.js

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import three from "../assets/three.jpg";
import four from "../assets/four.jpg";
import five from "../assets/five.jpg";

const categories = [
  {
    id: 1,
    title: "Category 1",
    description: "Description for Category 1",
    cards: [
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: one,
      },
      {
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: two,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: one,
      },
    ],
  },
  {
    id: 2,
    title: "Category 2",
    description: "Description for Category 1",
    cards: [
      {
        title: "Card 2",
        description: "Description for Card 1",
        imageUrl: three,
      },
      {
        title: "Card 2",
        description: "Description for Card 2",
        imageUrl: four,
      },
      {
        title: "Card 2",
        description: "Description for Card 1",
        imageUrl: three,
      },
    ],
  },
  {
    id: 3,
    title: "Category 3",
    description: "Description for Category 1",
    cards: [
      {
        title: "Card 3",
        description: "Description for Card 1",
        imageUrl: four,
      },
      {
        title: "Card 3",
        description: "Description for Card 2",
        imageUrl: five,
      },
      {
        title: "Card 3",
        description: "Description for Card 1",
        imageUrl: four,
      },
    ],
  },
];

export default categories;
