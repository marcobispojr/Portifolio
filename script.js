
const el = document.getElementById("typed-text");

const texts = ["Marco Antônio", "Programador"];
let currentText = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const fullText = texts[currentText];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  el.textContent = fullText.substring(0, charIndex);

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentText = (currentText + 1) % texts.length;
  }

  const speed = isDeleting ? 100 : 150;
  setTimeout(typeEffect, speed);
}

typeEffect();

  document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && mensagem) {
      const numeroWhatsApp = '5531986704994';
      const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
      const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
      window.open(link, '_blank');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });

 
  document.getElementById("email-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const emailDestino = "marcobispojr@gmail.com";
    const assunto = encodeURIComponent("Contato Profissional via Portfolio");
    const corpo = encodeURIComponent(`Nome: ${nome}\nMensagem:\n${mensagem}`);

    const mailtoLink = `mailto:${emailDestino}?subject=${assunto}&body=${corpo}`;

    window.location.href = mailtoLink;
  });


