// import React from 'react'

const itemsPromise = new Promise(
    (resolve,reject)=>{
        const itemsDB = [
            {id : 1,
            name: 'Jabonardo',
            precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 5,
            initial : 1,
            imageurl:'../soapItem.png'},
            {id : 2,
            name: 'Jabonardo',
            precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 6,
            initial : 1,
            imageurl:'../soapItem.png'},
            {id : 3,
            name: 'Jabonardo',
            precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 5,
            initial : 1,
            imageurl:'../soapItem.png'},
            {id : 4,
            name: 'Jabonardo',
            precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 7,
            initial : 1,
            imageurl:'../soapItem.png'},
            {id : 5,
            name: 'Jabonardo',
            precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 2,
            initial : 1,
            imageurl:'../soapItem.png'},
            {id : 6,
            name: 'Jabonardo',
             precio : '120$',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
            stock : 3,
            initial : 1,
            imageurl:'../soapItem.png'}]
        if(itemsDB.length>0){
            resolve(itemsDB)
        }else{
            reject('error al obtener los items')
        }
    }
)

export default itemsPromise;