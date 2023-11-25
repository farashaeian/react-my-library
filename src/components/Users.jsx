import User from "./User";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const {data: usersData} = await axios.get(
            "http://localhost:9000/users"
          );
          setUsers(usersData);
  
        } catch (err) {
          console.log(err.message);
        }
      }
      fetchData();
    }, [])

    return (
        <>
            <div className="row">
                <h1 className="text-center p-5">Users</h1>
            </div>
            <hr />
            <div className="p-5">
                {users.map((item, index) => <User key={item.id} user={item} />)}
            </div>
        </>
    );
}

export default Users;
