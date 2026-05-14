const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL = "/api";

export async function getTopTracks(count = 10) {
  try {
    const res = await fetch(
      `${BASE_URL}?method=chart.gettoptracks&api_key=${API_KEY}&format=json`,
    );
    if (!res.ok) throw new Error("API request failed.");
    const data = await res.json();
    const topTracks = data.tracks.track.slice(0, count);
    console.log(topTracks)
    return topTracks;
  } catch (error) {
    console.error(error);
    return []; // prevent the app from breaking
  }
}
