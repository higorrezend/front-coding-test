const sortArrayAlphabetically = function (array: Array<any>, property: any, direction: string): Array<any> {
  if (arrayIsValid(array, property)) {
    return sortArray(array, property, direction)
  }
  return array
}

const arrayIsValid = function (array: Array<any>, property: string): boolean {
  const isArrayOfStringList = typeof array[0] === 'string'
  const isArrayOfObjectsAndIsValid = typeof array[0] === 'object' && !!property && typeof property === 'string'
  return Array.isArray(array) && array.length > 0 && (isArrayOfStringList || isArrayOfObjectsAndIsValid)
}

const sortArray = function (array: Array<any>, property: string, direction: string): Array<any> {
  if (typeof array[0] === 'object') {
    return sortArrayOfObjects(array, property, direction)
  } else if (typeof array[0] === 'string') {
    return sortArrayOfStringList(array, direction)
  }
  return array
}

const sortArrayOfObjects = function (array: Array<any>, property: string, direction: string): Array<any> {
  return array.sort((a, b) => {
    if (direction === 'ASC') {
      if (a[property] < b[property]) return -1
      if (a[property] > b[property]) return 1
    } else {
      if (a[property] > b[property]) return -1
      if (a[property] < b[property]) return 1
    }
    return 0
  })
}

const sortArrayOfStringList = function (array: Array<any>, direction: string): Array<any> {
  return array.sort((a, b) => {
    if (direction === 'ASC') {
      if (a < b) return -1
      if (a > b) return 1
    } else {
      if (a > b) return -1
      if (a < b) return 1
    }
    return 0
  })
}

export default sortArrayAlphabetically
