import * as React from 'react'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { FaAngleRight } from 'react-icons/fa'

import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function RecentTransaction() {
  const hiddenlg = useMediaQuery(theme => theme.breakpoints.down('lg'))

  return (
    <>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          border: '1px solid #AAAAAA'
        }}
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          sx={{
            padding: 0,
            margin: 0,
            flexWrap: 'nowrap'
          }}
        >
          <Grid
            item
            sx={{
              width: '11.7%',
              marginLeft: '20px',
              marginTop: 1,
              marginRight: '4.3%',
              marginBottom: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={'/assets/images/items/9985 1.png'}
              alt='9985 1'
              style={{
                width: '100%'
              }}
            ></img>
          </Grid>
          <Grid
            item
            sx={{
              mt: 3.75,
              width: '16.8%',
              mr: '4.3%'
            }}
          >
            <Box
              sx={{
                py: 0.5,
                borderRadius: '10px',
                background: '#00E309',
                marginBottom: 1.5,
                textAlign: 'center'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '29px',
                  color: '#FFFFFF'
                }}
              >
                #9985
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: hiddenlg ? '12px' : '11px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Breed Count: 1
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Seller
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Aviabee
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                BwkQ...prW7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mr: '2%'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <FaAngleRight style={{ fontSize: '0.9rem', color: '#fff' }} />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 4.25,
              width: '14%',
              mr: '2%'
            }}
          >
            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                Buyer
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 1.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                dikaw0w
              </Typography>
            </Box>

            <Box
              sx={{
                marginBottom: 0.25,
                bgColor: '#fff'
              }}
            >
              <Typography
                variant={'body1'}
                sx={{
                  fontStyle: 'normal',
                  fontWeight: 400,
                  marginBottom: 3.5,
                  fontSize: '12px',
                  lineHeight: '15px',
                  color: '#FFFFFF'
                }}
              >
                D5kw...f8U7
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              mt: 6,
              width: '22%'
            }}
          >
            <Grid item container alignItems={'center'}>
              <Box
                sx={{
                  width: '22%',
                  mr: '8%'
                }}
              >
                <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
              </Box>
              <Box>
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  3.1 SOL
                </Typography>
              </Box>
            </Grid>
            <Grid item container>
              <Box
                sx={{
                  ml: 1
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '15px',
                    color: '#fff'
                  }}
                >
                  Bought: 2 mins ago
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
