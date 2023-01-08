const NumberFormat = ({ price }) => {
    return Intl.NumberFormat('en-PK', {
        style: 'currency',
        currency: 'PKR',
        maximumFractionDigits: 3
    }).format(price / 100);
}
export default NumberFormat