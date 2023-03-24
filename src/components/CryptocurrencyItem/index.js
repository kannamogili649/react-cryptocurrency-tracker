import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrencyData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = eachCurrencyData

  return (
    <li className="currency-item">
      <div className="currency-details">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-val">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
