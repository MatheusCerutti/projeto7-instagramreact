export default function Stories() {

    const dadosStory = [
        {imagens:"assets/img/9gag.svg",usuarios:"9gag"},
        {imagens:"assets/img/meowed.svg",usuarios:"meowed"},
        {imagens:"assets/img/barked.svg",usuarios:"barked"},
        {imagens:"assets/img/nathanwpylestrangeplanet.svg",usuarios:"nathanwpylestrangeplanet"},
        {imagens:"assets/img/wawawicomics.svg",usuarios:"wawawicomics"},
        {imagens:"assets/img/respondeai.svg",usuarios:"respondeai"},
        {imagens:"assets/img/filomoderna.svg",usuarios:"filomoderna"},
        {imagens:"assets/img/memeriagourmet.svg",usuarios:"memeriagourmet"}
    ]

    

    return (
        <div class="stories">
            {dadosStory.map((dadoStories) => <Story imagemstory={dadoStories.imagens} usuario={dadoStories.usuarios}></Story>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}


function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagemstory} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}