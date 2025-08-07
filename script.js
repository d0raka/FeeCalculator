
document.getElementById('tax-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const buy = parseFloat(document.getElementById('buyPrice').value);
  const sell = parseFloat(document.getElementById('sellPrice').value);
  const qty = parseFloat(document.getElementById('quantity').value);

  const profit = (sell - buy) * qty;
  const taxRate = 0.25;
  const tax = profit > 0 ? profit * taxRate : 0;
  const net = profit - tax;

  document.getElementById('profit').innerText = `$${profit.toFixed(2)}`;
  document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('net').innerText = `$${net.toFixed(2)}`;

  document.getElementById('results').style.display = 'block';
});
