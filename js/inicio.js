function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll('.conteudo-opcao');
    conteudos.forEach(function(conteudo) {
        conteudo.style.display = 'none';
    });

    const selecionado = document.getElementById(id);
    if (selecionado) {
        selecionado.style.display = 'block';
    }
}

// Mostrar a primeira opção por padrão ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    mostrarConteudo('opcao1');
});
