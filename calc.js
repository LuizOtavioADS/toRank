
function main() {

    function calcRank(totalJogadores) {
        let jogadores = []
        let opcao = ""

        do {
            opcao = prompt(
                "Olá! Bem vindo ao NerdGame." +
                "\nTotal de jogadores: " + totalJogadores +
                "\n1. Adicionar jogador" +
                "\n2. Remover jogador" +
                "\n3. Sair")

            switch (opcao) {
                case "1":
                    let jogador = {}
                    jogador.nome = prompt("Informe o nome do jogador: ")
                    jogador.vitorias = Number(prompt("Informe quantas vitórias ele tem:"))
                    jogador.derrotas = Number(prompt("Informe quantas derrotas ele tem:"))

                    if (jogador.vitorias - jogador.derrotas < 10) {
                        jogador.rank = "Ferro"
                    } else if (jogador.vitorias - jogador.derrotas > 10 && jogador.vitorias - jogador.derrotas < 20) {
                        jogador.rank = "Bronze"
                    } else if (jogador.vitorias - jogador.derrotas > 20 && jogador.vitorias - jogador.derrotas < 50) {
                        jogador.rank = "Prata"
                    } else if (jogador.vitorias - jogador.derrotas > 50 && jogador.vitorias - jogador.derrotas < 80) {
                        jogador.rank = "Ouro"
                    } else if (jogador.vitorias - jogador.derrotas > 80 && jogador.vitorias - jogador.derrotas < 90) {
                        jogador.rank = "Diamante"
                    } else if (jogador.vitorias - jogador.derrotas > 90 && jogador.vitorias - jogador.derrotas < 100) {
                        jogador.rank = "Lendário"
                    } else {
                        jogador.rank = "Imortal"
                    }

                    const confirma = confirm("Salvar este Player?" +
                        "\nNome: " + jogador.nome +
                        "\nRank: " + jogador.rank)

                    if (confirma) {
                        jogadores.push(jogador)
                        totalJogadores++
                    }
                    break;

                case "2":
                    if (jogadores.length > 0) {
                        jogadores.pop();
                        totalJogadores--;
                        alert("Último jogador removido.");
                    } else {
                        alert("Não há jogadores para remover.");
                    }
                    break;

                case "3":
                    alert("Encerrando...")
                    break;

                default:
                    alert("Opção Inválida!")

            }

        } while (opcao !== "3");

        return totalJogadores;
    }

    let totalJogadores = 0;
    totalJogadores = calcRank(totalJogadores);

}

main();

