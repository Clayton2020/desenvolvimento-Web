    // função de Menu para que, quando clicar na seta do menu, ele apareça as opções de menu e quando clicar novamente ele desapareça as opções de menu
    function toggleMenu() {
      const menu = document.getElementById("menu-list");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // função de modo escuro para que, quando clicar na seta do sol, ele escureça o site e quando clicar novamente ele clareie o site
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      const icon = document.getElementById("theme-icon");
      if (document.body.classList.contains("dark-mode")) {
        icon.src = "https://img.icons8.com/ios/50/moon-symbol.png";
      } else {
        icon.src = "https://img.icons8.com/ios/50/sun--v1.png";
      }
    }

    let projetoIndex = 0;
    const projetos = document.querySelectorAll(".projeto-item");
    
    // função de mudar projeto para que, quando clicar na seta da direita ele vá para o próximo projeto e quando clicar na seta da esquerda ele volte para o projeto anterior, e quando chegar no último projeto ele volta para o primeiro projeto e quando chegar no primeiro projeto ele volta para o último projeto
    function mudarProjeto(direcao) {
      projetos[projetoIndex].classList.remove("active");
      projetoIndex = (projetoIndex + direcao + projetos.length) % projetos.length;
      projetos[projetoIndex].classList.add("active");
    }
    
    // Enviar mensagem por e-mail para que, quando clicar no botão de enviar, ele envie a mensagem para o e-mail do destinatário e mostre um alerta de que a mensagem foi enviada com sucesso, e se os campos não estiverem preenchidos, ele mostre um alerta para preencher todos os campos antes de enviar.
    function enviarMensagem() {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();
      
      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
      }
      
      const assunto = "Contato pelo site";
      const corpo = `Olá, meu nome é ${nome}%0A%0A${mensagem}%0A%0AEmail de contato: ${email}`;
      window.location.href = `mailto:claytonkeko2019@gmail.com?subject=${assunto}&body=${corpo}`;
      // função de que, a mensagem foi enviada com sucesso/*
      alert("Mensagem enviada com sucesso!");
    }
