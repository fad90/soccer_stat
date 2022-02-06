const apiBase = "https://api.football-data.org/v2";

export async function getResource(url) {
  const res = await fetch(`${apiBase}${url}`, {
    headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
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
