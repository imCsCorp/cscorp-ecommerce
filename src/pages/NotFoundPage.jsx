import React from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ups | CSCORP ECOMMERCE</title>
      </Helmet>
      <React.Fragment>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1 fw-bold" data-testid="title">
              404
            </h1>
            <p className="fs-3">
              <span data-testid="test-msg" className="text-danger">
                Opps!
              </span>{" "}
              Pagina no encontrada.
            </p>
            <p className="lead">
              La pagina a la cual quieres acceder no existe.
            </p>
            <Link
              className="btn btn-primary"
              to="/"
              data-testid="go-home"
            >
              Ir al inicio
            </Link>
          </div>
        </div>
      </React.Fragment>
    </React.Fragment>
  );
};

export default NotFoundPage;
