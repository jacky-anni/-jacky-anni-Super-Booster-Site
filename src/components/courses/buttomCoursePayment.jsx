import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Affix, Button } from "antd";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import { addToCart, removeToCart, clear } from "./../../actions/cartActions";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const ButtomCoursePayment = ({
  cart: { items, loadingCart, addSuccess, removeSuccess },
  addToCart,
  removeToCart,
  clear,
  course
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });
  const [loading_, setLoading_] = useState(false);
  const [img, setImg] = useState();
  useEffect(async () => {
    if (removeSuccess || addSuccess) {
      clear();
      setLoading_(false);
    }

    if (course.photo !== null) {
      const data = await fetch(`/images/courses/${course.photo}`);
      setImg(data.url);
    }
  });

  // remove au panier
  function Cart() {
    const { removeItem, getItem, inCart } = useCart();
    const myItem = getItem(course.id);

    return (
      <>
        {inCart(course.id) ? (
          <Button
            style={{ backgroundColor: "#da0a4d", color: "white" }}
            className='btn-block font-bold mb-2'
            onClick={() => {
              removeItem(myItem.id);
              setLoading_(true);
            }}
            type='primary'
            size='large'
            loading={loading_}
          >
            <i className='fa fa-trash'></i> &nbsp; Retirer au panier
          </Button>
        ) : null}
      </>
    );
  }

  // ajouter au panier
  function Page() {
    const { addItem, inCart, setCartMetadata } = useCart();
    const course_ = {
      id: course.id,
      name: course.titre,
      price: course.prix,
      slug: course.slug,
      photo: img
    };

    // verifie si ce cour est dans e panier
    const alreadyAdded = inCart(course_.id);

    return (
      <div key={course.id}>
        {!alreadyAdded && (
          <Button
            // className='btn-md btn-block font-bold mb-2'
            style={{ backgroundColor: "#da0a4d", color: "white" }}
            className='btn-block font-bold mb-2'
            onClick={() => {
              addItem(course_);
              setLoading_(true);
            }}
            size='large'
            loading={loading_}
          >
            <i className='fa fa-cart-plus'></i> &nbsp; Ajouter au panier
          </Button>
        )}
      </div>
    );
  }
  // setItems(products);
  return (
    <>
      <CartProvider
        id='course'
        onItemAdd={item => addToCart(item)}
        onItemRemove={item => removeToCart(item)}
      >
        <div className='ed_view_link p-3'>
          {course.type == "Payante" ? (
            <>
              <Cart />
              <Page />
              {!isTabletOrMobile && (
                <Link
                  to='#'
                  className='btn btn-success btn-md btn-block font-bold btn-outline-success'
                >
                  Acheter maintenent
                </Link>
              )}

              {isTabletOrMobile && (
                <div className='ed_view_price pl-2' style={styleButtom}>
                  <h6 className='theme-cl font-bold size-xs'>
                    <span
                      style={{
                        fontSize: "18px",
                        position: "absolute",
                        top: "7px"
                      }}
                    >
                      {course.prix}
                    </span>
                    <br /> <sub>HTG</sub>
                    <button
                      className='btn btn-success btn-md font-bold'
                      style={{
                        width: "70%",
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                        top: "0px"
                      }}
                    >
                      Acheter maintenant
                    </button>
                  </h6>
                </div>
              )}
            </>
          ) : (
            <>
              {!isTabletOrMobile ? (
                <Link
                  to='#'
                  className='btn btn-success btn-md btn-block font-bold'
                >
                  Suivre ce cours
                </Link>
              ) : (
                <div className='ed_view_price pl-2' style={styleButtom}>
                  <h6 className='theme-cl font-bold size-xs'>
                    <span
                      style={{
                        fontSize: "18px",
                        position: "absolute",
                        top: "7px"
                      }}
                    >
                      Gratuite
                    </span>
                    <br /> <sub>&nbsp;</sub>
                    <button
                      className='btn btn-success btn-md font-bold'
                      style={{
                        width: "70%",
                        position: "absolute",
                        right: "0px",
                        bottom: "0px",
                        top: "0px"
                      }}
                    >
                      Suivre ce cours
                    </button>
                  </h6>
                </div>
              )}
            </>
          )}
        </div>
      </CartProvider>
    </>
  );
};

ButtomCoursePayment.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  cart: state.cart
});

const styleButtom = {
  color: "red",
  position: "fixed",
  bottom: "-23px",
  width: "100%",
  left: "0px",
  padding: "2px",
  backgroundColor: "white"
};

export default connect(
  mapStateToProps,
  { addToCart, removeToCart, clear }
)(ButtomCoursePayment);
