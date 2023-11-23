import User from "./User";

const Users = ({users}) => {

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
