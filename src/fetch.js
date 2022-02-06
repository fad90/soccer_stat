const apiBase = "https://api.football-data.org/v2";

export async function getResource(url) {
  const res = await fetch(`${apiBase}${url}`, {
    headers: { "X-Auth-Token": "1d1dfaa89dd54c15bcef0e7fae063627" },
    dataType: "json",
    type: "GET",
  });
  return await res.json();
}

export function getAllCompetitions() {
  const result = getResource("/competitions");
  return result;
}

export function getAllTeams() {
  return getResource(`/teams`);
}

export function getAllMatches() {
  return getResource(`/matches`);
}

// const stat = new FootballData();

// stat.getAllCompetitions().then((body) => {
//   console.log(body);
// });

//   const host = 'https://api.football-data.org/';
//   const version = 'v2';
//   const url = `${host}${version}`;
//   return console.log(url);
//   const response = await fetch(url, {
//     headers: { "X-Auth-Token": "1d1dfaa89dd54c15bcef0e7fae063627" },
//     dataType: "json",
//     type: "GET",
//   });
