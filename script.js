document.getElementById('tax-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const buy = parseFloat(document.getElementById('buyPrice').value);
  const sell = parseFloat(document.getElementById('sellPrice').value);
  const qty = parseFloat(document.getElementById('quantity').value);
  const fee = parseFloat(document.getElementById('fee').value);
  const asset = document.getElementById('assetType').value;
  const pos = document.getElementById('positionType').value;
  const buyDate = new Date(document.getElementById('buyDate').value);
  const sellDate = new Date(document.getElementById('sellDate').value);

  const formatDate = d => d.toLocaleDateString('he-IL', { day: '2-digit', month: 'long', year: 'numeric' });
  const buyStr = formatDate(buyDate);
  const sellStr = formatDate(sellDate);

  let profit = (sell - buy) * qty;
  if (pos === 'שורט') profit = (buy - sell) * qty;
  profit -= fee;

  const taxRate = 0.25;
  const tax = profit > 0 ? profit * taxRate : 0;
  const net = profit - tax;

  document.getElementById('profit').innerText = `${profit.toFixed(2)} ₪`;
  document.getElementById('tax').innerText = `${tax.toFixed(2)} ₪`;
  document.getElementById('net').innerText = `${net.toFixed(2)} ₪`;

  const summaryText = `${buyStr} | ${asset} | ${pos} | ${qty} יח׳ | קנייה ב-${buy}₪ | מכירה ב-${sell}₪ | רווח ${profit.toFixed(2)}₪ | מס ${tax.toFixed(2)}₪ | נטו ${net.toFixed(2)}₪`;
  document.getElementById('summary').value = summaryText;

  document.getElementById('results').style.display = 'block';
});

function copySummary() {
  const text = document.getElementById('summary');
  text.select();
  document.execCommand('copy');
}
