// import React from 'react'
const itemsDB = [
    {id : 1,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 5,
    initial : 1,
    imageurl:'https://i.postimg.cc/d0gmQLJx/ezgif-1-af262c8f1c.png'},
    {id : 2,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 6,
    initial : 1,
    imageurl:'https://i.postimg.cc/d0gmQLJx/ezgif-1-af262c8f1c.png'},
    {id : 3,
    name: 'Liquid Soap',
    type:"misc",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 5,
    initial : 1,
    imageurl:'https://i.postimg.cc/MGnm8yJB/ezgif-1-742412795b.png'},
    {id : 4,
    name: 'Jabonardo',
    type:"soapbar",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 7,
    initial : 1,
    imageurl:'https://i.postimg.cc/d0gmQLJx/ezgif-1-af262c8f1c.png'},
    {id : 5,
    name: 'Liquid Soap',
    type:"misc",
    precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 2,
    initial : 1,
    imageurl:'https://i.postimg.cc/MGnm8yJB/ezgif-1-742412795b.png'},
    {id : 6,
    name: 'Liquid Soap',
    type:"misc",
     precio : '120$',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
    stock : 3,
    initial : 1,
    imageurl:"https://i.postimg.cc/MGnm8yJB/ezgif-1-742412795b.png"}]
    

export const itemsPromise = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(itemsDB.length>0){
                resolve(itemsDB)
            }else{
                reject('error al obtener los items')
            }
        }, timeout);
    })
}

export const itemsPromiseid = (id,timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsDB.filter(item => item.id===2))
            reject ('error al obtener el item con id :'+id)
        }, timeout);
    })
}

export const itemsbyFilter = (filter,timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(itemsDB.filter(item => 
                // hay que agregar el fiter
                item))
            reject ('error al obtener el item con id :'+filter)
        }, timeout);
    })
}
