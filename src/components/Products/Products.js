import React from 'react';
import { connect } from 'react-redux';

const Products = (props) =>{
    console.log('Products props',props);
    return (<h1>Products</h1>);
}

const mapStateToProps = (state) => {
    return ({
        categories: state.categories.categories,
        products: state.products.products
    });
}

export default connect(mapStateToProps)(Products);