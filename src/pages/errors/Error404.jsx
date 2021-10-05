import React from "react";
import ErrorDesk from "../../components/UI/ErrorDesk";
import ErrorTitle from "../../components/UI/ErrorTitle";

function Error404 () {
  return(
    <div className="container">
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorDesk>Страница не найдена.</ErrorDesk>
    </div>
  );
}

export default Error404;