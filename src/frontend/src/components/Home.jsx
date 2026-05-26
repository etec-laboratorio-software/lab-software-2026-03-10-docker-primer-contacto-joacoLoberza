import { useState } from "react"

export function Home () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const req = async () => {
        try {
            setLoading(true);
           const response = await fetch('/api/user');

            if (!response.ok) {
                throw 'error'
            }

            const info = await response.json();
            setData(info);
        } catch (err) {
            setError("Error al hacer la petición :'(")
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <p>Haga una petición a mi hermoso backend</p>
            <button 
                onClick={req} 
                disabled={loading}
                style={{
                backgroundColor: loading ? '#9CA3AF' : '#4F46E5',
                color: 'white',
                padding: '10px 16px',
                border: 'none',
                borderRadius: '4px',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontWeight: 'bold',
                width: '100%'
                }}
            >
                {loading ? 'Consultando al backend...' : 'aquí :)'}
        </button>
        <p>verá un JSON pelado con un usuario por default:</p>
        {error && (
            <p>D: Error: {error}</p>
        )}
        {data && (
            <p>Respuesta: {JSON.stringify(data, null, 2)}</p>
        )}
      </div>
    )
}