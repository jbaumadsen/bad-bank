import { createContext, useState } from "react";

export const UserContext = createContext([{name: 'johnny', balance:100}]);

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  // {"name":"johnny","email":"johnnymail","password":"blahblah","balance":100}
  return (
    <UserContext.Provider value={{users, setUsers}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;