import "../components/css/home.css";

export function Home(){

    const handleIconClick = () => {
        window.location.href = "/cupcake";
    };

    return (
        <div className="home-container">
            <div className="home-paragraph-image-container">
                <span className="home-paragraph">
                    Welcome! <br></br>
                    Thank you for stopping by Toronto Cupcake.<br></br>
                    Canada's and the GTA's favourite shop <br></br>
                    for that special treat.<br></br>
                    <br></br>
                    Order cupcakes online 24/7 for your special event.<br></br>
                    Delivery available most days between 8 and 6pm TO time.<br></br>
                </span>
                <div className="home-image-container" onClick={handleIconClick}>
                    <img src="img/TO-home-logo.png" className="home-image"></img>
                </div>
            </div>
            <span className="home-paragraph">
                <br></br>
                Celebrating our 13th year of providing Canada's most delicious cupcakes for business meetings,<br></br>
                birthdays, weddings, or for no other reason than because our cupcakes are baked daily using the finest ingredients.<br></br>
                <br></br>
                Cupcake delivery is available throughout Toronto, the GTA, and beyond.<br></br>
                Cupcakes are delivered in our signature pink box.
            </span>
        </div>
    )
}