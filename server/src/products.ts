export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Spice Paws',
    price: 5.99,
    description: 'A smooth jazz singer with a deep, velvety voice.',
    image: 'http://localhost:8080/cat1.jpeg',
    longDescription: 'Spice Paws enchants audiences with smooth jazz melodies and a deep, velvety voice that soothes the soul.',
  },
  {
    id: 2,
    name: 'pawBBA',
    price: 8.99,
    description: 'A piano-playing diva with a soulful voice.',
    image: 'http://localhost:8080/cat2.jpeg',
    longDescription: 'pawBBA is a piano-playing diva, captivating audiences with soulful performances and powerful vocals.',
  },
  {
    id: 3,
    name: 'Meowid Pawtta',
    price: 7.99,
    description: 'A powerhouse vocalist known for her incredible range and emotive performances.',
    image: 'http://localhost:8080/cat3.jpeg',
    longDescription: 'Meowid Pawtta is a powerhouse vocalist with an incredible range, known for her emotive performances that leave audiences spellbound.',
  },
  {
    id: 4,
    name: 'Elton Paw',
    price: 7.99,
    description: 'A rock legend with an iconic stage presence and electrifying performances.',
    image: 'http://localhost:8080/cat4.jpeg',
    longDescription: 'Elton Paw is a rock legend, delivering electrifying performances with an iconic stage presence that leaves fans roaring for more.',
  },
  {
    id: 5,
    name: 'Meower Jackson',
    price: 7.99,
    description: 'An indie folk singer with a soothing voice and heartfelt lyrics.',
    image: 'http://localhost:8080/cat5.jpeg',
    longDescription: 'Meower Jackson charms with a soothing voice and heartfelt lyrics, making waves in the indie folk scene.',
  },
  {
    id: 6,
    name: 'Catlie Meowth',
    price: 6.99,
    description: 'A jazz cat with impeccable scat-singing skills and a timeless voice.',
    image: 'http://localhost:8080/cat6.jpeg',
    longDescription: 'Catlie Meowth is a jazz sensation, known for her impeccable scat-singing skills and timeless voice that resonates through the ages.',
  },
  {
    id: 7,
    name: 'PawHead',
    price: 8.99,
    description: 'A classic rock singer-songwriter with legendary hits and a gentle purr.',
    image: 'http://localhost:8080/cat7.jpeg',
    longDescription: 'PawHead is a classic rock singer-songwriter, beloved for legendary hits and a gentle purr that captures hearts worldwide.',
  },
  {
    id: 8,
    name: 'The Smashing Meows',
    price: 7.99,
    description: 'A soul cat known for her powerful voice and commanding stage presence.',
    image: 'http://localhost:8080/cat8.jpeg',
    longDescription: 'The Smashing Meows are a soul group, known for their powerful voices and commanding stage presence that leaves audiences in awe.',
  },
  {
    id: 9,
    name: 'TamePawla',
    price: 8.99,
    description: 'A glam rock icon with a flair for the theatrical and innovative music.',
    image: 'http://localhost:8080/cat9.jpeg',
    longDescription: 'TamePawla is a glam rock icon, renowned for theatrical performances and innovative music that pushes boundaries.',
  },
  {
    id: 10,
    name: 'Meow Singh',
    price: 9.99,
    description: 'A soul cat known for her powerful voice and commanding stage presence.',
    image: 'http://localhost:8080/cat10.jpeg',
    longDescription: 'Meow Singh dazzles with a powerful voice and captivating stage presence, making waves in the music industry.',
  },
  {
    id: 11,
    name: 'Mohammed Bashir Al-Hamallah Waqtoum II',
    price: 12.99,
    description: 'The greatest Meows from the Middle East',
    image: 'http://localhost:8080/cat11.jpeg',
    longDescription: 'Mohammed Bashir Al-Hamallah Waqtoum II mesmerizes with intricate vocal harmonies and a rich tapestry of musical influences.',
  },
];

export default products;
