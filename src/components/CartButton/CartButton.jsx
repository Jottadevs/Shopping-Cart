import './CartButton.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function CartButton() {
    return (
        <button type='button' className='cart__button'>
            <AiOutlineShoppingCart />
            <span className='cart-status'>1</span>
        </button>
    );
}

export default CartButton;