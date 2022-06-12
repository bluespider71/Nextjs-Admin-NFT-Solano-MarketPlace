import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

import { useSettings } from 'src/@core/hooks/useSettings'


const AppBarContent = props => {
  // ** Props
  const { hidden, toggleNavVisibility, navVisible, setNavVisible } = props
  const { settings, saveSettings } = useSettings()

  const getZIndex = () => {
    let navHidden = settings.navHidden

    if(hidden) {
      if(hidden) {
        if(navVisible) {
          return 0;
        }else {
          return 10000;
        }
      }
    }else {
      return 0;
    }



  }


  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box
        className='actions-left'
        sx={{
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          left: 0,
          top: 0
        }}
      >
        <IconButton
          color='inherit'
          onClick={toggleNavVisibility}
          sx={{
            position: 'fixed',
            left: '-18px',
            top: '98px',
            zIndex: getZIndex,
            transition: "zIndex 0.2s"
          }}
        >
          <img width={18} height={18} alt='menu' src='/assets/images/appbar-menu.png' />
        </IconButton>
      </Box>
    </Box>
  )
}

export default AppBarContent
