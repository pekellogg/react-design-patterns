import React, { useState } from "react";
import axios from "axios";

const UserLoader = ({ children, userId }) => {
  const [user, setUser] = useState(null);

  function fetchResource() {
    return (
      axios
        .get(`/${resource}`)
        .then((response) => response.data)
    );
  }

 return (
  <>
    {
      React.Children.map((children, child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user: something});
        }
        return child;
      })
    }
  </>
 );
};

export default UserLoader;