

// Adiciona evento onclick ao botão de orçamento
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona evento onclick ao link "Sobre" para rolar até a seção sobre
    const linkSobre = document.querySelector('a[href="./sobre.html"]');
    if (linkSobre) {
        linkSobre.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o redirecionamento padrão
            const secaoSobre = document.querySelector('.section3');
            if (secaoSobre) {
                secaoSobre.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Adiciona evento de submit ao formulário "fale conosco"
    const formFaleConosco = document.querySelector('.div2 form');
    if (formFaleConosco) {
        formFaleConosco.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio padrão do formulário
            
            // Coleta os dados do formulário
            const email = this.querySelector('input[type="email"]').value;
            const telefone = this.querySelector('input[type="tel"]').value;
            const mensagem = this.querySelector('input[type="text"]').value;
            
            // Validação simples
            if (!email || !telefone || !mensagem) {
                alert('Por favor, preencha todos os campos do formulário!');
                return;
            }
            
            // Monta a mensagem para WhatsApp
            const mensagemWhatsApp = `*NOVO CONTATO DO SITE*%0A%0A` +
                `*Email:* ${email}%0A` +
                `*Telefone:* ${telefone}%0A` +
                `*Mensagem:* ${mensagem}%0A%0A` +
                `*Data:* ${new Date().toLocaleString('pt-BR')}`;
            
            // Número do WhatsApp da empresa
            const numeroWhatsApp = '5511948156202';
            
            // Redireciona para WhatsApp com a mensagem
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemWhatsApp}`, '_blank');
            
            // Limpa o formulário após envio
            this.reset();
            
            // Confirmação para o usuário
            alert('Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.');
        });
    }
});
