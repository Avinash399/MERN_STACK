import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"


function NotFound() {
    return (
        <section className="notFound" id="notFound">
            <div className="container">
                <img src="/notFound.svg" alt="notFound" />
                <p>PAGE NOT FOUND</p>
                <Link to={"/"}>GO BACK <span><HiOutlineArrowNarrowRight /></span></Link>
            </div>
        </section>
    )
}

export default NotFound