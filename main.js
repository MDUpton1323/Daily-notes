/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = [
  {
    id: 0,
    text: "Believing in the Step-Back",
    author: "by James Harden",
    date: "08/12/25",
    topics: ["Fantasy", "a", "b"],
  },
  {
    id: 1,
    text: "Life has always been about... Bucket's",
    author: "by Uncle Drew",
    date: "04/19/25",
    topics: ["Life Motivation", "Hello"],
  },
  {
    id: 2,
    text: "Understanding Uncle Drew",
    author: "by Kyrie Irving",
    date: "05/25/25",
    topics: ["Life Motivation", "Hello"],
  },
  {
    id: 3,
    text: "Changing Bad Habits",
    author: "by Myself",
    date: "08/13/25",
    topics: ["Not making bad decisions"],
  },
];

// Below we will add two more objects to the notes array above with .push method
const chicagoBulls = {
  id: 4,
  text: "Six Rings",
  author: "by Michael Jordan",
  date: "10/23/90",
  topics: ["Ways to be a Champ", "a"],
};

const dcWizards = {
  id: 5,
  text: "NoChillGill, the real DC Sniper",
  author: "by Gilbert Arenas",
  date: "02/20/06",
  topics: ["Being Aggressive", " Not making bad decisions"],
};

const noHornets = {
  id: 6,
  text: "I Might Swerve, Bend That Corner",
  author: "by Gelo Ball",
  date: "06/24/11",
  topics: ["Learning to Bend That Corner!", "Fantasy"],
};

const mnTimberwolves = {
  id: 7,
  text: "ANYTHING'S POSSIBLE!!!",
  author: "by Kevin Garnett",
  date: "05/15/08",
  topics: ["Motivational Speech", "b"],
};

const mGrizzlies = {
  id: 8,
  text: "When FAFO goes wrong, Real Wrong!",
  author: "by Ja Morant",
  date: "04/05/25",
  topics: ["How to get fined on your day off"],
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
// Create a new variable called filteredNotes, with an empty array as an initial value
const filteredNotes = [];
// console.log(filteredNotes);
// Create a new variable called criteria that contains a string of the topic by which I want to filter the notes
const criteria = "Fantasy";
console.log("*** Notes with the github topic ***");
for (const note of notes) {
  if (note.topics.includes(criteria)) {
    filteredNotes.push(note);
  }
}

console.log(filteredNotes);

// Create a for loop that will iterate through the notes array and check if the criteria is in the topics array

// Will need to filter through the array of objects and get the topics of each object that match fantasy
// Will need to create a for of loop that will iterate through the array of objects
// Will need to create an if statement that checks if what is being looked for is true
// Now I will iterate through the array with a for loop
const note = [];
console.log("*** All Note Topics ***");
for (const note of notes) {
  for (const topic of note.topics) {
    console.log(note.topics);
  }
}

let totalTopics = 0;

for (const note of notes) {
  for (const topic of note.topics) {
    totalTopics = totalTopics + 1;
  }
}

const averageTopics = totalTopics / notes.length;

console.log(`\n*** Average Topics Per Note ***\n${averageTopics}`);

// Will need a header using *** Note Articles *** layout inside of console.log
console.log("***  Note Articles  ***");
// Create a variable htmlString that will store the HTML elements
let htmlString = "";
// Outer for loop
for (const note of notes) {
  // Create a for of loop that will iterate through the objects in the notes array
  htmlString += `<article>
  ${note.text}\n`;
  for (const topic of note.topics) {
    // Will need to log an HTML element article containing text from the notes object
    htmlString += `\t<section> ${topic} </section>\n`;
  }
  htmlString += `</article>\n`;
}
console.log(htmlString);
