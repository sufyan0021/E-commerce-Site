import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function ProdPop({product}) {
    var contentToBeLoaded =  product?
        (<Link to={`/productDetails/${product.id}`}> <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${product.poster_path}`} className='imgClass img-fluid'/>
            
            <Card.Body>
                <Card.Text>{product.title}</Card.Text>
            </Card.Body>
        </Card></Link> )
    :(<h1>Loading..</h1>)
    return(contentToBeLoaded);
}

export default ProdPop;