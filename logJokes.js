// Using Promises alone
async function logJokesAbout(term) {
  var data = await $.getJSON(`https://icanhazdadjoke.com/search?term=${term}`);
  console.log("Here is the joke data!", data);
}

logJokesAbout("spider");
logJokesAbout("pizza");
// etc.