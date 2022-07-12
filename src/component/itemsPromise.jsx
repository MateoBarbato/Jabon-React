import DBjson from '../DB.json'
const itemsDB = DBjson

export const itemsPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (itemsDB.length > 0) {
        resolve(itemsDB)
      } else {
        reject('error al obtener los items')
      }
    }, timeout)
  })
}

export const itemsPromiseid = (id, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsDB.filter(item => item.id === id))
      reject('error al obtener el item con id :' + id)
    }, timeout)
  })
}

export const itemsbyFilter = (filter, timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(itemsDB.filter(item =>
      // hay que agregar el fiter
        item))
      reject('error al obtener el item con id :' + filter)
    }, timeout)
  })
}
