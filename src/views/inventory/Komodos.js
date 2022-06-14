import { useState } from 'react'
import { Grid, Typography, Box, Button, Slider } from '@mui/material'

import usePagination from '@mui/material/usePagination'
import { styled } from '@mui/material/styles'

import SvgIconStyle from '../../@core/components/SvgIconStyle'

const Komodos = () => {
  return (
    <Box
      sx={{
        px: '33px',
        py: '29px'
      }}
    >
      <Grid container>
        <Grid item>
          <Box
            sx={{
              p: '14px 14px 17px 16px',
              bgcolor: '#414141',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
              width: '207px',
              height: '402px'
            }}
          >
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#FFFFFF',
                mb: '7px'
              }}
            >
              Komoverse #8988
            </Typography>
            <img
              src={'/assets/images/items/8988 1.png'}
              alt={'8988 1'}
              width='100%'
              style={{
                objectFit: 'contain'
              }}
            ></img>

            <Typography
              variant='body1'
              sx={{
                mt: 3,
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '15px',
                color: '#FFFFFF',
                mb: 2
              }}
            >
              Breed Count: 0
            </Typography>

            <Grid container columnSpacing={2}>
              <Grid item xs={3}>
                <img
                  src={'/assets/images/items/Rectangle 321.png'}
                  alt='Rectangle 321'
                  width='100%'
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={'/assets/images/items/Rectangle 321.png'}
                  alt='Rectangle 321'
                  width='100%'
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={'/assets/images/items/Rectangle 321.png'}
                  alt='Rectangle 321'
                  width='100%'
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={'/assets/images/items/Rectangle 321.png'}
                  alt='Rectangle 321'
                  width='100%'
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src={'/assets/images/ICONS_ELEMENTS-27 1.png'}
                  alt='ICONS_ELEMENTS-27 1'
                  width='100%'
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </Grid>
            </Grid>
            <Button
              sx={{
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#FFFFFF',
                background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                borderRadius: '26px',
                width: '182px',
                height: '40px'
              }}
            >
              SELL
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Komodos
