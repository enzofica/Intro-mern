import React, {useState, useEffect} from 'react'
import { getProducts } from '../service'
import Loading from './Loading'

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect( () => {
      async function loadProducts () {
          const response = await getProducts()
          console.log("response",response)

          if (response.status === 200) {
              setProducts(response.data.product)
          }

          setIsLoading(false)
      }

      loadProducts()
    }, [])

    if (isLoading) {
        return <Loading />
    }

    if (!products.length){
        return <h2 className="title has-text-centered">{'You dont have products'}</h2> 
    }

    return (
         'Mostrar listado'
    )
}

export default ListProducts