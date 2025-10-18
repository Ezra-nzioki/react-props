import React from 'react'

import './weather.css'

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'

export const Weather = () => {
    const [city, setCity] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [data, setData] = React.useState(null)

    const formatDate = (dt) => {
        try{
            const d = new Date(dt * 1000) //ms
            return d.toLocaleString()
        }catch(e){
            return ''
        }
    }

    const handleSearch = async () => {
        if (!city.trim()) {
            setError('Please enter a city name')
            setData(null)
            return
        }

        setLoading(true)
        setError('')
        setData(null)

        const key = "72e07f6a0d73949ea058313e40bdc6f4"


        try {
            const url = `${API_BASE}?q=${encodeURIComponent(city)}&units=metric&appid=${key}`
            const res = await fetch(url)
            if (!res.ok) {
                const body = await res.json().catch(() => ({}))
                throw new Error(body.message || 'Failed to fetch weather')
            }
            const json = await res.json()
            setData(json)
        } catch (err) {
            setError(err.message || 'Error fetching weather')
        } finally {
            setLoading(false)
        }
    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch()
    }

    return (
        <div className="weather-container">
            <div className="search-bar">
                <input
                    type="text"
                    id="search"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={onKeyDown}
                />
                <button onClick={handleSearch} disabled={loading}>{loading ? 'Searching for weather...' : 'Search'}</button>
            </div>

            {error && <div className="error">{error}</div>}

            {data && (
                <div className="weather-info">
                    <h2>
                        City : <span>{data.name}</span>
                    </h2>
                    <p>
                        date/time: <span>{formatDate(data.dt)}</span>
                    </p>
                    <p>
                        Temperature: <span>{data.main?.temp ?? 'N/A'} °C</span>
                    </p>
                    <p>
                        condition: <span>{data.weather?.[0]?.description ?? 'N/A'}</span>
                    </p>
                </div>
            )}
        </div>
    )
}
