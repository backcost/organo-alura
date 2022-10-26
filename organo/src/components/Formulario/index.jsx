import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = () => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido =>', nome, cargo, imagem, time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Prreencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"/>
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"/>
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"/>
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times} />
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario