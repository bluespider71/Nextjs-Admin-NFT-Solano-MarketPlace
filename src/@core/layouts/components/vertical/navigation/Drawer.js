// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

import MuiSwipeableDrawer from '@mui/material/SwipeableDrawer'
import useMediaQuery from '@mui/material/useMediaQuery'

// import Drawer from '@mui/material/Drawer'

const SwipeableDrawer = styled(MuiSwipeableDrawer)({
  overflowX: 'hidden',
  overflowY: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none'
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out'
  },
  '& .MuiPaper-root': {
    overflow: 'hidden'
  }
})

const MenuDrawer = props => {
  // ** Props
  const { hidden, children, navWidth, navVisible, setNavVisible, settings, saveSettings } = props

  // ** Hook
  const hiddenlg = useMediaQuery(theme => theme.breakpoints.down('lg'))

  // ** Hook
  const theme = useTheme()

  // Drawer Props for Mobile & Tablet screens
  const MobileDrawerProps = {
    open: navVisible,
    onOpen: () => {
      setNavVisible(true)
    },
    onClose: () => {
      setNavVisible(false)
    },
    ModalProps: {
      keepMounted: false // Better open performance on mobile.
    }
  }

  // Drawer Props for Desktop screens
  const DesktopDrawerProps = {
    open: navVisible,
    onOpen: () => {
      setNavVisible(true)
    },
    onClose: () => {
      setNavVisible(false)
    }
  }

  return (
    <MuiSwipeableDrawer
      className='layout-vertical-nav'
      id='layout-vertical-nav'
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{ sx: { width: navWidth } }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 1,
          borderColor: theme.palette.navigatorBorderColor,
          backgroundColor: theme.palette.background.default
        }
      }}
    >
      {children}
    </MuiSwipeableDrawer>
  )
}

export default MenuDrawer
