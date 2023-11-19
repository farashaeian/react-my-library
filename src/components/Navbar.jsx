import { Green, Purple, Comment } from "../helpers/colors";

const Navbar = () => {
    return (
        <>
            <div className="home-navbar" style={{backgroundColor:Comment}}>
                <span className="pe-2 fw-bold" style={{ color: Green }}>
                    My Library
                </span>
                <i className="fa fa-book" style={{ color: Purple }} />
            </div>
        </>
    );
}

export default Navbar;
