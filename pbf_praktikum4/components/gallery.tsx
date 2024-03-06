import {sculptureList} from '../data/article'
import { useState } from 'react'

export default function Gallery() {
    const [index, setIndex] = useState(0)

    function handleClick() {
        setIndex(index + 1)
    }

    let sculpture = sculptureList[index];

    return (
        <div>
            <button
            className='bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded'
            onClick={handleClick}>
                Artkel Selanjutnya
            </button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>{sculpture.description}</p>
        </div>
    )
}

