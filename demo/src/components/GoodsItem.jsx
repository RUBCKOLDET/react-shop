function GoodsItem(props) {
  const {
    mainId, // используем mainId вместо id
    displayName, // это правильное поле
    displayDescription, // это правильное поле
    price, // price объект
    displayAssets, // массив с активами
    addToBasket = Function.prototype,
  } = props;

  // Получаем цену как число
  const itemPrice =
    price?.finalPrice || price?.regularPrice || price?.floorPrice || 0;

  // Получаем URL картинки - берем первый элемент из displayAssets
  const imageUrl =
    (displayAssets && displayAssets[0]?.url) ||
    (displayAssets && displayAssets[0]?.background) ||
    'https://via.placeholder.com/300x400?text=No+Image';

  return (
    <div className="card">
      <div className="card-image">
        <img
          src={imageUrl}
          alt={displayName}
          onError={(e) => {
            e.target.src =
              'https://via.placeholder.com/300x400?text=Image+Error';
          }}
        />
        <span className="card-title">{displayName}</span>
      </div>
      <div className="card-content">
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              id: mainId, // используем mainId как идентификатор
              name: displayName,
              price: itemPrice, // передаем число
              description: displayDescription,
              image: imageUrl,
            })
          }
        >
          Купить
        </button>
        <span
          className="right"
          style={{ fontSize: '1.8rem' }}
        >
          {itemPrice} руб.
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
