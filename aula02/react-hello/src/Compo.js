import React, { Component } from "react";
import {Lista} from './Lista'
export class Compo extends Component {

    initialState = {
        nome: '',
        telefone: '',
        email: '',
        categorias: ['INFO', 'REDES', 'ADM']
    }

    state = this.initialState

    limpar() {
        this.setState(this.initialState)
    }

    render() {
        return (
            <div>
                <h2>Componente: {this.state.nome}</h2>
                <ul>
                {this.state.categorias.map((cat, index) => <Lista key={index} texto={cat}/>)}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(_ => this.setState({ ...this.state, nome: 'Tiago' }), 3000)
        setTimeout(_ => this.limpar(), 10000)

    }
}