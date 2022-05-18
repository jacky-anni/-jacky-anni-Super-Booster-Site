import { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "./categoryItem";
import CreateCategory from "./createCategory";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { categoriesList } from "./../../actions/categoryActions";

const Categories = ({
  category: { errors, loading, categories, categorie },
  categoriesList
}) => {
  useEffect(() => {
    categoriesList();
  }, []);
  return (
    <>
      <div className='card card-custom'>
        <div className='card-header'>
          <div className='card-title'>
            <span className='card-icon'>
              <i className='flaticon2-chat-1 text-primary' />
            </span>
            <h6 className='card-label'>
              {categories.length}{" "}
              {categories.length > 1 ? "Categories" : "Categorie"}
            </h6>
          </div>
          <div className='card-toolbar'>
            <CreateCategory />
          </div>
        </div>
        <div className='card-body'>
          <div className='row'>
            {categories.map(categorie => (
              <CategoryItem categorie={categorie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Categories.propTypes = { category: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { categoriesList }
)(Categories);
