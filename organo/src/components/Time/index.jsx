import './Time.css'
import Colaborador from '../Colaborador'

const Time = ({corSecundaria, corPrimaria, nome, colaboradores}) => {
    const cssSection = { backgroundColor: corSecundaria }
    const cssH3 = { borderColor: corPrimaria }
    return (
        (colaboradores.length > 0) &&
        <section className='time' style={cssSection}>
            <h3 style={cssH3}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => <Colaborador corDeFundo={corPrimaria} key={nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={`https://github.com//${colaborador.github}.png`}/>)}
            </div>
        </section>
    )
}

export default Time