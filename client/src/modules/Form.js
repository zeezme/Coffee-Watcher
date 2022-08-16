import React from "react";

export default function Form() {
 
  return (
    <>
      <form action={`http://${process.env.REACT_APP_FRONTEND_IP}/productcreate`} method="post">
        <div>
          Adicionar Prato ao sistema
        </div>
        
        <div>
          <h3>Prato</h3>
          <input id="foprato" name="fprato" type="string" />
          <h3>Preço</h3>
          <input id="fpreco" name="fpreco" type="number" />
          <h3>Descrição</h3>
          <input id="fdesc" name="fdesc" type="string" />
        </div>

        <button type="submit">
          submit
        </button>
      </form>
    </>
  );
}
