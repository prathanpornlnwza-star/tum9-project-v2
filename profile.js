document.addEventListener('DOMContentLoaded', async () => {
  const user = await getCurrentUser();
  const signedOut = document.querySelector('[data-profile-signed-out]');
  const signedIn = document.querySelector('[data-profile-signed-in]');

  if (!user) {
    signedOut.hidden = false;
    return;
  }

  signedIn.hidden = false;
  document.querySelector('[data-profile-name]').textContent = user.user_metadata.display_name || 'ผู้ใช้งาน TUM9';
  document.querySelector('[data-profile-email]').textContent = user.email;

  const { data: history, error } = await window.TUM9Supabase
    .from('fortune_history')
    .select('id, reading_type, category, summary, created_at')
    .order('created_at', { ascending: false })
    .limit(30);

  const count = document.querySelector('[data-history-count]');
  const list = document.querySelector('[data-history-list]');
  if (error) {
    count.textContent = 'ยังไม่พร้อมใช้งาน';
    list.innerHTML = '<p class="account-notice">กรุณาตั้งค่าตารางประวัติใน Supabase ก่อน</p>';
    return;
  }

  count.textContent = `${history.length} รายการ`;
  if (!history.length) {
    list.innerHTML = '<p class="account-notice">ยังไม่มีประวัติการดูดวง</p>';
    return;
  }

  list.innerHTML = history.map((item) => {
    const cards = item.summary.cards?.map((card) => card.thaiName || card.name).join(', ');
    const typeLabels = {
      tarot: 'ไพ่ทาโรต์',
      'birth-chart': 'Birth Chart',
      'lucky-wheel': 'Lucky Wheel',
      'blood-oracle': 'ดูดวงกรุ๊ปเลือด',
      'daily-lucky': 'Daily Lucky',
      contact: 'ข้อความติดต่อ',
    };
    const title = `${typeLabels[item.reading_type] || item.reading_type}: ${item.category || 'คำทำนาย'}`;
    const detail = cards || item.summary.description || 'บันทึกคำทำนาย';
    const date = new Intl.DateTimeFormat('th-TH', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(item.created_at));
    return `<article class="history-item"><strong>${title}</strong><span>${detail}</span><time>${date}</time></article>`;
  }).join('');

  document.querySelector('[data-sign-out]').addEventListener('click', async () => {
    await window.TUM9Supabase.auth.signOut();
    window.location.href = 'login.html';
  });
});
