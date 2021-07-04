import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product/Product'
import Products from '../products'

const Home = () => {
    return (
        <div>
            <h2>محصولات</h2>
            <Row>
                {Products.map((item) => {
                    return (
                        <Col key={item._id} sm={12} md={6} lg={4}>
                            <Product product={item} />
                        </Col>
                    )

                })}
            </Row>

        </div>

    )
}

export default Home
