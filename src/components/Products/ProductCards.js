import React from 'react';
import Card from 'react-bootstrap/Card';
import ImageSelector from '../utils/ImageSelector';
import {Link} from 'react-router-dom';

function ProductCards({category}) {
    var genreImage = ImageSelector(category.name);
    return (
            <Card className="bg-dark text-white">
                <Link to={`/products`}> <Card.Img src={genreImage} alt="Card image" className='imgClass img-fluid'/></Link>
                <Card.ImgOverlay>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>  
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
    );
}



export default ProductCards;