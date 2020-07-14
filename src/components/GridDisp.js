import React, { useEffect } from 'react';
import ProductCards from './Products/ProductCards';
import ProdPop from './Products/ProdPop';
import { Container, Row, Col } from 'react-bootstrap';
import { getCategories } from './store/actions/categoryActions';
import { connect } from 'react-redux';
import { getProducts } from './store/actions/productActions';

const GridDisp = React.memo(({categories,products,getCategories,getProducts}) => {

    useEffect(() => {
        getCategories(categories);
        getProducts(products);

    }, [categories,products,getCategories,getProducts]);

    if (!categories) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <Container className='container-fluid'>
                <Row gutter={40}  >
                    {(categories).map(category => {
                        return (<Col
                            xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 4 }}
                            lg={{ span: 4 }} xl={{ span: 4 }}
                            style={{ paddingBottom: '15px' }} key={category.id} >
                            <ProductCards category={category} /></Col>);
                    })}
                </Row>
            </Container>
            <br /><br />
            <h1 style={{ backgroundColor: '#343a40', color: 'white' }}>Now Playing</h1>
            <Container className='container-fluid'>
                <Row gutter={40}  >
                    {(products).map(product => {
                        return (<Col
                            xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
                            lg={{ span: 4 }} xl={{ span: 4 }}
                            style={{ paddingBottom: '15px' }} key={product.id}>
                            <ProdPop product={product} /></Col>);
                    })}
                </Row>
            </Container>

        </>
    );
});


const mapDispatchToProps = (dispatch) => {
    return ({
        getCategories: (categories) => {
            dispatch(getCategories(categories))
        },
        getProducts: (products, setProducts) => {
            dispatch(getProducts(products))
        }
    });
}

const mapStateToProps = (state) => {
    return ({
        categories: state.categories.categories,
        products: state.products.products
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(GridDisp);