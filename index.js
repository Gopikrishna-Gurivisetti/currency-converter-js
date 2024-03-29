import Freecurrencyapi from 'currency-exchangeapi-js';
const freecurrencyapi = new Freecurrencyapi('YOUR-API-KEY');

// Convert fromCurrency to toCurrency units
export async function convertCurrency(fromCurrency, toCurrency, units) {
   const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
}