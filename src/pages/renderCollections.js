import { renderCard } from "../components/card.js";
import { storage } from "../utils/storage.js";

export function renderCollections() {
  const collections = storage.get();

  renderCard(collections);
}
