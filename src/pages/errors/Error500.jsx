import React from "react";
import ErrorDesk from "../../components/UI/ErrorDesk";
import ErrorTitle from "../../components/UI/ErrorTitle";

function Error500 () {
  return(
    <div className="container">
      <ErrorTitle>Error 500</ErrorTitle>
      <ErrorDesk>Ошибка с сервером.</ErrorDesk>
    </div>
  );
}

export default Error500;