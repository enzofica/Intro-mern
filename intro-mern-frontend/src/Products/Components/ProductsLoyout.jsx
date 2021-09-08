import React, {useState} from 'react'
import Header from './Header'
import AddButton from './AddButton'
import Loading from './Loading'

const ProductLayout = () => {
    const [isLoading, setIsLoading] = useState(false)
    return(
    <>
     <Header title="Products App" />
     <AddButton/>
     {
         isLoading
         ? <Loading/>
         : 'mostrar resultado'
     }
    </>
    )
}

export default ProductLayout