
const _ = {

  // clamp function
  clamp: function(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower)
    const clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },

  // inRange function
  inRange: function(number, start, end) {

    if (!end) {
      end = start
      start = 0
    }
    if (start > end) {
      const temp = end
      end = start
      start = temp
    }

    let isInRange = false
    if (start <= number && number < end) {
      isInRange = true
    }
    return isInRange
  },

  // words function
  words: function(str) {
    return str.split(' ')
  },

  // pad function
  pad: function(str, len) {
    if (len <= str.length) {
      return str
    }

    const startPaddingLen = Math.floor((len - str.length) / 2)
    const endPaddingLen = len - str.length - startPaddingLen
    const paddedString = ' '.repeat(startPaddingLen) + str + ' '.repeat(endPaddingLen)

    return paddedString
  },

  // has function
  has: function(obj, key) {
    let hasValue
    obj[key] !== undefined ? hasValue = true : hasValue = false
    return hasValue
  },

  // invert function
  invert: function(obj) {
    const invertedObj = {}

    for (const key in obj) {
      const originalValue = obj[key]
      invertedObj[originalValue] = key
    }
    
    return invertedObj
  },

  // findKey function
  findKey: function(obj, predicate) {
    for (const key in obj) {
      const value = obj[key]
      const predicateReturnValue = predicate(value)
      if (predicateReturnValue) {
        return key
      }
    }
    return undefined
  },

  // drop function
  drop: function(arr, num) {
    if (!num) {
      num = 1
    }

    const droppedArray = arr.slice(num)
    return droppedArray
  },

  // dropWhile function
  dropWhile: function(arr, predicate) {
    const dropNumber = arr.findIndex(function(element, index, arr) {
      return !(predicate(element, index, arr))
    })

    const droppedArray = this.drop(arr, dropNumber)
    return droppedArray
  },

  // chunk function
  chunk: function(arr, size) {
    const arrayChunks = []
    if (size === undefined) {
      size = 1
    }

    for (let i = 0; i < arr.length; i += size) {
      const arrayChunk = arr.slice(i, (i + size))
      arrayChunks.push(arrayChunk)
    }

    return arrayChunks
  }

}


// Do not write or modify code below this line.
module.exports = _
