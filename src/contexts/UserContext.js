import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(users[0]);
  // {"name":"johnny","email":"johnnymail","password":"blahblah","balance":100}
  return (
    <UserContext.Provider value={{users, setUsers, activeUser, setActiveUser}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;