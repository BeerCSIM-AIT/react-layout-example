import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">Not Found :( </h1>
      <hr />
      <p className="mt-8 mb-20 text-blue-950">
       There is no page you requested.  Apologize for the inconvenience.
      </p>
    </Layout>
  );
};

export default NotFound;
