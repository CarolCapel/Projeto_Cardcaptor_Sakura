/** Objetivo 1 - quando clicarno botãodo personagemnalista,marcar o botão como selecionado */

// Passo 1 - pegar os botoes no JS para poder verificar quando o usuario clicar em cima de um deles. 

const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Passo 2 - adicionar a classe "selecionado" no botão que o usuario clicou.

botoes.forEach((botao,indice)=> {
    botao.addEventListener("click", () => {

        // Passo 3 - verificar se ja existe um botão selecionado, se sim, devemos remover a seleção dele.

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector (".personagem.selecionado")
        personagemSelecionado;
        personagemSelecionado.classList.remove("selecionado")
        personagens[indice].classList.add("selecionado")

    });
});

/** Objetivo 2 - quando clicar no botão personagem mostrar as informações do pensonagem */

