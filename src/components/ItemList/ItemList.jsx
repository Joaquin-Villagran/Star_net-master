import React from 'react';
import './ItemList.css';
// components
import Item from '../Item/Item'


export default function ItemList({param}) {
    return (
        <>
             {param.map((item, index) => (
                <Item param={item} key={index}/>
            ))}
        </>
    )
}
