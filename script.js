// Manejo del formulario de contacto / solicitudes de Daniel
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('client-request-form');
  const feedback = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      setTimeout(() => {
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.backgroundColor = '#d3f9d8';
          feedback.style.color = '#2b8a3e';
          feedback.style.border = '1px solid #b2f2bb';
          feedback.style.padding = '12px 16px';
          feedback.style.borderRadius = '6px';
          feedback.style.marginTop = '16px';
          feedback.style.fontSize = '0.88rem';
          feedback.textContent = '¡Gracias por tu mensaje! Daniel ha recibido tu solicitud y se pondrá en contacto pronto.';
        } else {
          alert('¡Gracias por tu mensaje! Daniel se pondrá en contacto pronto.');
        }

        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 800);
    });
  }
});
