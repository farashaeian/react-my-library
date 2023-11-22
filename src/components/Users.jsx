import User from "./User";

const Users = () => {

    const usersList = [];

    return (
        <>
            <div className="p-5">
                <h4 className="p-5">Users</h4>
            </div>
            <div className="p-5">
                {usersList.map((item, index) => <User user={item} />)}
            </div>
        </>
    );
}

export default Users;
