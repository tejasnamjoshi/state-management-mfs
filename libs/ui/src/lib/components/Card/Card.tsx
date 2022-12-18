import { cartAtom, Product } from '@store';
import { useSetAtom } from 'jotai';
import './Card.scss';

export const Card = (props: Product) => {
  const setCart = useSetAtom(cartAtom);

  return (
    <div className="Card">
      <img className="Card__img" src={props.images[0]} alt="Product" />
      <div className="Card__content">
        <h4>
          <b>{props.title}</b>
        </h4>
        <p>{props.description}</p>
      </div>
      <button onClick={() => setCart((cart) => [...cart, props])}>
        Add to cart
      </button>
    </div>
  );
};

export default Card;
