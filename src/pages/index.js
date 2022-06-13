import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { styled } from '@mui/material/styles'
import SvgIconStyle from '../@core/components/SvgIconStyle'

// **
import RecentListTabs from 'src/views/home/RecentListTabs'

import RecentTransaction from 'src/views/home/RecentTransaction'

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Dashboard = () => {
  const [totalByDays, setTotalByDays] = useState('1')
  const [recentListTable, setRecentListTable] = useState('1')
  const [recentTransactionTable, setRecentTransactionTable] = useState('1')

  // const [value, setValue] = useState('1')

  const handleChangeTotalByDays = (event, newvalue) => {
    setTotalByDays(newvalue)
  }

  const handleChangeRecentListTable = (event, newvalue) => {
    setRecentListTable(newvalue)
  }

  const handleChangeRecentTransactionTable = (event, newvalue) => {
    setRecentTransactionTable(newvalue)
  }

  const hiddenmd = useMediaQuery(theme => theme.breakpoints.down('md'))
  const hiddenlg = useMediaQuery(theme => theme.breakpoints.down('lg'))
  const hiddensm = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <ApexChartWrapper
      sx={{
        mt: '23px',
        ml: '10px',
        mr: '27px'
      }}
    >
      <Grid container spacing={7}>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              backgroundImage: "url('/assets/images/banner.png')",
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              border: '3px solid #FFFFFF'
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 900,
                fontSize: '28px',
                fontStyle: 'normal',
                color: '#FFFFFF',
                ml: '41px',
                mt: '45px',
                lineHeight: '34px'
              }}
            >
              Komoverse: Nexus Hub is live in Early Access!
            </Typography>
            <Button
              variant='contained'
              sx={{
                mt: '31px',
                ml: '41px',
                mb: !hiddenmd ? '34px' : '20px',
                mr: '11px',
                borderRadius: '26px',
                background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                fontWeight: 700,
                backgroundColor: '#fff',
                fontSize: '14px',
                lineHeight: '17px',
                fontStyle: 'normal'
              }}
            >
              Download Komoverse Game
            </Button>
            <Link
              href='#'
              sx={{
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '17px',
                color: '#00DB09',
                display: !hiddenmd ? 'inline-block' : 'block',
                ml: '41px',
                mb: '31px'
              }}
            >
              Read the announcement
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ width: '100%', typography: 'body1', border: '3px solid #fff' }}>
            <TabContext value={totalByDays}>
              <Box sx={{ borderBottom: 1, borderColor: '#fff' }}>
                <TabList
                  onChange={handleChangeTotalByDays}
                  aria-label='lab API tabs example'
                  sx={{
                    ml: '25px'
                  }}
                >
                  <Tab
                    label='Last 24h'
                    style={{
                      color: '#fff',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      paddingTop: '27px',
                      textTransform: 'none',
                      paddingBottom: '21px',
                      paddingleft: '20px',
                      paddingRight: '20px'
                    }}
                    value='1'
                  />
                  <Tab
                    label='7 days'
                    value='2'
                    style={{
                      color: '#fff',
                      textTransform: 'none',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      paddingTop: '27px',
                      paddingBottom: '21px',
                      paddingleft: '20px',
                      paddingRight: '20px'
                    }}
                  />
                  <Tab
                    label='30 days'
                    value='3'
                    style={{
                      color: '#fff',
                      fontSize: '18px',
                      textTransform: 'none',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      paddingTop: '27px',
                      paddingBottom: '21px',
                      paddingleft: '20px',
                      paddingRight: '20px'
                    }}
                  />
                  <Tab
                    label='365 days'
                    value='4'
                    style={{
                      color: '#fff',
                      fontSize: '18px',
                      textTransform: 'none',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      paddingTop: '27px',
                      paddingBottom: '21px'

                      // padding: "21px 16px !important",
                      // paddingBottom: "21px",
                    }}
                  />
                </TabList>
              </Box>
              <TabPanel value='1'>
                <Box sx={{ pt: '26px', pl: '24px', pb: '17px' }}>
                  <Grid container direction={!hiddenmd ? 'row' : 'column'} spacing={!hiddenmd ? '0' : '10'}>
                    <Grid
                      item
                      xs={4}
                      lg={4}
                      md={4}
                      container
                      direction='row'
                      justifyContent={!hiddenmd ? 'flex-start' : 'center'}
                      alignItems='flex-start'
                    >
                      <Grid
                        item
                        sx={{
                          width: '80px',
                          height: '80px',
                          mr: 4
                        }}
                      >
                        <Box component='img' alt={'ellipse'} src={'/assets/images/ellipse1.png'} />
                      </Grid>
                      <Grid item>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '14px',
                              color: 'white',
                              lineHeight: '39px',
                              fontStyle: 'normal'
                            }}
                          >
                            Total Sales
                          </Typography>
                          <Typography
                            sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF', lineHeight: '17.07px' }}
                          >
                            32,182
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      lg={4}
                      md={4}
                      container
                      direction='row'
                      justifyContent={!hiddenmd ? 'flex-start' : 'center'}
                      alignItems='flex-start'
                    >
                      <Grid
                        item
                        sx={{
                          width: '80px',
                          height: '80px',
                          mr: 4
                        }}
                      >
                        <Box component='img' alt={'solana-logo-free'} src={'/assets/images/solana-logo-free.png'} />
                      </Grid>
                      <Grid item>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '14px',
                              color: 'white',
                              lineHeight: '39px',
                              fontStyle: 'normal'
                            }}
                          >
                            Total Volume (SOL)
                          </Typography>
                          <Typography
                            sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF', lineHeight: '17.07px' }}
                          >
                            4,821.32
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      lg={4}
                      md={4}
                      container
                      direction='row'
                      justifyContent={!hiddenmd ? 'flex-start' : 'center'}
                      alignItems='flex-start'
                    >
                      <Grid
                        item
                        sx={{
                          width: '80px',
                          height: '80px',
                          mr: 4
                        }}
                      >
                        <Box component='img' alt={'komo2'} src={'/assets/images/komo2.png'} />
                      </Grid>
                      <Grid item>
                        <Box>
                          <Typography
                            sx={{
                              fontWeight: 700,
                              fontSize: '14px',
                              color: 'white',
                              lineHeight: '39px',
                              fontStyle: 'normal'
                            }}
                          >
                            Komodo Sold
                          </Typography>
                          <Typography
                            sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF', lineHeight: '17.07px' }}
                          >
                            1,247
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              {/* <TabPanel value='2'>Item Two</TabPanel> */}
              {/* <TabPanel value='3'>Item Three</TabPanel> */}
              {/* <TabPanel value='4'>Item Four</TabPanel> */}
            </TabContext>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} container direction={!hiddenmd ? 'row' : 'column'} justifyContent='space-between'>
          <Grid
            item
            sx={{
              width: !hiddenmd ? '46%' : '100%',
              mb: 7
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 700,
                fontSize: '22px',
                fontStyle: 'normal',
                color: '#FFFFFF',
                mt: '14px',
                mb: '15px',
                lineHeight: '27px'
              }}
            >
              Recently Listed
            </Typography>
            <Box sx={{ width: '100%', border: '3px solid #fff' }}>
              <TabContext value={recentListTable}>
                <Box sx={{ borderBottom: 1, borderColor: '#fff' }}>
                  <TabList
                    onChange={handleChangeRecentListTable}
                    aria-label='lab API tabs example'
                    sx={{
                      ml: '25px'
                    }}
                  >
                    <Tab
                      label='Komodos'
                      style={{
                        color: recentListTable == 1 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='1'
                    />
                    <Tab
                      label='Items'
                      style={{
                        // color: '#fff',
                        color: recentListTable == 2 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='2'
                    />
                    <Tab
                      label='Gacha Heroes'
                      style={{
                        // color: '#fff',
                        color: recentListTable == 3 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='3'
                    />
                    <Tab
                      label='Land'
                      style={{
                        color: recentListTable == 4 ? '#fff' : '#777777',
                        // color: '#fff',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='4'
                    />
                  </TabList>
                </Box>
                <TabPanel
                  value='1'
                  sx={{
                    padding: 0
                  }}
                >
                  <RecentListTabs />
                </TabPanel>
                <TabPanel value='2'></TabPanel>
                {/* <TabPanel value='3'>Item Three</TabPanel> */}
                {/* <TabPanel value='4'>Item Four</TabPanel> */}
              </TabContext>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              width: !hiddenmd ? '52%' : '100%',
              mb: 7
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 700,
                fontSize: '22px',
                fontStyle: 'normal',
                color: '#FFFFFF',
                mt: '14px',
                mb: '15px',
                lineHeight: '27px'
              }}
            >
              Recent Transaction
            </Typography>
            <Box sx={{ width: '100%', border: '3px solid #fff' }}>
              <TabContext value={recentTransactionTable}>
                <Box sx={{ borderBottom: 1, borderColor: '#fff' }}>
                  <TabList
                    onChange={handleChangeRecentTransactionTable}
                    aria-label='lab API tabs example'
                    sx={{
                      ml: '20px'
                    }}
                  >
                    <Tab
                      label='Komodos'
                      style={{
                        color: recentTransactionTable == 1 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='1'
                    />
                    <Tab
                      label='Items'
                      style={{
                        // color: '#fff',
                        color: recentTransactionTable == 2 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='2'
                    />
                    <Tab
                      label='Gacha Heroes'
                      style={{
                        // color: '#fff',
                        color: recentTransactionTable == 3 ? '#fff' : '#777777',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='3'
                    />
                    <Tab
                      label='Land'
                      style={{
                        color: recentTransactionTable == 4 ? '#fff' : '#777777',
                        // color: '#fff',
                        fontSize: '14px',
                        lineHeight: '17px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        paddingTop: '22px',
                        textTransform: 'none',
                        paddingBottom: '17px',
                        paddingleft: '7px',
                        paddingRight: '7px'
                      }}
                      value='4'
                    />
                  </TabList>
                </Box>
                <TabPanel value='1' sx={{
                  m: 0,
                  p: 0
                }}>
                  <RecentTransaction />
                </TabPanel>
                {/* <TabPanel value='2'>Item Two</TabPanel> */}
                {/* <TabPanel value='3'>Item Three</TabPanel> */}
                {/* <TabPanel value='4'>Item Four</TabPanel> */}
              </TabContext>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
