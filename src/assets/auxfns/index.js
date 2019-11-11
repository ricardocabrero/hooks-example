export const transformArr = (arr) => {
  return arr.map(x => x.toLowerCase())
}
  
export const filterElements = (arr, item) => {
  return arr.filter(x => x !== item)
}
  
export const filterIncludes = (arr, item) => {
  return arr.includes(item)
}

export const lowerCase = (el) => {
  return el.toLowerCase()
}
