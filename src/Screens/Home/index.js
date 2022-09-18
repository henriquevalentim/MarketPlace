import * as React from 'react'
import Grid from '@mui/material/Grid'

import Carousel from '../../Components/Carousel'
import NavBar from '../../Components/NavBar'

function Home() {
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center'>
      <Grid md={12}>
        <NavBar />
      </Grid>
      <Grid md={5} m={2}>
        <Carousel />
      </Grid>
      <Grid md={12} m={2}></Grid>
    </Grid>
  )
}

export default Home
