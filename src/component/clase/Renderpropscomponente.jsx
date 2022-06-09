import react from 'react'
import CartWidget from '../CartWidget'

const dataCard = {
    titulo:'Curso React ',
    subtitulo:'asdasd',
    entregas:{},
}


const RenderPostExample = ()=>{
    return <CartWidget {...dataCard} render={()=>{<CodeSource/>}}/>
}