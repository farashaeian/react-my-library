import { Purple } from "../helpers/colors";

const User = ({user}) => {
    return (
        <>
            <div className="p-3 border border-radius-5" style={{ background: Purple, color: "white", width:"400px" }}>
                <p>Name:{user.Name}</p>
                <p>Family:{user.Family}</p>
                <p>Borrowed Books:{user.BorroewdBooks}</p>
            </div>
        </>
    );
}

export default User;
