/** Блок с курсами валют и ценами на нефть */

function ExchangeRates() {
  const rates = [
    { name: 'USD MOEX', value: '63,52', change: '+0,09' },
    { name: 'EUR MOEX', value: '70,86', change: '+0,14' },
    { name: 'НЕФТЬ', value: '64,90', change: '+1,63%' },
  ];

  return (
    <div className="exchange-rates">
      {rates.map((rate, index) => (
        <span key={index} className="rate-item">
          <strong>{rate.name}</strong> {rate.value} <span className="change">{rate.change}</span>
        </span>
      ))}
      <button className="more-btn">...</button>
    </div>
  );
}

export default ExchangeRates;