import { getTopTracks } from "../api/lastfmApi.js";
import { renderCard } from "../components/card.js";


export async function renderHome(){
  const topTracks = await getTopTracks();
  renderCard(topTracks);

}

