const API_BASE = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5000/api'
  : 'https://thrust-calculator.onrender.com/api';

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
