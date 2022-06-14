import { useState } from 'react'
import { Grid, Typography, Box, Button, Card, Stack } from '@mui/material'
import { FaAngleLeft } from 'react-icons/fa'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SvgIconStyle from '../../@core/components/SvgIconStyle'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#414141',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const ItemDetails = () => {
  const [sellPrice, setSellPrice] = useState('3.59844')
  const [expiredDay, setExpiredDay] = useState(30)

  return (
    <Box
      sx={{
        pt: '35px',
        pl: '50px',
        pr: '52px'
      }}
    >
      <Grid item xs={12}>
        <Typography
          href='#'
          style={{
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FFFFFF'
          }}
        >
          <FaAngleLeft
            style={{
              fontSize: '20px',
              lineHeight: '24px',
              verticalAlign: 'bottom',
              marginRight: '4px'
            }}
          />
          Back to Inventory
        </Typography>
      </Grid>

      <Grid
        item
        container
        columnSpacing={9}
        sx={{
          mt: '15px'
        }}
      >
        <Grid item md={5} sm={12}>
          <Button
            variant='contained'
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '29px',
              textAlign: 'center',
              color: '#fff',
              width: '281px',
              height: '42px',
              background: '#00E309',
              borderRadius: '10px',
              textTransform: 'initial',
              mb: 5
            }}
          >
            Komoverse #8988
          </Button>
        </Grid>

        <Grid item md={7} sm={12} xs={12}></Grid>
      </Grid>

      <Grid item container columnSpacing={9} sx={{}}>
        <Grid item md={5}>
          <img
            src={'/assets/images/items/8988 1.png'}
            alt='8988 1'
            style={{
              width: '100%',
              objectFit: 'contain',
              marginBottom: '20px'
            }}
          />
        </Grid>

        <Grid item md={7}>
          <Box
            sx={{
              p: '31px 24px 36px 36px',
              bgcolor: '#414141',
              width: '100%',
              mb: '26px'
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={3} md={6} sm={3} xs={6}>
                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA'
                    }}
                  >
                    Class
                  </Typography>
                  <Grid container sx={{ mt: '4px' }}>
                    <Grid item>
                      <img src={'/assets/images/Komodo_Blue 2.png'} alt='Komodo_Blue 2' />
                    </Grid>
                    <Grid
                      item
                      sx={
                        {
                          // display: "flex",
                          // justifyContent: "center",
                          // alignItems: 'flex-start'
                        }
                      }
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          ml: '10px',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '26px',
                          color: '#FFFFFF'
                        }}
                      >
                        Komodo
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item lg={3} md={6} sm={3} xs={6}>
                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA'
                    }}
                  >
                    Element
                  </Typography>
                  <Grid container sx={{ mt: '4px' }}>
                    <Grid item>
                      <img src={'/assets/images/ICONS_ELEMENTS-27 1.png'} alt='ICONS_ELEMENTS-27 1' />
                    </Grid>
                    <Grid
                      item
                      sx={
                        {
                          // display: "flex",
                          // justifyContent: "center",
                          // alignItems: 'flex-start'
                        }
                      }
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          ml: '10px',
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '26px',
                          color: '#FFFFFF'
                        }}
                      >
                        Water
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item lg={3} md={6} sm={3} xs={6}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#AAAAAA'
                  }}
                >
                  Breed Count
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    mt: '9px',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#fff'
                  }}
                >
                  0 / 3
                </Typography>
              </Grid>

              <Grid item lg={3} md={6} sm={3} xs={6}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#AAAAAA'
                  }}
                >
                  Cooldown Timer
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    mt: '9px',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#fff'
                  }}
                >
                  3 days
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#AAAAAA'
                  }}
                >
                  Owner
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#fff'
                  }}
                >
                  Aviabee
                  <span
                    variant='body1'
                    style={{
                      display: 'inline',
                      fontSize: '10px',
                      fontWeight: 500,
                      lineHeight: '12px',
                      color: '#AAAAAA'
                    }}
                  >
                    (phantom: nikkokVHPyN1RShygZVUnSZKzsnJ9mT2zcKkiTbkUaP)
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#AAAAAA',
                    mt: '14px',
                    mb: 1
                  }}
                >
                  Body Parts
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Grid container columnSpacing={3} rowSpacing={2}>
                  <Grid item xs={3}>
                    <img src={'/assets/images/items/Rectangle 321.png'} alt={'Rectangle 321'} width='50' height='50' />
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#AAAAAA',
                          mb: 1
                        }}
                      >
                        Head
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#FFFFFF'
                        }}
                      >
                        Komodo (Water)
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container columnSpacing={3} rowSpacing={2}>
                  <Grid item xs={3}>
                    <img src={'/assets/images/items/Rectangle 321.png'} alt={'Rectangle 321'} width='50' height='50' />
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#AAAAAA',
                          mb: 1
                        }}
                      >
                        Body
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#FFFFFF'
                        }}
                      >
                        Robot
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container columnSpacing={3} rowSpacing={2}>
                  <Grid item xs={3}>
                    <img src={'/assets/images/items/Rectangle 321.png'} alt={'Rectangle 321'} width='50' height='50' />
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#AAAAAA',
                          mb: 1
                        }}
                      >
                        Headgear
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#FFFFFF'
                        }}
                      >
                        Pirate Hat
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container columnSpacing={3} rowSpacing={2}>
                  <Grid item xs={3}>
                    <img src={'/assets/images/items/Rectangle 321.png'} alt={'Rectangle 321'} width='50' height='50' />
                  </Grid>
                  <Grid
                    item
                    xs={9}
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '15px',
                          color: '#AAAAAA',
                          mb: 1
                        }}
                      >
                        Weapon
                      </Typography>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 700,
                          fontSize: '16px',
                          lineHeight: '20px',
                          color: '#FFFFFF'
                        }}
                      >
                        Trident
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <Card
            sx={{
              pt: '30px',
              bgcolor: '#414141',
              borderRadius: 0,
              mb: '30px'
            }}
          >
            <Typography
              variant='body1'
              sx={{
                pl: '22px',
                pb: '20px',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                color: '#FFFFFF',
                borderBottom: '1px solid #AAAAAA'
              }}
            >
              <SvgIconStyle
                src={'/icons/listing.svg'}
                sx={{
                  width: '25px',
                  height: '20px',
                  mr: '10px',
                  lineHeight: '27px',
                  verticalAlign: 'middle'
                }}
              />
              Listing
            </Typography>

            <Stack spacing={2}>
              <Item>
                <Box
                  sx={{
                    p: '19px 60px 24px 20px'
                  }}
                >
                  <Grid container>
                    <Grid item xs={9}>
                      <Grid container>
                        <Grid item sx={{
                          mr: "31px"
                        }}>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'left',
                              color: '#AAAAAA',
                              mb: '9px'
                            }}
                          >
                            Sell Price
                          </Typography>

                          <input
                            value={sellPrice}
                            style={{
                              width: '121px',
                              height: '30px',
                              background: '#EEEEEE',
                              outline: 'none',
                              border: 'none',
                              color: '#222222',
                              fontWeight: 500,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'right',
                            }}
                            onChange={e => {
                              setSellPrice(e.target.value)
                            }}
                          ></input>
                          <Typography
                            variant='body1'
                            sx={{
                              display: 'inline-block',
                              fontWeight: 700,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'center',
                              color: '#FFFFFF',
                              ml: '10px',
                              mb: "15px"

                            }}
                          >
                            SOL
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'left',
                              color: '#AAAAAA',
                              mb: '9px',
                            }}
                          >
                            Listing Expired in
                          </Typography>

                          <input
                            value={expiredDay}
                            style={{
                              width: '95px',
                              height: '30px',
                              background: '#EEEEEE',
                              outline: 'none',
                              border: 'none',
                              color: '#222222',
                              fontWeight: 500,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'right'
                            }}
                            onChange={e => {
                              setExpiredDay(e.target.value)
                            }}
                          ></input>
                          <Typography
                            variant='body1'
                            sx={{
                              display: 'inline-block',
                              fontWeight: 700,
                              fontSize: '14px',
                              lineHeight: '17px',
                              textAlign: 'center',
                              color: '#FFFFFF',
                              ml: '10px'
                            }}
                          >
                            days
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} sx={{
                      display: "flex",
                      alignItems: "center"
                    }}>
                      <Button
                        sx={{
                          fontWeight: 700,
                          fontSize: '14px',
                          lineHeight: '17px',
                          textAlign: 'center',
                          color: '#FFFFFF',
                          width: '148px',
                          height: '40px',
                          background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                          borderRadius: '15px'
                        }}
                      >
                        SELL Now
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetails
