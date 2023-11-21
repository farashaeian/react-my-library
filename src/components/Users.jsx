import User from "./User";

const Users = () => {

    const usersList = [];

    return (
        <>
            {usersList.map((item, index) => <User user={item} />)}
        </>
    );
}

export default Users;
