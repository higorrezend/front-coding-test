export default function paginate (array: Array<any>, perPage: number, pageNumber: number): Array<any> {
  if (Array.isArray(array)) {
    return array.slice((pageNumber - 1) * perPage, pageNumber * perPage)
  }
  return array
}
