window.TUM9Supabase = window.supabase.createClient(
  window.TUM9_SUPABASE_URL,
  window.TUM9_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);

async function getCurrentUser() {
  const { data, error } = await window.TUM9Supabase.auth.getUser();
  return error ? null : data.user;
}

async function saveFortuneHistory(readingType, category, summary) {
  const user = await getCurrentUser();
  if (!user) return { saved: false, reason: 'signed-out' };

  const { error } = await window.TUM9Supabase.from('fortune_history').insert({
    user_id: user.id,
    reading_type: readingType,
    category,
    summary,
  });

  return error ? { saved: false, reason: error.message } : { saved: true };
}
