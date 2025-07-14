document.getElementById('budget-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    const income = +document.getElementById('income').value;
    const fixed = +document.getElementById('fixed').value;
    const variable = +document.getElementById('variable').value;
    const balance = income - (fixed + variable);
    const msg = balance >= 0
      ? `Saldo positivo de R$ ${balance.toFixed(2)}`
      : `Déficit de R$ ${Math.abs(balance).toFixed(2)}`;
    document.getElementById('budget-result').textContent = msg;
});