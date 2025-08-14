/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
  {
    id: 0,
    text: "Believing in the Step-Back",
    author: "James Harden",
    date: "08/12/25",
    topics: "Fantasy",
  },
  {
    id: 1,
    text: "Life has always been about... Bucket's",
    author: "Uncle Drew",
    date: "04/19/25",
    topics: "Life Motivation",
  },
  {
    id: 2,
    text: "Best ways to understand Uncle Drew",
    author: "Kyrie Irving",
    date: "05/25/25",
    topics: "Life Motivation",
  },
  {
    id: 3,
    text: "Changing Bad Habits",
    author: "Myself",
    date: "08/13/25",
    topics: "Not making bad decisions",
  },
];

const chicagoBulls = {
  id: 4,
  text: "Six Rings",
  author: "Michael Jordan",
  date: "10/23/90",
  topics: "Ways to be a Champ",
};

const dcWizards = {
  id: 5,
  text: "NoChillGill, the real DC Sniper",
  author: "Gilbert Arenas",
  date: "02/20/06",
  topics: "Being Aggressive",
};

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/
// Below we will add two more objects to the notes array above with .push method
notes.push(chicagoBulls, dcWizards);
// Now I will iterate through the array with a for loop and then callback the objects in a SI
for (const paper of notes) {
  console.log(`The greatest book of all time is ${paper.topics}`);
}
// Will need to add 3 more objects to the array using the .push() method
console.log(notes);
