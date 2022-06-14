// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
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

import SvgIconStyle from '../../@core/components/SvgIconStyle'

function AccountIcon() {
  return (
    <SvgIconStyle
      src={'/icons/Account.svg'}
      sx={{
        width: '32px',
        height: '32px',
        color: '#039700'
      }}
    />
  )
}

function VerifiedIcon() {
  return (
    <SvgIconStyle
      src={'/icons/verified.svg'}
      sx={{
        width: '14.27px',
        height: '11.8px',
        color: '#00E309'
      }}
    />
  )
}

const Account = () => {
  // ** State

  return (
    <Box sx={{
      mb: "30px"
    }}>
      <Box
        sx={{
          pt: '29px',
          pb: '22px',
          borderBottom: '1px solid #AAAAAA',
        }}
      >
        <Box
          sx={{
            ml: '25px'
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
            <AccountIcon />
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
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '29px',
                color: '#FFFFFF',
                mr: '9px'
              }}
            >
              Account Management
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: '51px 45px 50px 51px'
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF',
                mb: '25px'
              }}
            >
              KOMO Account
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              KOMO Username
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Aviabee
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Email
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF',
                display: 'inline'
              }}
            >
              contact@aviabee.com
            </Typography>
            <Chip
              label='Verified'
              icon={
                <VerifiedIcon
                  sx={{
                    width: '14px',
                    display: 'inline-block'
                  }}
                />
              }
              sx={{
                backgroundColor: 'transparent',
                border: '1px solid #00E309',
                pl: '6px',
                ml: '12px',
                pr: '9px',
                borderRadius: 0,
                fontWeight: 400,
                fontSize: '10px',
                lineHeight: '12px',
                color: '#FFFFFF',
                width: '73px',
                height: '18px',
                '& > .MuiChip-label': {
                  p: 0,
                  pl: '5px'
                }
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Solana Wallet
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              BwkQW4MWv6iVpJt9vZXwWxD9gRbDyfxZQGTLTCnmprW7
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Member Since
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              5 March 2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{
                width: '389px',
                height: '50px',
                background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                borderRadius: '26px',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '21px',
                color: '#FFFFFF'
              }}
            >
              Change Email & Password
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF',
                mb: '25px',
                mt: '57px'
              }}
            >
              GAME Account
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Game ID
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              5479BDEAC1471431s
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              Game Display Name
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant='body1'
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '22px',
                color: '#FFFFFF'
              }}
            >
              5479BDEAC1471431
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              sx={{
                width: '389px',
                height: '50px',
                background: 'linear-gradient(180deg, #007E05 0%, #000000 100%)',
                borderRadius: '26px',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '21px',
                color: '#FFFFFF'
              }}
            >
              Change Game Display Name
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Account
