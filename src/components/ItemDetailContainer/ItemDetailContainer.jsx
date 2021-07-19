// lista d epasos para poder renderizar los detalles
// 1) importar react, hooks: usestate, useEffect...
// 2) importar useParams para poder matchear los id
// 3) importamos los componentes y base de datos
// 4) usamos useEfect para poder incluir con USEPARAMS los id  y asi coincidir solo
// un elemento de la base de datos (id - 1 porque no tenemos id 0)
// 5) seteamos el state con la respuesta  de la base de datos y la pasamos al componente ITEMDETAIL

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";
// components
import ItemDetail from "../ItemDetail/ItemDetail";
// data base
//import database from '../../DATA/data.json'
import { getFirestore } from "../../FIREBASE/Firebase";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  console.log(typeof id);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection(`items`);

    itemCollection
      .get()
      .then((querySnapshot) => {
        const filter = querySnapshot.docs.find(
          (doc) => doc.data().id === parseInt(id)
        );
        console.log(typeof filter);
        if (querySnapshot.size === 0) {
          console.log("sin items");
        } else if (filter) {
          setItem(filter.data());
        }
      })
      .catch((error) => {
        console.log("Error al buscar item...", error);
      });

  }, [id]);

  return (
    <div>
      <div className="ItemDetail-Container">
        <ItemDetail param={item}  />
      </div>
      <div className="detail_underCard">
        <div className="underCard_container">
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}