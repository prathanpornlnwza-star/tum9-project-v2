document.addEventListener('DOMContentLoaded', () => {
  // 1. อ่านค่ากติกาจาก sessionStorage
  const selectedCategory = sessionStorage.getItem('selectedCategory') || 'ความรัก';
  const deckType = sessionStorage.getItem('deckType') || (
    (selectedCategory === 'รายวัน' || selectedCategory === 'รายเดือน') ? 'all' : 'major'
  );
  const targetCount = Number(
    sessionStorage.getItem('selectedCardCount') || (selectedCategory === 'รายเดือน' ? 10 : 1)
  );

  // อัปเดตข้อความบนหน้าเว็บ
  document.getElementById('topicLabel').textContent = selectedCategory;
  document.getElementById('deckTypeLabel').textContent =
    deckType === 'all' ? 'ทั้งสำรับ (78 ใบ)' : 'Major Arcana (22 ใบ)';

  const spreadArea = document.getElementById('cardSpreadArea');
  const slotsContainer = document.getElementById('selectedSlots');
  const counterEl = document.getElementById('pickedCounter');
  const instructionEl = document.getElementById('instructionText');
  const shuffleBtn = document.getElementById('shuffleBtn');
  const revealBtn = document.getElementById('revealBtn');

  let currentDeck = [];
  let pickedCards = []; // เก็บ { cardId, deckIndex }

  // 2. เตรียมกองไพ่และสับไพ่ตามประเภทหมวดหมู่
  function initDeck() {
    pickedCards = [];
    const baseCards = deckType === 'all'
      ? [...tarotData]
      : tarotData.filter(card => card.arcana === 'major');

    // Fisher-Yates Shuffle
    for (let i = baseCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [baseCards[i], baseCards[j]] = [baseCards[j], baseCards[i]];
    }

    currentDeck = baseCards;
    renderSpread();
    renderSlots();
    updateUIState();
  }

  // 3. วาดไพ่คว่ำหน้าเรียงบนโต๊ะ
  function renderSpread() {
    spreadArea.innerHTML = '';
    if (deckType === 'major') {
      spreadArea.classList.add('major-mode');
    } else {
      spreadArea.classList.remove('major-mode');
    }

    currentDeck.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'spread-card';
      cardEl.dataset.index = index;
      cardEl.innerHTML = `<img src="${BACK_CARD_IMAGE}" alt="Tarot Back">`;

      cardEl.addEventListener('click', () => handlePickCard(index, cardEl));
      spreadArea.appendChild(cardEl);
    });
  }

  // 4. วาดช่อง Slot ด้านล่าง (1 ช่อง หรือ 10 ช่อง)
  function renderSlots() {
    slotsContainer.innerHTML = '';
    for (let i = 0; i < targetCount; i++) {
      const slot = document.createElement('div');
      slot.className = 'slot-box';

      if (pickedCards[i]) {
        slot.classList.add('filled');
        slot.title = 'คลิกเพื่อยกเลิกไพ่ใบนี้';
        slot.innerHTML = `<img src="${BACK_CARD_IMAGE}" alt="Selected Card">`;
        slot.addEventListener('click', () => handleUnpickCard(i));
      } else {
        slot.innerHTML = `<span>${i + 1}</span>`;
      }

      slotsContainer.appendChild(slot);
    }
  }

  // 5. เมื่อคลิกเลือกไพ่จากกอง
  function handlePickCard(deckIndex, cardEl) {
    if (pickedCards.length >= targetCount) return;
    if (pickedCards.some(item => item.deckIndex === deckIndex)) return;

    const chosenCard = currentDeck[deckIndex];
    pickedCards.push({
      cardId: chosenCard.id,
      deckIndex: deckIndex
    });

    cardEl.classList.add('picked');
    renderSlots();
    updateUIState();
  }

  // 6. เมื่อคลิกที่ช่องด้านล่างเพื่อยกเลิกใบที่หยิบไป
  function handleUnpickCard(slotIndex) {
    const removed = pickedCards.splice(slotIndex, 1)[0];
    if (removed) {
      const spreadCardEl = spreadArea.querySelector(`.spread-card[data-index="${removed.deckIndex}"]`);
      if (spreadCardEl) {
        spreadCardEl.classList.remove('picked');
      }
    }
    renderSlots();
    updateUIState();
  }

  // 7. อัปเดตตัวนับและปุ่มเปิดคำทำนาย
  function updateUIState() {
    counterEl.textContent = `${pickedCards.length} / ${targetCount}`;

    if (pickedCards.length === targetCount) {
      revealBtn.removeAttribute('disabled');
      instructionEl.textContent = 'เลือกไพ่ครบแล้ว! กดปุ่ม "เปิดคำทำนาย" ด้านล่างได้เลย';
      instructionEl.style.color = '#ffd700';
    } else {
      revealBtn.setAttribute('disabled', 'true');
      const remaining = targetCount - pickedCards.length;
      instructionEl.textContent = `ตั้งจิตอธิษฐานให้มั่น แล้วคลิกเลือกไพ่เพิ่มอีก ${remaining} ใบ`;
      instructionEl.style.color = '#bfaee0';
    }
  }

  // ปุ่มสับไพ่ใหม่
  shuffleBtn.addEventListener('click', () => {
    initDeck();
  });

  // ปุ่มเปิดคำทำนาย -> ส่ง ID ไพ่ที่เลือกไปยังหน้า result.html
  revealBtn.addEventListener('click', () => {
    if (pickedCards.length !== targetCount) return;
    const selectedIds = pickedCards.map(item => item.cardId);
    sessionStorage.setItem('pickedCardIds', JSON.stringify(selectedIds));
    window.location.href = 'result.html';
  });

  // เริ่มทำงานทันที
  initDeck();
});