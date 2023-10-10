import React, { useEffect } from 'react'
import { Grid } from './styles'

interface Props {
  gallery: unknown[]
}

const Gallery: React.FC<Props> = ({ gallery }) => {
  return (
    <>
      <Grid>
        {gallery.map((img) => (
          <div key={img.id}>{img.title}</div>
        ))}
      </Grid>
    </>
  )
}

export default Gallery
