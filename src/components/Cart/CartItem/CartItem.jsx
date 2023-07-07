import formatCurrency from '../../../utils/formatCurrency'
import { BsCartXFill } from 'react-icons/bs'
import propTypes from 'prop-types'
import './CartItem.css'

function CartItem({ data }) {

    const { thumbnail, title, price } = data

    return (
        <section className='cart-item'>
            <img
                src={thumbnail}
                alt="imagem do produto"
                className='cart-item-img'
            />

            <div className='cart-item-content'>
                <h3 className='cart-item-title' >{title}</h3>
                <h3 className='cart-item-price' >{formatCurrency(price, 'BRL')}</h3>

                <button
                    type='button'
                    className='button__remove-item'
                >
                    <BsCartXFill />
                </button>
            </div>
        </section>
    );
}

export default CartItem;

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;