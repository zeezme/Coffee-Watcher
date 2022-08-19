import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./productManagement.css";
import { BackButton } from "../../components/button/Button";

export function ProductManagement() {
  var [api, setApi] = useState([]);
  var [update, setUpdate] = useState(0);

  const socket = io(
    `http://${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}`
  );

  const deleteItem = (itemId) => {
    socket.emit("delete", itemId);
    console.log("Click");
    //window.location.reload(false);
    update === 0 ? setUpdate(1) : setUpdate(0);
    console.log(update);
  };
  useEffect(() => {
    socket.on("productsList", (message) => {
      console.log(message);
      setApi(message);
    });
    return () => {
      socket.off();
    };
  }, [update]);

  return (
    <div className="product-container">
      {api.map((x) => (
        <div key={x.id} className="product-inner-container">
          <div className="product-item">
            <p className="product-container-text">
              Item:
              <br /> {x.nome}
            </p>

            <p className="product-container-text">
              Preço:
              <br /> R${x.preco}
            </p>
          </div>

          <button
            className="product-item-button"
            onClick={() => {
              deleteItem(x.id);
            }}
          >
            🞭
          </button>
          <BackButton title="voltar" to="/" />
        </div>
      ))}
    </div>
  );
}
