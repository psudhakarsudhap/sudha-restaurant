import React from 'react';
import '../cartstyles.css';
class Cart extends React.Component {
    render() {
        return (
            <div className="container sm-2 md-2">
                <div className="cart-details">
                    <span className="cart-total"><strong>Cart Total</strong></span>
                    <span className="cart-amount">$1289.00</span>
                </div>
                <div className="tax-details">
                    <span className="tax-total">Tax</span>
                    <span className="tax-amount">$23</span>
                    <button className="select-address">Select Address<span className="arr-sym"><i class="arr right"></i></span></button>
                    <div className="tax-details">
                        <span className="tax-total">Shipping Charges</span>
                        <span className="tax-amount">$23</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;