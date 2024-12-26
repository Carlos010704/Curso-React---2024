import { useEffect, useState } from "react"
import './App.css'

const ENPOINT_FACT = 'https://catfact.ninja/fact'
// const ENPOINT_IMG = `https://cataas.com/cat/says/${firtsWord}?fontSize=50&fontColor=red&json=true`
const URL_IMG_PREFIX = 'https://cataas.com/cat/'

export function App() {
    const [fact, setFact] = useState('Lorem ipsum cat fact whatever')
    const [imageUrl, setImageUrl] = useState()

    // Recuperar la cita al cargar la pagina.
    useEffect(() => {
        fetch(ENPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)

            })
    }, [])

    // Recuperar la imagen con la cita obtenida
    useEffect(() => {
        if (!fact) return

        const firtsWord = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firtsWord}?fontSize=50&fontColor=red&json=true`)

            .then(res => res.json())
            .then(response => {
                const { _id } = response

                const url_img = `${URL_IMG_PREFIX}${_id}/says/${firtsWord}?fontSize=50&fontColor=red`
                setImageUrl(url_img)
            })
    }, [fact])

    const handleCick = () => {
        fetch(ENPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }

    return (
        <main>
            <h2>Renderización de la App</h2>
            <button onClick={handleCick} >Get New Fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Image extrated using tha firts word: ${fact}`} />}

        </main>
    )
}