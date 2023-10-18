export default function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length)
  return arr[rand]
}
