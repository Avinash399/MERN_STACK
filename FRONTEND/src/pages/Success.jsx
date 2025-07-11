import { useEffect } from "react";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";


function Success() {

    const [counDown, setCowndown] = useState(10);
    const navigate = useNavigate();

    useEffect(() =>{

        const timeoutId = setInterval(() =>{
            setCowndown((preCount) =>{
                if (preCount === 1) {
                    clearInterval(timeoutId);
                    navigate("/");
                }
                return preCount - 1;
            });
        },1000);
            return () => clearInterval(timeoutId);

    }, [navigate]);

    return (
       <section className="notFound">
        <div className="container">
            <img src="/sandwich.png" alt="sandwich" />
            <h1>Redirecting to home in {counDown} seconds.....</h1>
            <Link to={"/"}>GO BACK HOME <span><HiOutlineArrowNarrowRight /></span></Link>
        </div>
       </section>
    )
}

export default Success