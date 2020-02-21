import React from 'react'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectorCartItemsCount } from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)
//For actions
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
//For data
const mapStateToProps = createStructuredSelector({
    itemCount: selectorCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)