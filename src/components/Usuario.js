import React from "react"

export default function Usuario() {
    const [imagemPerfil,setImagem]=React.useState("assets/img/catanacomics.svg")
    const [nomePerfil,setNome]=React.useState("Catana")
    
    const nomeInicial = 'Catana'

    function trocarFtPerfil(){
        const linkImagem = prompt("Insira o Link da sua imagem de perfil")
        setImagem(linkImagem)
    }

    function trocarNome(){
        const nomePerfil = prompt("Qual nome deseja usar?")
        setNome(nomePerfil)

    }

    return (
        <div data-test="user" class="usuario">
            <img data-test="profile-image" onClick={trocarFtPerfil} src={imagemPerfil} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span data-test="name">
                    {nomePerfil}
                    <ion-icon data-test="edit-name" onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>

    )
}