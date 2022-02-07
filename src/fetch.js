const apiBase = "https://api.football-data.org/v2";

export async function getResource(url) {
  const res = await fetch(`${apiBase}${url}`, {
    headers: { "X-Auth-Token": `${process.env.REACT_APP_API_TOKEN}` },
    dataType: "json",
    type: "GET",
  });
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }
  return await res.json();
}

export function getAllCompetitions() {
  return getResource("/competitions");
}

export function getAllTeams() {
  return getResource("/teams");
}

export function getAllMatches() {
  return getResource("/matches");
}
