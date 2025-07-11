import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Reservation() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();

    const handleResarvation = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:4000/api/v1/resarvation/send", { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true
                }
            );
            toast.success(data.message);
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone("");
            navigate("/success");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }


    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Questions, Please Call</p>
                        <form onSubmit={handleResarvation}>
                            <div>
                                <input
                                    type="text"
                                    value={firstName}
                                    placeholder="First Name"
                                    onChange={(e) => setFirstName(e.target.value)} />
                                <input
                                    type="text"
                                    value={lastName}
                                    placeholder="Last Name"
                                    onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div>
                                <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                                <input type="time" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
                            </div>
                            <div>
                                <input className="email_tag" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                              <button type="submit" className="menuBtn">RESERVE NOW <span><HiOutlineArrowNarrowRight /></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reservation