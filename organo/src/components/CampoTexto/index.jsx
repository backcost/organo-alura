import './CampoTexto.css'

const CampoTexto = ({label, valor, obrigatorio, placeholder, aoAlterado}) => {

    return (
        <div className="campo-texto">
            <label>
                {label}
                </label>
            <input 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder} />
        </div>
    )
}

export default CampoTexto