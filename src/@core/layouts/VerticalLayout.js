// ** React Imports
import { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Components
import AppBar from './components/vertical/appBar'
import Navigation from './components/vertical/navigation'
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { Typography } from '@mui/material'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const VerticalLayout = props => {
  // ** Props
  const { settings, children, scrollToTop, saveSettings } = props

  // ** Vars
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize
  const navHidden = settings.navHidden

  // ** States
  const [navVisible, setNavVisible] = useState(false)

  const hiddenlg = useMediaQuery(theme => theme.breakpoints.down('lg'))

  // ** Toggle Functions
  const toggleNavVisibility = () => {
    setNavVisible(!navVisible)
    if (!hiddenlg) {
      saveSettings({ ...settings, ['navHidden']: navVisible })
    } else {
      saveSettings({ ...settings, ['navHidden']: true })
    }
  }

  return (
    <>
      <VerticalLayoutWrapper className='layout-wrapper'>
        {navHidden ? (
          <Navigation
            navWidth={navWidth}
            navVisible={navVisible}
            setNavVisible={setNavVisible}
            toggleNavVisibility={toggleNavVisibility}
            {...props}
          />
        ) : null}

        <MainContentWrapper className='layout-content-wrapper'>
          <AppBar
            toggleNavVisibility={toggleNavVisibility}
            navVisible={navVisible}
            setNavVisible={setNavVisible}
            {...props}
          />
          <ContentWrapper
            className='layout-page-content'
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' }
              })
            }}
          >
            {children}
          </ContentWrapper>

          <DatePickerWrapper sx={{ zIndex: 11 }}>
            <Box id='react-datepicker-portal'></Box>
          </DatePickerWrapper>
        </MainContentWrapper>
      </VerticalLayoutWrapper>
      <Footer {...props}></Footer>

      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed' sx={{
          zIndex: "100000"
        }}>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </>
  )
}

export default VerticalLayout
