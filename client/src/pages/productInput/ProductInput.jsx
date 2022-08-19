import React from "react";
import "./productInput.css";
import { BackButton } from "../../components/button/Button";

export function ProductInput() {
  return (
    <div className="general">
      <div className="product-form-container">
        <form
          action={`http://${process.env.REACT_APP_BACKEND_IP}:${process.env.REACT_APP_BACKEND_PORT}/productcreate`}
          method="post"
        >
          <div className="product-form">
            <p className="product-form-text">Nome</p>
            <input
              className="product-form-input"
              type="text"
              name="NOME"
              id="NOMEID"
              required
            />
            <p className="product-form-text">Preço</p>
            <input
              className="product-form-input"
              type="number"
              name="PRECO"
              id="PRECOID"
              required
            />
            <p className="product-form-text">Descrição</p>
            <input
              className="product-form-input"
              type="text"
              name="DESC"
              id="DESCID"
              required
            />
          </div>

          <div className="product-form-button-container">
            <button className="product-form-button" type="submit">
              ➤
            </button>
          </div>
        </form>
      </div>
      <BackButton title="voltar" to="/" />
    </div>
  );
}
