document.getElementById('quiz-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    const ans = document.querySelector('input[name="q1"]:checked').value;
    let profile = '';
    if (ans === 'conservador') profile = 'Conservador';
    else if (ans === 'moderado') profile = 'Moderado';
    else profile = 'Arrojado';
    document.getElementById('quiz-result')
      .textContent = `Seu perfil financeiro: ${profile}`;
});