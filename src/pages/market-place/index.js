// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'
import { FaShoppingCart } from 'react-icons/fa'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'


import Komodos from 'src/views/market-place/Komodos'
import ItemDetail from 'src/views/market-place/ItemDetail'



// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import { Typography } from '@mui/material'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const MarketPlace = () => {
  // ** State
  const [marketplaceTabItemValue, setMarketplaceTabItemValue] = useState("1")

  const handleChangeMarketplaceTabItemValue = (event, newValue) => {
    setMarketplaceTabItemValue(newValue)
  }

  const tabNames = ['Komodos', 'Items', 'Gacha Heroes', 'Land']

  return (
    <Box
      sx={{
        pt: '32.4px'
      }}
    >
      <Box
        sx={{
          ml: 8.5
        }}
      >
        <Box
          sx={{
            lineHeight: '26px',
            verticalAlign: 'middle',
            display: 'inline-block',
            marginRight: 2.25
          }}
        >
          <FaShoppingCart
            style={{
              color: '#039700',
              width: '31px',
              height: '29.36px'
            }}
          />
        </Box>

        <Box
          sx={{
            display: 'inline-block'
          }}
        >
          <Typography
            variant='body1'
            sx={{
              fontStyle: 'normal',
              fontWeight: 800,
              fontSize: '24px',
              lineHeight: '29px',
              color: '#FFFFFF'
            }}
          >
            Marketplace
          </Typography>
        </Box>
      </Box>
      <TabContext value={marketplaceTabItemValue}>
        <TabList
          onChange={handleChangeMarketplaceTabItemValue}
          aria-label='account-settings tabs'
          sx={{
            borderBottom: theme => `1px solid #CBCBCB`,
            mt: 4,
            ' > .MuiTabs-fixed': {
              ml: 6
            }
          }}
        >
          {tabNames.map((name, i) => {
            return (
              <Tab
                value={(i + 1).toString()}
                key={i}
                sx={{
                  py: 3.5,
                  px: 4.75
                }}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={'/assets/images/marketplace-tab-icon.png'}
                      alt='marketplace-tab-icon'
                      width={24}
                      height={24}
                    />
                    <TabName
                      sx={{
                        marginLeft: 1.75,
                        textTransform: 'initial',
                        color: marketplaceTabItemValue == i + 1 ? '#fff' : '#777777'
                      }}
                    >
                      {name}
                    </TabName>
                  </Box>
                }
              />
            )
          })}
        </TabList>

        <TabPanel sx={{ p: 0 }} value='1'>
          <Komodos></Komodos>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='2'>
          <ItemDetail></ItemDetail>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='3'></TabPanel>
        <TabPanel sx={{ p: 0 }} value='4'></TabPanel>
      </TabContext>
    </Box>
  )
}

export default MarketPlace
