document.getElementById('sim-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    let P = +document.getElementById('sim-principal').value;
    const m = +document.getElementById('sim-monthly').value;
    const r = +document.getElementById('sim-rate').value / 100;
    const n = +document.getElementById('sim-years').value;
    for (let i = 0; i < n * 12; i++) {
      P = (P + m) * (1 + r / 12);
    }
    document.getElementById('sim-result')
      .textContent = `Valor acumulado: R$ ${P.toFixed(2)}`;
});