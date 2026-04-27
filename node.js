 // uso de get ElementById que, essa variavel na hora de clicar, ela abirá, uma lista/*
    function toggleMenu() {
      const menu = document.getElementById("menu-list");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    // modo de clicar no sol que fica no escuro que quando ela clica ela fica escuro caso contrário, ela volta para uma cor original/*
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
    
    // funcao de mudar para a proxima imagem com a descrição junto/*
    function mudarProjeto(direcao) {
      projetos[projetoIndex].classList.remove("active");
      projetoIndex = (projetoIndex + direcao + projetos.length) % projetos.length;
      projetos[projetoIndex].classList.add("active");
    }
    
    // Função de iniciarConversa que, através disso, você consegue mandar a mensagem para o whatssap/*
    function iniciarConversa() {
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim() || '5511940455879';
      const mensagem = document.getElementById('mensagem').value.trim();
      // se não preencher de forma corretamente fara que voce preencha seu nome e a mensagem antes de enviar/*
      if (!nome || !mensagem) {
        alert("Por favor, preencha seu nome e a mensagem antes de enviar.");
        return;
      }
      
      // Apresento na hora de poder conversar e abre no whatssap com essa mensagem que colocou através dos preenchimentos que fez na hora de enviar a mensagem para mim/*
      const msgFormatada = `Olá, meu nome é ${nome}. Mensagem: ${mensagem}`;
      const confirmar = confirm("Deseja iniciar a conversa pelo WhatsApp?");
      if (confirmar) {
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msgFormatada)}`;
        window.open(url, '_blank');
      }
    }