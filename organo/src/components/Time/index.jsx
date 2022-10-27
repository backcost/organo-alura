import './Time.css'
import Colaborador from '../Colaborador'

const Time = (props) => {
    const cssSection = { backgroundColor: props.corSecundaria }
    const cssH3 = { borderColor: props.corPrimaria }
    return (
        <section className='time' style={cssSection}>
            <h3 style={cssH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time