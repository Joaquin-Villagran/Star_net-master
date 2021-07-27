import React, { useEffect, useState } from "react";
import "./CategoryListContainer.css";

import CategoryList from "../CategoryList/CategoryList";
import { getFirestore } from "../../FIREBASE/Firebase";

export default function CategoryListContainer() {
  function loop(param) {
    const exist = [];
    const list = param.map((param) => param.data().category);

    for (let i = 0; i <= list.length; i++) {
      exist.push(list[i]);
    }
    let singleCategory = exist.filter((c, index) => {
      return exist.indexOf(c) === index;
    });
    return singleCategory.filter((x) => x !== undefined);
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemColletction = db.collection("items");

    itemColletction
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("sin items");
        }
        setData(loop(querySnapshot.docs));
      })
      .catch((error) => {
        console.log("Error al buscar item...", error);
      });
  }, []);

  return (
    <>
      <CategoryList param={data} />
    </>
  );
}
