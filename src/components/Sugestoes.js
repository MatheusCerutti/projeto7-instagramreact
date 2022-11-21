export default function Sugestoes() {
    const dadosSugestao = [
        {imagemusuario:"assets/img/bad.vibes.memes.svg",nome:"bad.vibes.memes",razao:"Segue você"},
        {imagemusuario:"assets/img/chibirdart.svg",nome:"chibirdart",razao:"Segue você"},
        {imagemusuario:"assets/img/razoesparaacreditar.svg",nome:"razoesparaacreditar",razao:"Novo no Instagram"},
        {imagemusuario:"assets/img/adorable_animals.svg",nome:"adorable_animals",razao:"Segue você"},
        {imagemusuario:"assets/img/smallcutecats.svg",nome:"smallcutecats",razao:"Segue você"}
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {dadosSugestao.map((dadoSugestoes) => <Sugestao imagemusuario = {dadoSugestoes.imagemusuario}  nome = {dadoSugestoes.nome} razao={dadoSugestoes.razao}></Sugestao>)}
        </div>

    )
}

function Sugestao(props){
    return(
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.imagemusuario} />
                    <div class="texto">
                        <div class="nome">{props.nome}</div>
                        <div class="razao">{props.seguindo}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}