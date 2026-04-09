const API_BASE = '/api';

const API = {
  async calculateThrust(params) {
    try {
      const res = await fetch(`${API_BASE}/calculate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params)
      });
      if (!res.ok) throw new Error(await res.text());
      return await res.json();
    } catch (err) {
      console.error(err);
      throw err;
    }
  },

  async getPropellers() {
    const res = await fetch(`${API_BASE}/propellers`);
    if (!res.ok) throw new Error('Failed to fetch propellers');
    return await res.json();
  },

  async searchProps(query) {
    if (!query) return [];
    try {
      const res = await fetch(`${API_BASE}/propellers/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) throw new Error(await res.text());
      return await res.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }
};
