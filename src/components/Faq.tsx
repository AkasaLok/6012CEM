import "../components/css/faq.css";

export function Faqs(){
    return (
        <div className="faq-container">
            <div className="faq-main-container">
                <span className="faq-title">FAQs</span>
                <br></br>
                <div className="faq-question-container">
                    <div className="faq-question-column">
                        <span className="faq-question-title">ORDERING</span>
                        <span className="faq-question-clickable">How much time for a custom order?</span>
                        <span className="faq-question-clickable">What is the smallest order I can make?</span>
                        <span className="faq-question-clickable">What are my options for payment?</span>
                        <span className="faq-question-clickable">When and how do I pay?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">DELIVERY</span>
                        <span className="faq-question-clickable">Does Toronto Cupcake deliver?</span>
                        <span className="faq-question-clickable">What is the earliest time I can get my delivery?</span>
                        <span className="faq-question-clickable">Can I pickup my cupcakes?</span>
                        <span className="faq-question-clickable">What if the person isn't home?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">INGREDIENTS</span>
                        <span className="faq-question-clickable">Do you have gluten free cupcakes?</span>
                        <span className="faq-question-clickable">What colours do you have?</span>
                        <span className="faq-question-clickable">Do you offer special icing colours?</span>
                        <span className="faq-question-clickable">Toronto Cupcake products - Allergens?</span>
                    </div>
                    <div className="faq-question-column">
                        <span className="faq-question-title">OTHER</span>
                        <span className="faq-question-clickable">How do I store my cupcakes?</span>
                        <span className="faq-question-clickable">Are you able to personalize cupcakes?</span>
                        <span className="faq-question-clickable">Do I need to order my cupcakes in advance?</span>
                    </div>
                </div>
            </div>
        </div>
    )
}