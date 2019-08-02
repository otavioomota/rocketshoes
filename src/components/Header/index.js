import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

const Header = ({ cartSize }) => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket color="#FFF" size={36} />
      </Cart>
    </Container>
  );
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
