import { Purple } from "../helpers/colors";

const User = () => {
    return (
        <>
            <div className="col-6 p-3 border border-radius-5" style={{ background: Purple, color: "white" }}>
                <p>Name:{}</p>
                <p>Family:{}</p>
                <p>Borrowed Books:{}</p>
            </div>
        </>
    );
}

export default User;
