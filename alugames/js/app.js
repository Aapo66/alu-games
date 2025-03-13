function alterarAlugarParaDevolver(game){
    document.querySelector(`#${game} .dashboard__item__img`).classList.add("dashboard__item__img--rented");
    document.querySelector(`#${game} .dashboard__item__button`).classList.add("dashboard__item__button--return");
    document.querySelector(`#${game} .dashboard__item__button`).textContent = "Devolver";
}

function alterarDevolverParaAlugar(game) {
    document.querySelector(`#${game} .dashboard__item__img`).classList.remove("dashboard__item__img--rented");
    document.querySelector(`#${game} .dashboard__item__button`).classList.remove("dashboard__item__button--return");
    document.querySelector(`#${game} .dashboard__item__button`).textContent = "Alugar";
}

function alterarStatus(botao){
    const botaoElement = document.querySelector(`#game-${botao} .dashboard__item__button`);
    
    if (botaoElement.classList.contains("dashboard__item__button--return")) {
        alterarDevolverParaAlugar(`game-${botao}`);
    } else {
        alterarAlugarParaDevolver(`game-${botao}`);
    }
}