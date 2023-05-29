import { useState } from "react";

export const HomeViews = () => {
  const [state, _] = useState("Hola mundo");

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>{state}</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeViews;
