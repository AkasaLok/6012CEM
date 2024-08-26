import "../components/css/about.css";

export function About(){
    return (
        <div className="about-container">
            <div className="about-sidecontainer">
                <br></br>
                <span className="about-title">
                    About Toronto Cupcake
                </span>
                <br></br>
                <span className="about-subtitle">...............</span>
                <br></br>
                <span className="about-text">
                    We are driven by loving what we do and what <br></br>
                    we make everyday. We get to use the finest <br></br>
                    ingredients to make what we believe are the <br></br>
                    tastiest treats around. And.. we love the idea <br></br>
                    that our treats are making people happy every <br></br>
                    time they bite into one. How much fun is that! <br></br>
                </span>
                <br></br>
                <span className="about-subtitle">...............</span>
            </div>
            <div className="about-sidecontainer">
                <br></br>
                <span className="about-subtitle">...............</span>
                <br></br>
                <img src="img/about-main.png" style={{borderRadius:10}}></img>
                <br></br>
                <span className="about-subtitle">About Michelle</span>
                <br></br>
                <span className="about-text">
                Toronto Cupcake was created by Michelle Harrison so she <br></br>
                could pursue her love of baking. A lifelong baker, inspired by <br></br>
                her mother, Michelle opened Toronto Cupcake in August 2010 <br></br>
                as one of Canada's first gourmet cupcakes. <br></br>
                </span>
                <br></br>
                <span  className="about-subtitle">...............</span>
            </div>
        </div>
    )
}