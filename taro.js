document.addEventListener('DOMContentLoaded', () => {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const continueBtn = document.getElementById('continueBtn');
  let selectedCategory = null;

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const clickedBtn = e.currentTarget;
      categoryButtons.forEach((b) => b.classList.remove('selected'));
      clickedBtn.classList.add('selected');
      selectedCategory = clickedBtn.getAttribute('data-category');

      if (continueBtn) {
        continueBtn.removeAttribute('disabled');
      }
    });
  });

  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      if (!selectedCategory) return;

      sessionStorage.setItem('selectedCategory', selectedCategory);

      // กำหนดกติกากองไพ่และจำนวนที่ต้องเลือกตามแต่ละหมวด
      if (selectedCategory === 'รายวัน') {
        sessionStorage.setItem('deckType', 'all');      // ทั้งสำรับ 78 ใบ
        sessionStorage.setItem('selectedCardCount', '1');
      } else if (selectedCategory === 'รายเดือน') {
        sessionStorage.setItem('deckType', 'all');      // ทั้งสำรับ 78 ใบ
        sessionStorage.setItem('selectedCardCount', '10');
      } else {
        // ความรัก, การเรียน, การงาน, การเงิน, สุขภาพ, บริวาร, โชคลาภ
        sessionStorage.setItem('deckType', 'major');    // เฉพาะ Major Arcana 22 ใบ
        sessionStorage.setItem('selectedCardCount', '1');
      }

      // พาเข้าหน้าคลี่ไพ่ให้เลือกทันที
      window.location.href = 'pick-cards.html';
    });
  }
});