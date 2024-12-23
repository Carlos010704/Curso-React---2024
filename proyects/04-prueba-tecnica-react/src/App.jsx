import { useEffect, useState } from "react"

const ENPOINT_FACT = 'https://catfact.ninja/fact'
// const ENPOINT_IMG = `https://cataas.com/cat/says/${firtsWord}?size=50&color=red&json=true`

export function App() {
    const [fact, setFact] = useState('Lorem ipsum cat fact whatever')
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(ENPOINT_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(data.fact)

                const firtsWord = fact.split(' ')[0]

                fetch(`https://cataas.com/cat/says/${firtsWord}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageUrl()
                    })

            })
    }, [])

    return (
        <main>
            <h2>Renderización de la App</h2>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src="{imageUrl}" alt={`Image extrated using tha firts word: ${firtsWord}`} />}
        </main>
    )
}