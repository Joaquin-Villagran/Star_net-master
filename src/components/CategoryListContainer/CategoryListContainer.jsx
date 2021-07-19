import React, { useEffect, useState } from 'react';
import './CategoryListContainer.css';

import CategoryList from '../CategoryList/CategoryList'
// base de datos
// import database from '../../DATA/data.json'
import { getFirestore } from '../../FIREBASE/Firebase'

export default function CategoryListContainer() {

    // esta funcion recorre las categorias totales, la filtra para que queden una de cada una.
    // luego las setea al state para pasarlo al componente ItemList
    function loop(param) {
        const exist = []
        const list = param.map(param => param.data().category)

        for (let i = 0; i <= list.length; i++) {
            exist.push(list[i])
        }
        let singleCategory = exist.filter((c, index) => {
            return exist.indexOf(c) === index;
        });
        return singleCategory.filter((x) => x !== undefined)

    }




    const [data, setData] = useState([])


    //    usamos use efect para asignarle la data a nuestro estado y asi poder mapear
    useEffect(() => {
        const db = getFirestore();
        const itemColletction = db.collection('items');

        itemColletction.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('sin items');
            }
            // setData(querySnapshot.docs.map(doc => doc.data()));
            setData(loop(querySnapshot.docs));
            // console.log(loop(querySnapshot.docs))
        }).catch((error) => {
            console.log('Error al buscar item...', error);
        })


        // setData(database)

    }, []);


    return (
        <>
            <CategoryList param={data} />
        </>
    )
}