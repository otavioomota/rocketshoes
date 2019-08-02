import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

const Home = () => {
  const [products, setProduct] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((amountSum, product) => {
      amountSum[product.id] = product.amount;

      return amountSum;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProduct(data);
    }

    loadProduct();
  }, []);

  const handleAddProduct = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.title}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {amount[product.id] || 0}
            </div>
            <span> Adicionar ao carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
