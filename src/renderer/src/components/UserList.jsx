// Die View

//import React from 'react'
import { useUsers } from '../hooks/useUsers'

function UserList() {
  const { users, isLoading, error, refreshUsers } = useUsers()

  // 1. Ladezustand anzeigen
  if (isLoading) {
    return <div>Benutzer werden vom Python-Backend geladen...</div>
  }

  // 2. Fehlerzustand anzeigen
  if (error) {
    return (
      <div style={{ color: 'red' }}>
        Fehler: {error}
        <button onClick={refreshUsers}>Erneut versuchen</button>
      </div>
    );
  }

  // 3. Erfolgszustand anzeigen
  return (
    <div>
      <h2>Unsere Benutzer</h2>
      <button onClick={refreshUsers}>Daten aktualisieren</button>
      <ul>
        {users.length === 0 ? (
          <li>Keine Benutzer gefunden.</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default UserList