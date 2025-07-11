import {data} from '../restApi.json'


function Menu() {
    return (
        <section className="menu" id="menu">
            <div className="container">
                <div className="heading_section">
                    <h1 className="heading">POPOLAR DISHES</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, in. Ullam dicta cupiditate maxime sint aliquid, qui error nobis fugiat!</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].dishes.map(element =>{
                            return(
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt="" />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Menu