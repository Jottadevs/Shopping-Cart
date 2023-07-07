import { useContext } from 'react';
import './CartButton.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AppContext from '../../context/AppContext';

function CartButton() {

    const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext)

    return (
        <button onClick={() => setIsCartVisible(!isCartVisible)} type='button' className='cart__button'>
            <AiOutlineShoppingCart />

            {cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}

        </button>
    );
}

export default CartButton;