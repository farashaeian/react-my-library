import { Purple } from "../helpers/colors";

const User = ({user}) => {
    return (
        <>
            <div className="col-6 p-3 border border-radius-5" style={{ background: Purple, color: "white" }}>
                <p>Name:{user.Name}</p>
                <p>Family:{user.Family}</p>
                <p>Borrowed Books:{user.BorroewdBooks}</p>
            </div>
        </>
    );
}

export default User;
