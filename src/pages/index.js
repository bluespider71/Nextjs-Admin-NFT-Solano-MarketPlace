import { useState } from 'react'
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

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Dashboard = () => {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
              minHeight: '190px',
              border: '3px solid #FFFFFF'
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 900, fontSize: '28px', color: '#FFFFFF', ml: '44px', mt: '48px' }}
            >
              Komoverse: Nexus Hub is live in Early Access!
            </Typography>
            <Button
              variant='contained'
              sx={{
                mt: '15px',
                ml: '44px',
                borderRadius: '26px',
                background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                fontWeight: 700,
                backgroundColor: '#fff'
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
                ml: '11px',
                verticalAlign: 'sub',
                display: 'inline-block'
              }}
            >
              Read the announcement
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          {/* <StatisticsCard /> */}
          <Box sx={{ width: '100%', typography: 'body1', border: '3px solid #fff' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={handleChange}
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
                <Box sx={{ pt: '27px', pl: '26px', pb: '20px' }}>
                  <Grid container spacing={6}>
                    <Grid item xs={4} lg={4} md={4} container>
                      <Grid item xs={5}>
                        <IconButton
                          size='small'
                          aria-label='settings'
                          className='card-more-options'
                          sx={{
                            backgroundColor: '#007E05',
                            padding: '26px 23px',
                            '&:hover': {
                              backgroundColor: '#007E05',
                              cursor: 'initial'
                            }
                          }}
                        >
                          <SvgIconStyle
                            src={'/icons/ellipse.svg'}
                            sx={{
                              width: '40px',
                              height: '31px',
                              color: '#fff'
                            }}
                          />
                        </IconButton>
                      </Grid>
                      <Grid item xs={7}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '14px', color: 'white' }}>
                            Total Sales
                          </Typography>
                          <Typography sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF' }}>32,182</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} lg={4} md={4} container>
                      <Grid item xs={5}>
                        <Box
                          component='img'
                          alt={'ellipse'}
                          src={'/assets/images/solana-logo-free.png'}
                          sx={{ width: '80px', height: '80px', mr: 4 }}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '14px', color: 'white' }}>
                            Total Volume (SOL)
                          </Typography>
                          <Typography sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF' }}>4,821.32</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid item xs={4} lg={4} md={4} container>
                      <Grid item xs={5}>
                        <Box
                          component='img'
                          alt={'ellipse'}
                          src={'/assets/images/komo1.png'}
                          sx={{ width: '80px', height: '80px', mr: 4 }}
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '14px', color: 'white' }}>
                            Komodo Sold
                          </Typography>
                          <Typography sx={{ fontWeight: 700, fontSize: '32px', color: '#FFFFFF' }}>1,247</Typography>
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
        <Grid item xs={12} md={12} lg={12}>
          <Box
            component='img'
            alt={'ellipse'}
            src={'/11111.png'}
            sx={{ width: '100%' }}
          />
        </Grid>
        {/*
        <Grid item xs={6} md={6} lg={6}></Grid>

        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
