import React, { useState, useEffect } from "react"

import {Lista} from './Lista'

export const Compo2 = _ => {

    const [nome, setNome] = useState('Tiago')
    const [categorias] = useState(['INFO','REDES','ADM'])

    useEffect( () => {
        setTimeout(_ => setNome('Tiago'), 3000)
        setTimeout(_ => setNome(''), 10000)
    }, [])

    const renderLista = () => {
        {return categorias.map((cat, index) => <Lista key={index} texto={cat}/>)}
    }
    return (
        <div>
            <h2>Componente: {nome}</h2>
            <ul>
                {renderLista()}
            </ul>
        </div>
    )
}

