const cardGrid = document.getElementById('card-grid');
const cardSearch = document.getElementById('card-search');
const cardCount = document.getElementById('card-count');
const cardEmpty = document.getElementById('card-empty');
const filterButtons = [...document.querySelectorAll('.card-filter')];
const cardDescriptionsById = new Map(cardAboutDescriptions.map(({ id, description }) => [id, description]));
const uniqueCardsById = new Map();

tarotData.forEach(card => uniqueCardsById.set(card.id, card));

const cards = [...uniqueCardsById.values()].sort((first, second) => first.id - second.id);
const cardImageOverrides = new Map([
  ['ACE OF CUPS', 'cards/ACE OF CUPS.jpg'],
  ['QUEEN OF CUPS', 'cards/QUEEN OF CUPS.jpg']
]);
const suitLabels = {
  wands: 'ไม้เท้า',
  swords: 'ดาบ',
  cups: 'ถ้วย',
  pentacles: 'เหรียญ'
};

if (cards.length !== 78 || cardDescriptionsById.size !== 78) {
  throw new Error('Card guide requires exactly 78 cards and 78 descriptions.');
}

cards.forEach(card => {
  if (!cardDescriptionsById.has(card.id)) {
    throw new Error(`Missing description for tarot card ${card.id}.`);
  }
});

function getCardCategory(card) {
  return card.arcana === 'major' ? 'major' : card.suit;
}

function createTextElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
}

function createCardElement(card) {
  const category = getCardCategory(card);
  const cardElement = document.createElement('article');
  cardElement.className = 'card-about-item';

  const art = document.createElement('div');
  art.className = 'card-about-art';

  const image = document.createElement('img');
  image.src = cardImageOverrides.get(card.name) || card.image;
  image.alt = `${card.name} — ${card.thaiName}`;
  image.loading = 'lazy';
  image.decoding = 'async';
  art.append(image, createTextElement(
    'span',
    'card-about-number',
    category === 'major'
      ? `${String(card.id).padStart(2, '0')} · MAJOR ARCANA`
      : `${String(card.id - 21).padStart(2, '0')} · ${suitLabels[card.suit] || card.suit}`
  ));

  const copy = document.createElement('div');
  copy.className = 'card-about-copy';
  copy.append(
    createTextElement('h3', 'card-about-name', card.name),
    createTextElement('p', 'card-about-thai-name', card.thaiName),
    createTextElement('p', 'card-about-counterpart', `Dota 2: ${card.dotaHero}`),
    createTextElement('p', 'card-about-keywords', card.keywords),
    createTextElement('p', 'card-about-description', cardDescriptionsById.get(card.id))
  );
  cardElement.dataset.category = category;
  cardElement.dataset.search = [
    card.name,
    card.thaiName,
    card.dotaHero,
    card.keywords,
    cardDescriptionsById.get(card.id)
  ].join(' ').toLocaleLowerCase();
  cardElement.append(art, copy);
  return cardElement;
}

const cardElements = cards.map(createCardElement);

function renderCards() {
  const activeFilter = filterButtons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.filter || 'all';
  const searchTerm = cardSearch.value.trim().toLocaleLowerCase();
  const visibleCards = cardElements.filter(cardElement => {
    const matchesFilter = activeFilter === 'all' || cardElement.dataset.category === activeFilter;
    const matchesSearch = !searchTerm || cardElement.dataset.search.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  cardGrid.replaceChildren(...visibleCards);
  cardCount.textContent = `กำลังแสดงไพ่ ${visibleCards.length} จาก ${cards.length} ใบ`;
  cardEmpty.hidden = visibleCards.length > 0;
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(filterButton => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('is-active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });
    renderCards();
  });
});

cardSearch.addEventListener('input', renderCards);
renderCards();
