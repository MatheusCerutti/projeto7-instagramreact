import React from "react"

export default function Posts() {
    const dadosPost=[
        {imagemusuario:"assets/img/meowed.svg",usuario:"meowed",imagempost:"assets/img/gato-telefone.svg",imagemcurtiu:"assets/img/respondeai.svg",nomecurtiu:"respondeai", numerocurtidas:Number(101523) },
        {imagemusuario:"assets/img/barked.svg",usuario:"barked",imagempost:"assets/img/dog.svg",imagemcurtiu:"assets/img/adorable_animals.svg",nomecurtiu:"adorable_animals", numerocurtidas:Number(99159)}
    ]

    return (
        <div class="posts">
            {dadosPost.map((dadoPosts) => <Post imagemusuario={dadoPosts.imagemusuario} usuario={dadoPosts.usuario} imagempost={dadoPosts.imagempost} imagemcurtiu={dadoPosts.imagemcurtiu} nomecurtiu={dadoPosts.nomecurtiu} numerocurtidas={dadoPosts.numerocurtidas} ></Post>)}  
        </div>
    )
}


function Post(props) {
    const [iconBook,setIcon]=React.useState("bookmark-outline")
    const [iconHeart,setHeart]=React.useState("heart-outline")
    const [numeroLikes,setLikes]=React.useState(props.numerocurtidas)

    function marcarSalvar(){
        let tipo = ''

        if (iconBook==="bookmark-outline"){
            tipo = "bookmark"
            setIcon(tipo)
        }else {
            tipo="bookmark-outline"
            setIcon(tipo)
        }
    }

    function darLike(){
        let tipo = ''

        if (iconHeart==="heart-outline"){
            tipo = "heart"
            setHeart(tipo)
            aumentarLikes()
        }else {
            tipo="heart-outline"
            setHeart(tipo)
            diminuirLikes()
        }
    }

    function postSalvar(){
        let tipo = ''

        if (iconHeart==="heart-outline"){
            tipo = "heart"
            aumentarLikes()
            setHeart(tipo)
            
        }
    }


    function aumentarLikes(){
        setLikes(numeroLikes+ 1)
    }

    function diminuirLikes(){
        
       setLikes(numeroLikes-1)
    }

    return(
    <div data-test="post" class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.imagemusuario} />
                {props.usuario}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img data-test="post-image" onClick={postSalvar} src={props.imagempost} />
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon data-test="like-post" name={iconHeart} onClick={darLike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon data-test="save-post" onClick={marcarSalvar} name={iconBook}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.imagemcurtiu} />
                <div class="texto" data-test="likes-number">
                    Curtido por <strong>{props.nomecurtiu}</strong> e <strong>outras {numeroLikes} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
      )

}
