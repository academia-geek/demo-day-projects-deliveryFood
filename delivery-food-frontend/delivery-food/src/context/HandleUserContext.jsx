import { createContext, useContext, useState } from "react";

const contextHandleUser = createContext();

export const useHandleUser = () => useContext(contextHandleUser);

export const HandleUserProvider = ({ children }) => {
  const [userUbication, setUserUbication] = useState({
    idUsuario: null,
    latitude: 0,
    longitude: 0,
  });

  const addId = (id) => {
    setUserUbication({ ...userUbication, idUsuario: id });
  };

  const setCoordinates = (lat, lng) => {
    setUserUbication({
      ...userUbication,
      latitude: lat,
      longitude: lng,
    });
  };

  console.log(userUbication);

  return (
    <contextHandleUser.Provider
      value={{ userUbication, addId, setCoordinates }}
    >
      {children}
    </contextHandleUser.Provider>
  );
};
