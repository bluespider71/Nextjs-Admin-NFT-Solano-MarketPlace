import { useState } from 'react'
import { Grid, Typography, Box, Button, Card } from '@mui/material'
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

const ItemDetails = () => {
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
          Back to Marketplace
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

        <Grid item md={7} sm={12} xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                display: 'flex'
              }}
            >
              <Box>
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width='49px' height={'49px'} />
              </Box>
              <Box
                sx={{
                  ml: 8,
                  textAlign: 'center',
                  mr: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap'
                  }}
                >
                  3.82137 SOL
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#AAAAAA'
                  }}
                >
                  $149.68
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button
                variant='contained'
                sx={{
                  borderRadius: '15px',
                  fontWeight: 700,
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  color: '#11D000',
                  border: '3px solid #11D000',
                  mr: '8px',
                  height: '40px',
                  textTransform: 'initial'
                  // width: "136px",
                }}
              >
                Make Offer
              </Button>

              <Button
                variant='contained'
                sx={{
                  borderRadius: '15px',
                  background: 'linear-gradient(180deg, #007E05 0%, #000000 100%);',
                  fontWeight: 700,
                  color: '#fff',
                  height: '40px',
                  textTransform: 'initial'
                  // width: "148px"
                }}
              >
                BUY Now
              </Button>
            </Box>
          </Box>
        </Grid>
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
              borderRadius: 0
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
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: 0,
                bgcolor: '#414141'
              }}
            >
              <Table aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: '1px solid #AAAAAA',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '35%',
                        pl: '25px !important'
                      }}
                      align='left'
                    >
                      Price
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        borderBottom: '1px solid #AAAAAA',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '15%',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      USD Price
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        borderBottom: '1px solid #AAAAAA',
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '15%'
                      }}
                    >
                      Expiration
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        borderBottom: '1px solid #AAAAAA',
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px'
                      }}
                    >
                      From
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      component='th'
                      scope='row'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pl: '25px !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      <img
                        src={'/assets/images/solana-logo-free.png'}
                        alt='solana-logo-free'
                        width='23px'
                        height='23px'
                        style={{
                          marginRight: '5px',
                          lineHeight: '17px',
                          verticalAlign: 'middle'
                        }}
                      />
                      3.82137 SOL
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      $149.68
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      28 days
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      Aviabee{' '}
                      <small
                        style={{
                          color: 'rgba(231, 227, 252, 0.68)'
                        }}
                      >
                        (nikk...kUaP)
                      </small>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>

          <Card
            sx={{
              pt: '18px',
              mt: '30px',
              mb: '102px',
              bgcolor: '#414141',
              borderRadius: 0
            }}
          >
            <Typography
              variant='body1'
              sx={{
                pl: '26px',
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
                src={'/icons/offers.svg'}
                sx={{
                  width: '25px',
                  height: '20px',
                  mr: '10px',
                  lineHeight: '27px',
                  verticalAlign: 'middle'
                }}
              />
              Offers
            </Typography>
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: 0,
                bgcolor: '#414141'
              }}
            >
              <Table aria-label='simple table1'>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        borderBottom: '1px solid #AAAAAA',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '30%',
                        pl: '25px !important'
                      }}
                      align='left'
                    >
                      Price
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        borderBottom: '1px solid #AAAAAA',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        whiteSpace: 'nowrap',
                        width: '12%'
                      }}
                    >
                      USD Price
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '12px',
                        borderBottom: '1px solid #AAAAAA',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '12%'
                      }}
                    >
                      Expiration
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        borderBottom: '1px solid #AAAAAA',
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '20%',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Floor Difference
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontStyle: 'normal',
                        fontWeight: 400,
                        borderBottom: '1px solid #AAAAAA',
                        fontSize: '12px',
                        lineHeight: '15px',
                        color: '#AAAAAA',
                        textTransform: 'initial',
                        py: '9px',
                        width: '20%'
                      }}
                    >
                      From
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      component='th'
                      scope='row'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pl: '25px !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      <img
                        src={'/assets/images/solana-logo-free.png'}
                        alt='solana-logo-free'
                        width='23px'
                        height='23px'
                        style={{
                          marginRight: '5px',
                          lineHeight: '17px',
                          verticalAlign: 'middle'
                        }}
                      />
                      2.22145 SOL
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      $87.01
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      5 days
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      10% above
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important',
                        pr: '10px'
                      }}
                    >
                      Kazky
                      <small
                        style={{
                          color: 'rgba(231, 227, 252, 0.68)'
                        }}
                      >
                        (SdoP...XUhX)
                      </small>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      component='th'
                      scope='row'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pl: '25px !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      <img
                        src={'/assets/images/solana-logo-free.png'}
                        alt='solana-logo-free'
                        width='23px'
                        height='23px'
                        style={{
                          marginRight: '5px',
                          lineHeight: '17px',
                          verticalAlign: 'middle'
                        }}
                      />
                      2.22145 SOL
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      $87.01
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      5 days
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      10% above
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important',
                        pr: '10px'
                      }}
                    >
                      Kazky
                      <small
                        style={{
                          color: 'rgba(231, 227, 252, 0.68)'
                        }}
                      >
                        (SdoP...XUhX)
                      </small>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell
                      component='th'
                      scope='row'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pl: '25px !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      <img
                        src={'/assets/images/solana-logo-free.png'}
                        alt='solana-logo-free'
                        width='23px'
                        height='23px'
                        style={{
                          marginRight: '5px',
                          lineHeight: '17px',
                          verticalAlign: 'middle'
                        }}
                      />
                      2.22145 SOL
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      $87.01
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      5 days
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important'
                      }}
                    >
                      10% above
                    </TableCell>
                    <TableCell
                      align='left'
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF !important',
                        pt: '16px!important',
                        pb: '24px !important',
                        pr: '10px'
                      }}
                    >
                      Kazky
                      <small
                        style={{
                          color: 'rgba(231, 227, 252, 0.68)'
                        }}
                      >
                        (SdoP...XUhX)
                      </small>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ItemDetails
