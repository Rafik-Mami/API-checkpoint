import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const Userlist = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
    }

    fetchData();
  }, []);
  return (
    <div>
      <h1>List of Users</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Full Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>#{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Userlist;
