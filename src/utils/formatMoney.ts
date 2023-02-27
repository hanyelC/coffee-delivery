export const formatMoney = (value: number) => {
  const currency = 'BRL'
  const currencySymbol = 'R$'

  const formattedValue = value.toFixed(2).replace('.', ',')

  const formattedValueWithSymbol = currencySymbol + ' ' + formattedValue

  return { currency, currencySymbol, formattedValue, formattedValueWithSymbol }
}
