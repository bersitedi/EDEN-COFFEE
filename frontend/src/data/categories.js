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
        id: 2,
        title: "Espresso",
        link: "/card/2",
        description:
          "Espresso is a concentrated coffee beverage brewed by forcing hot water under pressure through finely-ground coffee beans.",
        imageUrl: one,
      },

      {
        id: 4,
        title: "Latte",
        link: "/card/4",
        description:
          "Latte is a coffee drink made with espresso and steamed milk. It is typically topped with a small amount of milk foam.",
        imageUrl: one,
      },
      {
        id: 5,
        title: "Espresso",
        link: "/card/5",
        description:
          "Espresso is a concentrated coffee beverage brewed by forcing hot water under pressure through finely-ground coffee beans.",
        imageUrl: one,
      },
      {
        id: 6,
        title: "Cappuccino",
        link: "/card/6",
        description:
          "Cappuccino is a coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and milk foam on top.",
        imageUrl: two,
      },
      {
        id: 7,
        title: "Latte",
        link: "/card/7",
        description:
          "Latte is a coffee drink made with espresso and steamed milk. It is typically topped with a small amount of milk foam.",
        imageUrl: one,
      },
    ],
  },
  {
    id: 2,
    title: "Category 2",
    description: "Description for Category 2",
    cards: [
      {
        id: 8,
        title: "Mocha",
        link: "/card/8",
        description:
          "Mocha is a chocolate-flavored variant of a latte, featuring espresso, steamed milk, and chocolate syrup.",
        imageUrl: three,
      },
      {
        id: 9,
        title: "Americano",
        link: "/card/9",
        description:
          "Americano is a coffee drink prepared by diluting espresso with hot water, giving it a similar strength to drip coffee but different flavor.",
        imageUrl: four,
      },
      {
        id: 10,
        title: "Macchiato",
        link: "/card/10",
        description:
          "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed.",
        imageUrl: three,
      },
      {
        id: 11,
        title: "Mocha",
        link: "/card/11",
        description:
          "Mocha is a chocolate-flavored variant of a latte, featuring espresso, steamed milk, and chocolate syrup.",
        imageUrl: three,
      },
      {
        id: 12,
        title: "Americano",
        link: "/card/12",
        description:
          "Americano is a coffee drink prepared by diluting espresso with hot water, giving it a similar strength to drip coffee but different flavor.",
        imageUrl: four,
      },
      {
        id: 13,
        title: "Macchiato",
        link: "/card/13",
        description:
          "Macchiato is an espresso coffee drink with a small amount of milk, usually foamed.",
        imageUrl: three,
      },
    ],
  },
  {
    id: 3,
    title: "Category 3",
    description: "Description for Category 3",
    cards: [
      {
        id: 14,
        title: "Cold Brew",
        link: "/card/14",
        description:
          "Cold Brew is a coffee preparation method that uses cold water over a longer steeping time, resulting in a smoother, less acidic taste.",
        imageUrl: four,
      },
      {
        id: 15,
        title: "Iced Coffee",
        link: "/card/15",
        description:
          "Iced coffee is a coffee beverage served cold, typically prepared with brewed coffee or espresso, milk, and ice.",
        imageUrl: five,
      },
      {
        id: 16,
        title: "Affogato",
        link: "/card/16",
        description:
          "Affogato is an Italian coffee-based dessert made of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.",
        imageUrl: four,
      },
      {
        id: 17,
        title: "Cold Brew",
        link: "/card/17",
        description:
          "Cold Brew is a coffee preparation method that uses cold water over a longer steeping time, resulting in a smoother, less acidic taste.",
        imageUrl: four,
      },
      {
        id: 18,
        title: "Iced Coffee",
        link: "/card/11",
        description:
          "Iced coffee is a coffee beverage served cold, typically prepared with brewed coffee or espresso, milk, and ice.",
        imageUrl: five,
      },
      {
        id: 18,
        title: "Affogato",
        link: "/card/12",
        description:
          "Affogato is an Italian coffee-based dessert made of a scoop of vanilla gelato or ice cream topped with a shot of hot espresso.",
        imageUrl: four,
      },
    ],
  },
];

export default categories;
