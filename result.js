document.addEventListener('DOMContentLoaded', () => {
  const selectedCategory = sessionStorage.getItem('selectedCategory') || 'ความรัก';
  const pickedIdsRaw = sessionStorage.getItem('pickedCardIds');

  if (!pickedIdsRaw) {
    window.location.href = 'taro_2.html';
    return;
  }

  const pickedIds = JSON.parse(pickedIdsRaw);
  const cards = pickedIds.map(id => getCardById(id)).filter(Boolean);

  async function saveTarotReading() {
    const readingKey = `savedTarotReading:${selectedCategory}:${pickedIds.join(',')}`;
    if (sessionStorage.getItem(readingKey)) return;

    const result = await saveFortuneHistory('tarot', selectedCategory, {
      cards: cards.map((card) => ({
        id: card.id,
        name: card.name,
        thaiName: card.thaiName,
        prediction: card.meanings[selectedCategory] || card.meanings['รายวัน'],
      })),
    });

    if (result.saved) sessionStorage.setItem(readingKey, 'true');
  }

  document.getElementById('resultCategory').textContent = selectedCategory;
  document.getElementById('resultCount').textContent = `${cards.length} ใบ`;

  const spreadBoard = document.getElementById('spreadBoard');
  const readingsList = document.getElementById('readingsList');
  const flipAllBtn = document.getElementById('flipAllBtn');
  const flipHint = document.getElementById('flipHint');

  const celticPositions = [
    "ใบที่ 1: สถานการณ์ปัจจุบัน",
    "ใบที่ 2: อุปสรรคและสิ่งที่เข้ามาเกี่ยวข้อง",
    "ใบที่ 3: เป้าหมายและความคาดหวัง",
    "ใบที่ 4: รากฐานและอดีตที่ผ่านมา",
    "ใบที่ 5: เหตุการณ์ในอนาคตอันใกล้",
    "ใบที่ 6: อิทธิพลจากเบื้องลึกจิตใจ",
    "ใบที่ 7: ตัวตนและท่าทีของคุณ",
    "ใบที่ 8: สภาพแวดล้อมและคนรอบข้าง",
    "ใบที่ 9: ความหวังและความกังวล",
    "ใบที่ 10: บทสรุปภาพรวมของเดือนนี้"
  ];

  const flippedSet = new Set();

  function createFlipCardElement(card, index, posLabel, extraClass = '') {
    const wrapper = document.createElement('div');
    wrapper.className = `tarot-flip-wrapper ${extraClass}`.trim();
    wrapper.dataset.index = index;

    const fallbackSrc = `${CARD_FOLDER}${card.name}${CARD_IMAGE_EXT}`;

    wrapper.innerHTML = `
      <div class="tarot-flip-card">
        <div class="card-face card-back">
          <img src="${BACK_CARD_IMAGE}" alt="Back Card">
        </div>
        <div class="card-face card-front">
          <img src="${card.image}" alt="${card.name}" onerror="this.onerror=null; this.src='${fallbackSrc}';">
        </div>
      </div>
      <div class="pos-badge">${posLabel}</div>
    `;

    wrapper.addEventListener('click', () => flipSingleCard(index, wrapper));
    return wrapper;
  }

  function renderBoard() {
    spreadBoard.innerHTML = '';

    if (cards.length === 1) {
      spreadBoard.classList.add('single-spread');
      const cardEl = createFlipCardElement(cards[0], 0, `คำทำนายหมวด${selectedCategory}`);
      spreadBoard.appendChild(cardEl);
    } else {
      spreadBoard.classList.remove('single-spread');
      const grid = document.createElement('div');
      grid.className = 'celtic-cross-grid';

      const centerStack = document.createElement('div');
      centerStack.className = 'pos-center-stack';
      grid.appendChild(centerStack);

      cards.forEach((card, idx) => {
        const posLabel = celticPositions[idx] || `ใบที่ ${idx + 1}`;
        const cardEl = createFlipCardElement(card, idx, posLabel, `pos-${idx + 1}`);

        if (idx === 0 || idx === 1) {
          centerStack.appendChild(cardEl);
        } else {
          grid.appendChild(cardEl);
        }
      });

      spreadBoard.appendChild(grid);
    }
  }

  function flipSingleCard(index, wrapperEl) {
    if (flippedSet.has(index)) return;

    flippedSet.add(index);
    wrapperEl.classList.add('flipped');

    appendReadingBox(cards[index], index);

    if (flippedSet.size === cards.length) {
      flipAllBtn.style.display = 'none';
      flipHint.textContent = 'เปิดไพ่ครบทุกใบแล้ว เลื่อนอ่านคำทำนายด้านล่างได้เลย';
      flipHint.style.color = '#ffd700';
    }
  }

  function appendReadingBox(card, index) {
    const posTitle = cards.length === 1
      ? `ไพ่ประจำคำถามหมวด "${selectedCategory}"`
      : celticPositions[index];

    const predictionText = card.meanings[selectedCategory] || card.meanings["รายวัน"];
    const fallbackSrc = `${CARD_FOLDER}${card.name}${CARD_IMAGE_EXT}`;

    const box = document.createElement('article');
    box.className = 'reading-card';
    box.dataset.order = index;

    box.innerHTML = `
      <div class="reading-card-img">
        <img src="${card.image}" alt="${card.name}" onerror="this.onerror=null; this.src='${fallbackSrc}';">
      </div>
      <div class="reading-card-body">
        <span class="reading-pos-tag">${posTitle}</span>
        <h2 class="reading-card-title">${card.name}</h2>
        <p class="reading-card-sub">${card.thaiName}</p>
        <div class="reading-dota-badge">Dota 2 Theme: <strong>${card.dotaHero}</strong></div>
        <p class="reading-keywords"><strong>คีย์เวิร์ด:</strong> ${card.keywords}</p>
        <div class="reading-prediction-box">
          <strong>คำทำนาย (${selectedCategory}):</strong> ${predictionText}
        </div>
      </div>
    `;

    const existingBoxes = Array.from(readingsList.children);
    const nextBox = existingBoxes.find(el => Number(el.dataset.order) > index);
    if (nextBox) {
      readingsList.insertBefore(box, nextBox);
    } else {
      readingsList.appendChild(box);
    }
  }

  flipAllBtn.addEventListener('click', () => {
    const allWrappers = document.querySelectorAll('.tarot-flip-wrapper');
    allWrappers.forEach((wrapper, stepIdx) => {
      const cardIndex = Number(wrapper.dataset.index);
      setTimeout(() => {
        flipSingleCard(cardIndex, wrapper);
      }, stepIdx * 180);
    });
  });

  renderBoard();
  saveTarotReading();
});
