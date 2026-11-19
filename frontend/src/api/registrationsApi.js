const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
export async function getRegistrations({ participantName = '', type = '', status = '', page = 1, pageSize = 10 } = {}) {
  const params = new URLSearchParams();
  if (participantName) params.append('participantName', participantName);
  if (type) params.append('type', type);
  if (status) params.append('status', status);
  params.append('page', String(page));
  params.append('pageSize', String(pageSize));

  const res = await fetch(`${API_BASE_URL}/api/registrations?${params.toString()}`);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}

export async function getSummary() {
  const res = await fetch(`${API_BASE_URL}/api/registrations/summary`);
  if (!res.ok) throw new Error(`API Error: ${res.status}`);
  return res.json();
}