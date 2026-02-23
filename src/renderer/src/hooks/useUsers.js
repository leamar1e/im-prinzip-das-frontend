// Das ViewModel
import { useState, useEffect } from 'react'
import { userApi } from '../api/userAPI.js'

export function useUsers() {
  // Hier halten wir den Zustand für unsere View bereit
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Diese Funktion lädt die Daten über das Model
  const loadUsers = async () => {
    setIsLoading(true)
    setError(null)
    try {
      // Hier rufen wir das Model auf!
      const data = await userApi.getUsers()
      setUsers(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Wenn die Komponente geladen wird, holen wir sofort die Daten
  useEffect(() => {
    loadUsers()
  }, [])

  // Das ViewModel gibt nur die aufbereiteten Daten und Aktionen an die View zurück
  return {
    users,
    isLoading,
    error,
    refreshUsers: loadUsers // Aktion, um die Daten manuell neu zu laden
  }
}