import { Link } from "react-router-dom";
const CheckoutButtom = ({ cost }) => {
  return (
    <>
      <div className='cart_tostals checkout'>
        <div className='cart-wrap'>
          <div className='flex_cart' style={{ marginBottom: "20px" }}>
            <div className='flex_cart_1'>Coût total :</div>
            <div className='flex_cart_2'>{cost} HTG</div>
          </div>
          <Link to='/checkout'>
            <button type='button' className='btn checkout_btn'>
              passer la commande
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutButtom;
