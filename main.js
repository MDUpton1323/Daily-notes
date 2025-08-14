/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
  {
    id: 0,
    text: "Believing in the Step-Back",
    author: "by James Harden",
    date: "08/12/25",
    topics: "Fantasy",
  },
  {
    id: 1,
    text: "Life has always been about... Bucket's",
    author: "by Uncle Drew",
    date: "04/19/25",
    topics: "Life Motivation",
  },
  {
    id: 2,
    text: "Understanding Uncle Drew",
    author: "by Kyrie Irving",
    date: "05/25/25",
    topics: "Life Motivation",
  },
  {
    id: 3,
    text: "Changing Bad Habits",
    author: "by Myself",
    date: "08/13/25",
    topics: "Not making bad decisions",
  },
];

// Below we will add two more objects to the notes array above with .push method
const chicagoBulls = {
  id: 4,
  text: "Six Rings",
  author: "by Michael Jordan",
  date: "10/23/90",
  topics: "Ways to be a Champ",
};

const dcWizards = {
  id: 5,
  text: "NoChillGill, the real DC Sniper",
  author: "by Gilbert Arenas",
  date: "02/20/06",
  topics: "Being Aggressive",
};

const noHornets = {
  id: 6,
  text: "I Might Swerve, Bend That Corner",
  author: "by Gelo Ball",
  date: "06/24/11",
  topics: "Learning to Bend That Corner!",
};

const mnTimberwolves = {
  id: 7,
  text: "ANYTHING'S POSSIBLE!!!",
  author: "by Kevin Garnett",
  date: "05/15/08",
  topics: "Motivational Speech",
};

const mGrizzlies = {
  id: 8,
  text: "When FAFO goes wrong, Real Wrong!",
  author: "by Ja Morant",
  date: "04/05/25",
  topics: "How to get fined on your day off",
};
// This below is for testing other ways to call ending console.log

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
// Create a variable using the .push method to add more objects to the array notes
notes.push(chicagoBulls, dcWizards, noHornets, mnTimberwolves, mGrizzlies);
// Now I will iterate through the array with a for loop
for (const paper of notes) {
  console.log(paper.text, paper.author, paper.topics);
}
// Will need to add 3 more objects to the array using the .push() method
console.log(notes);
