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

    return topTracks;
  } catch (error) {
    console.error(error);
    return []; // prevent the app from crashing
  }
}

export async function searchTracks(query, limit = 20) {
  try {
    const res = await fetch(
      `${BASE_URL}?method=track.search&track=${encodeURIComponent(query)}&api_key=${API_KEY}&limit=${limit}&format=json`,
    );
    const data = await res.json();
    const cleanData = data.results.trackmatches.track.map((track) => {
      const artistName = track.artist;
      const formattedName = encodeURIComponent(artistName).replace(/%20/g, "+");
      return {
        ...track,
        artist: {
          name: artistName,
          url: `https://www.last.fm/music/${formattedName}`,
        },
      };
    });

    return cleanData;
  } catch (error) {
    console.error("Search API Error:", error);
    return [];
  }
}
