import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProduct } from '../../store/actions';

class Product extends Component {

  static getInitialProps(dispatch, req, res) {
    return dispatch(getProduct());
  }

  componentDidMount() {
    if(this.props.products && this.props.products.length <= 0) {
      this.props.getProduct();
    }
  }

  render() {
    const { products } = this.props;

    return products.length > 0 ? (
      <React.Fragment>
        <p>The product page</p>

        <ul>{products.map(product => <li key={product.name}>{product.name}</li>)}</ul>
      </React.Fragment>
    ) : (
      <div>no products</div>
    );
  }
}

Product.propTypes = {
  products: PropTypes.array
};

Product.defaultProps = {
  products: []
};

const mapStateToProps = ({ products }) => {
  return { products: products.data };
};

const mapDispatchToProps = dispatch => ({
  getProduct: () => dispatch(getProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
export { Product };
