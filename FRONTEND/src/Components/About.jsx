import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";


function About() {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The onlything we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim culpa labore necessitatibus quos quia, exercitationem aliquam expedita dolor odio nulla dolorem consectetur maxime ullam fugiat dicta libero! Nulla corporis velit, libero id rem eius ipsa deserunt consequatur mollitia provident officiis impedit, voluptate autem. Quia tempore possimus et error rem.
                </p>
                <Link to={"/"}>
                    Explore Menu{" "}
                    <span><HiOutlineArrowNarrowRight /></span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About