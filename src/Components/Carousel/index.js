import * as React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import axios from 'axios'

function CarouselComponent() {
  const [carousel, setCarousel] = React.useState([])

  const getCarousel = async () => {
    const response = await axios.get('http://localhost:4000/carousel')
    setCarousel(response.data)
  }

  React.useEffect(() => {
    getCarousel()
  }, [])

  return (
    <div style={{ maxHeight: 500, maxWidth: 1000 }}>
      <Carousel showThumbs={false}>
        {carousel.map((c) => (
          <div>
            <img
              src={c.image}
              style={{ maxHeight: 500, maxWidth: 1000 }}
              alt='Imagem'
            />
            <p className='legend'>{c.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
