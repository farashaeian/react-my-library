import { useNavigate } from "react-router-dom";

const Footer = () => {
    let navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }
    return (
        <>
            <div className="px-5 pb-5">
                <button type="button" onClick={handleClick}>Back To Home</button>
            </div>
        </>
    );
}

export default Footer;
