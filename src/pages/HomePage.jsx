import React from "react";

import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | CSCORP ECOMMERCE</title>
      </Helmet>
      <div className="container" data-testid="container">
        <p>Home page</p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
