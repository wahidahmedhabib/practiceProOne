
import React from "react"
import "../App.css" 
const HeroSec = () => {

    return (
        <>
            {/* <img src="/project_2/src/images/281148593-400x300.jpeg" alt="" /> */}
            <div className="hero_content">
                <div className="text_area">
                    <div className="text">
                        We Don't just Sell Cars <br />
                        We Sell Luxury
                    </div>
                    <p>
                        car is a vehicle that has wheels, carries a small number of passengers, and is moved by an engine or a motor. Cars are also called automobiles or motor vehicles. Trucks and buses are motor vehicles as well. However, trucks and buses are larger than cars, and they carry heavier loads.
                    </p>
                    <div className="btns">
                        <button className="shop_btn" >Shop Now</button>
                        <button className="shop_btn category"> Category</button>
                    </div>
                    <div className="avail">
                        also  available
                    </div>
                    <div className="logoos">
                        {/* <img src="../images/01cada77a0a7d326d85b7969fe26a728.jpg" alt="" /> */}
                        <img src="src/images/oolx.png" height={40} alt="logo" />

                        <img src="src/images/amazon.jpg" height={40} alt="logo" />
                        {/* <img src="../images/logo.png" alt="logo" /> */}
                        {/* <img src="../images/281148593-400x300.jpeg" alt="logo" /> */}
                        {/* <img src="../images/01cada77a0a7d326d85b7969fe26a728.jpg" alt="logo" /> */}


                    </div>
                </div>

                <div className="hero_img">
                    <img src="src/images/car11.png" alt="" />
                </div>
            </div>
        </>
    )

}

export default HeroSec