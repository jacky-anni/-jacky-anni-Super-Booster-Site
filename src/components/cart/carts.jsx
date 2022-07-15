import { connect } from "react-redux";
import { Button, Drawer } from "antd";
import React, { useState, useEffect } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getCart } from "./../../actions/cartActions";
import { PropTypes } from "prop-types";
import CartItem from "./cartItem";
import { parse } from "html-react-parser";
import CheckoutButtom from "./checkoutButtom";

const Cart = ({
  cart: { items, totalItems, isEmpty, loadingCart },
  getCart
}) => {
  const [visible, setVisible] = useState(false);
  // const [cost, setCost] = useState(0);
  let cost = 0;

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      {/* <Button type='primary' onClick={showDrawer}>
        Open
      </Button> */}
      <div
        style={{
          position: "absolute",
          top: "29px",
          right: "50px",
          cursor: "pointer"
        }}
      >
        <Badge
          count={items.length > 0 ? items.length : 0}
          showZero
          onClick={showDrawer}
        >
          <i className=' fa fa-cart-plus size-sm '></i>
        </Badge>
      </div>

      <Drawer
        title={`Mon panier (${items.length})`}
        placement='right'
        onClose={onClose}
        visible={visible}
      >
        <div>
          {/* <h6 className='side_title font-bold'>
            <i className='fa fa-graduation-cap'></i> Mes formations
          </h6> */}
          {items.length > 0 ? (
            <div className='related_items mb-4'>
              {items.map(
                item => (
                  (cost += parseFloat(item.price)),
                  <CartItem item={item} key={item.id} />
                )
              )}
            </div>
          ) : (
            <p className='font-bold '>Pas de formation au panier</p>
          )}
        </div>
        {items.length > 0 && <CheckoutButtom cost={cost.toFixed(2)} />}
      </Drawer>
    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getCart }
)(Cart);
