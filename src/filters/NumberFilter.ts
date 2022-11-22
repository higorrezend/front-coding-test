const hasOnlyOneDigitAfterTheComma = function (number: string | number): boolean {
  return (number.toString().split('.').length - 1) > 0 && number.toString().split('.')[1].length === 1
}

const numberFilter = function (number: string | number): string {
  if (number) {
    if (hasOnlyOneDigitAfterTheComma(number)) {
      number = `${number}0`
    }
    return number.toLocaleString('pt-BR')
  }
  return number === 0 ? '0' : number.toString()
}

export default numberFilter
