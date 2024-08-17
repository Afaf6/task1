import "./DetailsContainer.css";
import CartIcon from "../../assets/Images/icon-cart.svg"

function DetailsContainer(){
return (
    <div id="DetailsDiv" >
        <label id="NameProduct">PERFUME</label>
        <h1 id="Header" >Gabrielle Essence Eau De Perfum</h1>
        <p id="Description">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creat for the House of CHANEL.
            </p>
        <div id="Pricediv">
            <label id="PriceLab">$149.99</label>
            <label id="DiscPrice">
                <s>$169.99</s>
            </label>
        </div>
        <button id="AddBtn">
        <img src={CartIcon}></img>
            <span></span>
            Add to Cart</button>
    </div>
)
}
export default DetailsContainer;