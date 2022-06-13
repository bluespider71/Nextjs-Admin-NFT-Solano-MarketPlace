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

const Accordion = styled(props => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={<FaAngleRight style={{ fontSize: '0.9rem', marginRight: '4px', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : 'rgba(0, 0, 0, .03)',
  flexDirection: 'inherit',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('null')

  const hiddenlg = useMediaQuery(theme => theme.breakpoints.down('lg'))

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls='panel1d-content'
          id='panel1d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap',
                  width: "100%"
                }}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          aria-controls='panel2d-content'
          id='panel2d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap'
                }}
                rowSpacing={1}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          aria-controls='panel3d-content'
          id='panel3d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap'
                }}
                rowSpacing={1}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          aria-controls='panel4d-content'
          id='panel4d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap'
                }}
                rowSpacing={1}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          aria-controls='panel5d-content'
          id='panel5d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap'
                }}
                rowSpacing={1}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          aria-controls='panel6d-content'
          id='panel6d-header'
          sx={{
            padding: 0,
            margin: 0,
            ' > .MuiAccordionSummary-content': {
              padding: 0,
              margin: 0
            }
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
                width: '13.8%',
                marginLeft: '1.5%',
                marginTop: 1,
                marginRight: '2.5%',
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
                mt: 4,
                mr: '3.42%',
                width: '20.3%'
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
                mt: 2,
                mr: '3.3%',
                width: '35%'
              }}
            >
              <Grid
                item
                container
                direction='row'
                justifyContent='flex-start'
                sx={{
                  flexWrap: 'wrap'
                }}
                rowSpacing={1}
                columnSpacing={2}
              >
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    sx={{
                      width: '100%'
                    }}
                  >
                    <img
                      src={'/assets/images/items/Rectangle 321.png'}
                      alt='Rectangle 321'
                      style={{
                        width: '100%'
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                mt: 3,
                width: '20.6%'
              }}
            >
              <Grid item container justifyContent={'space-around'} sx={{}}>
                <Grid
                  item
                  sx={{
                    width: '25%',
                    height: '25%'
                  }}
                >
                  <img src={'/assets/images/solana-logo-free.png'} alt='solana-logo-free' width={'100%'} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: 'right'
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: '#fff',
                      mb: '3px'
                    }}
                  >
                    4.5 SOL
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#AAAAAA',
                      mb: '2px'
                    }}
                  >
                    $177.23
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '10px',
                      lineHeight: '12px',
                      color: '#AAAAAA',
                      mb: '3px'
                    }}
                  >
                    1 minute ago
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
