import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import ProductService from '../services/productService'

function ProductDetail() {
  let { productName } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(productName).then(result => setProduct(result.data.data))
  }, [])

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category !== undefined && product.category.categoryName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

export default ProductDetail