import User from "./User";

const Users = () => {

    const usersList = [];

    return (
        <>
            <div className="row">
                <h1 className="text-center p-5">Users</h1>
            </div>
            <hr />
            <div className="p-5">
                {usersList.map((item, index) => <User user={item} />)}
            </div>
        </>
    );
}

export default Users;
