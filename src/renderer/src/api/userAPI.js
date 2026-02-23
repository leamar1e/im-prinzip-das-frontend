// Das Model

const API_BASE_URL = 'http://localhost:8000'; // Die URL eures Python-Backends

export const userApi = {
  // Funktion zum Abrufen aller Benutzer
  async getUsers() {
    const response = await fetch(`${API_BASE_URL}/users`)
    if (!response.ok) {
      throw new Error('Fehler beim Laden der Benutzerdaten')
    }
    // Gibt die rohen JSON-Daten vom Python-Backend zurück
    return await response.json()
  }
}