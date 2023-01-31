function tournamentWinner(competitions, results) {

  // create an empty object to fill with the teams and their scores
  // loop through competitions array 
  // check if team is in the object
  // if not - add it with 0 points
  // check if the team index is 0 or 1
  // check respective results number
  // if team has index 0 - they are playing home.
  // if result is 0 - give home team 0 points
  // check second team name if it is in object
  // if not - add it with 0 points
  // if result is 0, add to this team 3 points
  // once i have the object with all teams and their points i need to sort it descending and pring the key of the object with the highest value

  let teams = {};
  for (let i = 0; i < competitions.length; i++) {
    let currentPair = competitions[i];
    let currentScore = results[i];
    let homeTeam = currentPair[0];
    let guestTeam = currentPair[1];
    if (!teams.hasOwnProperty(homeTeam)) {
      teams[homeTeam] = 0;
    }
    if (!teams.hasOwnProperty(guestTeam)) {
      teams[guestTeam] = 0;
    }
    if (currentScore === 0) {
      teams[guestTeam] += 3;
    } else if (currentScore === 1) {
      teams[homeTeam] += 3;
    }
  }

  let entries = Object.entries(teams); // [['HTML', 0], ['C#', 3]]
  let sortedEntries = entries.sort((a, b) => b[1] - a[1]);


  console.log(sortedEntries[0][0])
  return sortedEntries[0][0];
}

tournamentWinner([['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']], [0, 0, 1])