import { useContext } from 'react';
import { Table, Card } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';
import { v4 as uuidv4 } from 'uuid';

function AllData(){
  const { users } = useContext(UserContext);
  return (
    <>
      <Card>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => {
              return (
                <tr key={ uuidv4() }>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </>
  );
}

export default AllData;