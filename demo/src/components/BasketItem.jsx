function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;
  const totalItemPrice = price * quantity; // Умножаем цену на количество

  return (
    <li className="collection-item">
      {name}{' '}
      <button
        className="basket-quantity"
        onClick={() => incQuantity(id)}
      >
        +
      </button>
      x{quantity}
      <button
        className="basket-quantity"
        onClick={() => decQuantity(id)}
      >
        -
      </button>
      = {totalItemPrice} руб.
      <span
        className="secondary-content"
        onClick={() => removeFromBasket(id)}
      >
        {' '}
        {/* Исправлено class на className */}
        <i className="material-icons basket-delete">close</i>{' '}
        {/* Исправлено class на className */}
      </span>
    </li>
  );
}
export { BasketItem };
