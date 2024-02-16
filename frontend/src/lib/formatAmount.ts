const formatAmount = (amount: number) => amount.toLocaleString('sv-SE', { style: 'currency', currency: 'SEK', minimumFractionDigits: 0 })

export default formatAmount
