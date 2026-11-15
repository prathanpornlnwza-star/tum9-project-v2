document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('[data-auth-form]');
  if (!form) return;

  const mode = form.dataset.authForm;
  const message = document.querySelector('[data-auth-message]');
  const submit = form.querySelector('button[type="submit"]');

  const showMessage = (text, isError = false) => {
    message.textContent = text;
    message.classList.toggle('is-error', isError);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submit.disabled = true;
    showMessage('กำลังดำเนินการ...');

    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    let result;

    if (mode === 'register') {
      result = await window.TUM9Supabase.auth.signUp({
        email,
        password,
        options: { data: { display_name: form.elements.name.value.trim() } },
      });
    } else {
      result = await window.TUM9Supabase.auth.signInWithPassword({ email, password });
    }

    if (result.error) {
      showMessage(result.error.message, true);
      submit.disabled = false;
      return;
    }

    if (mode === 'register' && !result.data.session) {
      showMessage('สมัครสำเร็จแล้ว กรุณายืนยันอีเมลก่อนเข้าสู่ระบบ');
      submit.disabled = false;
      return;
    }

    window.location.href = 'profile.html';
  });
});
