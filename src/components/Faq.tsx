import { useState } from "react";
import "../components/css/faq.css";
import "../components/css/popup.css";

export function Faqs(){

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const openPopup = (index: number) => (e: React.MouseEvent<HTMLSpanElement>) => {
        setIsPopupOpen(true);

        var targetTitle = "";
        var targetText = "";
        
        switch(index){
            case 0:
                targetTitle = "How much time for a custom order?"
                targetText = "It would be very helpful if you could give a minimum of 48 hours notice when ordering something special. For personalised stamping such as initials or logos please call or email us."
                break;
            case 1:
                targetTitle = "What is the smallest order I can make?"
                targetText = "Minimum order is 1/2 dozen assorted cupcakes."
                break;
            case 2:
                targetTitle = "What are my options for payment?"
                targetText = "We will accept cheque, money orders, all major credit cards, and paypal. We can also accept payment via email interac transaction (Canada only)."
                break;
            case 3:
                targetTitle = "When and how do I pay?"
                targetText = "Payment is due when you receive your invoice via email. After you have successfully completed an order you will receive an order confirmation email from Toronto Cupcake. Shortly afterwards you will be sent an invoice that can be paid online."
                break;
            case 4:
                targetTitle = "Does Toronto Cupcake deliver?"
                targetText = "Yes! Toronto Cupcake delivers to all locations in the GTA and surrounding areas. The minimum order for delivery is 1/2 dozen. Delivery to most downtown Toronto postal codes is $13.00. We deliver to a radius of approximately 80KM from downtown Toronto. If you need a delivery outside of this area please contact us. Delivery windows are 8-noon and noon-6 within Toronto. Outside of Toronto is noon-6."
                break;
            case 5:
                targetTitle = "What is the earliest time I can have my cupcakes delivered?"
                targetText = "Our earliest delivery window is 8am to noon. Our latest delivery window is noon to 6pm, 7 days a week. If you need something outside of this delivery schedule please call or email us and we will try to accommodate."
                break;
            case 6:
                targetTitle = "Can I pickup my cupcakes?"
                targetText = "Yes! Please contact us to make arrangements."
                break;
            case 7:
                targetTitle = "What if the person isn't home?"
                targetText = "When you order you will be asked to provide a contact name and number at the deliver to location. It is your responsibility to make sure someone will be at the delivery location during the delivery time. We do our best to leave the delivery with someone or indoors. On occasion we may leave your delivery at the door."
                break;
            case 8:
                targetTitle = "Does Toronto Cupcake have gluten-free cupcakes?"
                targetText = "Yes, by special order. Please contact us. There is a min order of a dozen."
                break;
            case 9:
                targetTitle = "What colours do you have?"
                targetText = "As we hand-make our own colours we can do any colour!"
                break;
            case 10:
                targetTitle = "Do you offer special icing colours?"
                targetText = "Yes, we do offer special icing colours. Please try and give us as much advanced notice as you can when requesting special colours and we will do our best to accommodate."
                break;
            case 11:
                targetTitle = "Toronto Cupcake Allergen Alert"
                targetText = "Toronto Cupcake is NOT a nut-free kitchen. Several of our flavours use peanuts or other nut products. We recommend that customers with severe allergies err on the side of caution and not eat our cupcakes. Please be aware that our cupcakes may contain or come into contact with common allergens, such as dairy, eggs, wheat, soybeans, tree nuts, or peanuts"
                break;
            case 12:
                targetTitle = "How do I store my cupcakes?"
                targetText = "If you are planning on eating them within a day you can store them at room temperature. If you are not going to eat them right away you can freeze them. To thaw them, take them out of the freezer and cover them lightly with plastic wrap while they thaw. This will minimize condensation forming on the cupcakes. They should be ready to eat in about an hour. You should not refrigerate your cupcakes overnight because they will dry out."
                break;
            case 13:
                targetTitle = "Are you able to personalise cupcakes?"
                targetText = "Challenge us!! We are so excited to create personalised cupcakes for you. From traditional hand stamped initials or logos to hand moulded 3D characters we are up to the task. Check out our occasions page to see some of our work. Please give us a call or email to discuss your ideas."
                break;
            case 14:
                targetTitle = "Do I need to order my cupcakes in advance?"
                targetText = "Not at all, unless you would like to have something specially made for you. It would be very helpful if you could give a minimum of 48 hours notice when ordering something special."
                break;
        }

        setTitle(targetTitle);
        setText(targetText);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="faq-container">
            <div className="faq-main-container">
                <span className="faq-title">FAQs</span>
                <br></br>
                <div className="faq-question-container">
                    <div className="faq-question-column">
                        <span className="faq-question-title">ORDERING</span>
                        <span className="faq-question-clickable" onClick={openPopup(0)}>How much time for a custom order?</span>
                        <span className="faq-question-clickable" onClick={openPopup(1)}>What is the smallest order I can make?</span>
                        <span className="faq-question-clickable" onClick={openPopup(2)}>What are my options for payment?</span>
                        <span className="faq-question-clickable" onClick={openPopup(3)}>When and how do I pay?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">DELIVERY</span>
                        <span className="faq-question-clickable" onClick={openPopup(4)}>Does Toronto Cupcake deliver?</span>
                        <span className="faq-question-clickable" onClick={openPopup(5)}>What is the earliest time I can get my delivery?</span>
                        <span className="faq-question-clickable" onClick={openPopup(6)}>Can I pickup my cupcakes?</span>
                        <span className="faq-question-clickable" onClick={openPopup(7)}>What if the person isn't home?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">INGREDIENTS</span>
                        <span className="faq-question-clickable" onClick={openPopup(8)}>Do you have gluten free cupcakes?</span>
                        <span className="faq-question-clickable" onClick={openPopup(9)}>What colours do you have?</span>
                        <span className="faq-question-clickable" onClick={openPopup(10)}>Do you offer special icing colours?</span>
                        <span className="faq-question-clickable" onClick={openPopup(11)}>Toronto Cupcake products - Allergens?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">OTHER</span>
                        <span className="faq-question-clickable" onClick={openPopup(12)}>How do I store my cupcakes?</span>
                        <span className="faq-question-clickable" onClick={openPopup(13)}>Are you able to personalize cupcakes?</span>
                        <span className="faq-question-clickable" onClick={openPopup(14)}>Do I need to order my cupcakes in advance?</span>
                    </div>
                </div>
            </div>

            {
                isPopupOpen && 

                <div className="popup-container" onClick={closePopup}>
                    <div className="popup-text-container">
                        <h1 className="popup-title">{title}</h1>
                        <br></br>
                        <span className="popup-text">{text}</span>
                    </div>
                </div>
            }
            
        </div>
    )
}