import React from "react";
import ReactDOM from "react-dom";
import { CartProvider, useCart } from "react-use-cart";
import { PictureOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Button } from "antd";
import { connect } from "react-redux";
import { removeToCart, clear } from "./../../actions/cartActions";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import CheckoutButtom from "./checkoutButtom";
import Banner from "./../partials/banner";

const Checkout = ({
  cart: { items, loadingCart, addSuccess, removeSuccess },
  removeToCart,
  clear
}) => {
  const [loading_, setLoading_] = useState(false);
  // gestion d'image
  const [img, setImg] = useState();
  // initialisation du cout
  let cost = 0;
  useEffect(() => {
    if (removeSuccess || addSuccess) {
      clear();
      setLoading_(false);
    }
  });

  // calculate price
  items.map(item => (cost += parseFloat(item.price)));

  function Cart() {
    const { removeItem } = useCart();
    return (
      <>
        {items.map(item => (
          <tr key={item.id}>
            <td>
              <div className='related_items'>
                <div className='product_item'>
                  <div className='thumbnail mr-2'>
                    <Avatar
                      style={{ marginTop: "-16px" }}
                      shape='square'
                      src={item.photo}
                      size={60}
                      icon={<PictureOutlined />}
                    />
                  </div>
                  <div className='info'>
                    <h5 className='product-title'>{item.name}</h5>
                    <span className='price mt-0 mb-0'>
                      <p className='price_ver'>
                        {item.price} HTG
                        <del>$149.00</del>
                        <Button
                          onClick={() => {
                            removeItem(item.id);
                            setLoading_(true);
                          }}
                          className='text-primary font-bold'
                          type='link'
                        >
                          <i className='fa fa-trash'></i> &nbsp; Retirer au
                          panier
                        </Button>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <>
      <Banner title='Panier' />
      <CartProvider id='course' onItemRemove={item => removeToCart(item)}>
        <section className='pt-4'>
          <div className='container'>
            <h5 className='side_title font-bold'>
              {items.length} cours dans le panier
            </h5>
            <div className='row'>
              <div className='col-md-8 col-lg-8'>
                <div className='table-responsive'>
                  <table className='table table-striped wishlist'>
                    <tbody>
                      <Cart />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='col-md-4 col-lg-4'>
                <h6 className='side_title font-bold mb-7'>
                  Résumé de la commande
                </h6>

                {items.length > 0 && <CheckoutButtom cost={cost.toFixed(2)} />}
              </div>
            </div>
          </div>
        </section>
      </CartProvider>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { removeToCart, clear }
)(Checkout);
