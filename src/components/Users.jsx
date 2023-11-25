import User from "./User";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";

const Users = () => {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: usersData } = await axios.get(
                    "http://localhost:9000/users"
                );
                setUsers(usersData);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredUsers = users.filter((user) =>
        searchTerm !== '' && user.Name.toLowerCase().includes(searchTerm.toLowerCase()));

    const showUser = (user) => {
        setSelectedUser(user);
    }

    return (
        <>
            <div className="row">
                <h1 className="text-center p-5">Users</h1>
            </div>
            <hr />
            <div className="row">
                <div className="p-5 col-4">
                    {users.map((item, index) => <span onClick={() => showUser(item)}><User key={item.id} user={item} /></span>)}
                </div>
                <div className="p-5 col-4">
                    <input
                        type="text"
                        placeholder="Search A User Name..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    {searchTerm !== '' && (<>
                        {filteredUsers.length > 0 ? (
                            filteredUsers.map((item, index) => (
                                <p key={index} onClick={() => showUser(item)}>
                                    {item.Name}{" "}{item.Family}
                                </p>
                            ))
                        ) : (
                            <p>No matching books found</p>
                        )}
                    </>)}
                </div>
                <div className="p-5 col-4">
                    <h3>Selected Book</h3>
                    {selectedUser && (<User user={selectedUser} />)}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Users;
