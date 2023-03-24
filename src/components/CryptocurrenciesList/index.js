import {Component} from 'react'
import {Loader} from 'react-loader-spinner'
import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))
    this.setState({currencyData: updatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state
    return (
      <div className="content-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="currency-container">
          <div className="heading-div">
            <h1>Coin Type</h1>
            <div className="currency">
              <h1>USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          <ul className="list-container">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              currencyData.map(eachData => (
                <CryptocurrencyItem
                  eachCurrencyData={eachData}
                  key={eachData.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
