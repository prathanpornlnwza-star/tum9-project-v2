async function getNavClient() {
  if (window.TUM9Supabase) return window.TUM9Supabase;

  if (!window.supabase) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  window.TUM9Supabase = window.supabase.createClient(
    'https://yirqwfswkmxmfcywakvq.supabase.co',
    'sb_publishable_2DmvNSzrb6dzK_1TqcM9bw_-rCnWOO9',
  );
  return window.TUM9Supabase;
}

document.addEventListener('DOMContentLoaded', async () => {
  let client;
  try {
    client = await getNavClient();
  } catch {
    return;
  }

  const { data } = await client.auth.getUser();
  const user = data.user;
  if (!user) return;

  document.querySelectorAll('.account-links a[href="login.html"], .account-links a[href="register.html"]').forEach((link) => {
    link.closest('li').hidden = true;
  });

  document.querySelectorAll('.account-links a[href="profile.html"]').forEach((link) => {
    link.textContent = 'My Profile';
  });
});
