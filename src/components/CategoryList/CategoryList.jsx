import React from 'react';
import './CategoryList.css';
// components
import Category from '../Category/Category'


export default function CategoryList({param}) {
    return (
        <div className="categoryList">
             {param.map((item, index) => (
                <Category param={item} key={index}/>
            ))}
        </div>
    )
}
