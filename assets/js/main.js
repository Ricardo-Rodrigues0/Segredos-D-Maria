  document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Pegando os valores
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;

    // Formatando a mensagem
    const texto = `Olá! Gostaria de entrar em contato com as seguintes informações:
*Nome:* ${nome}
*Email:* ${email}
*Telefone:* ${telefone}
*Assunto:* ${assunto}
*Mensagem:* ${mensagem}`;

    // Número do WhatsApp (com DDI e DDD, sem espaços ou traços)
    const numeroWhatsApp = "5531992898271"; // <- Substitua com o número desejado

    // Redireciona para o WhatsApp com a mensagem
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURI(texto)}`, "_blank");
  });