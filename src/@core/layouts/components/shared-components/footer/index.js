// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'


// ** Footer Content Component
import FooterContent from './FooterContent'

const Footer = props => {
  // ** Props
  const { settings, footerContent: userFooterContent } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = settings

  return (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "50px",
        // position: "absolute",
        // bottom: 0,
        // left: 0,
        // right: 0,
        width: "100%",
        bgcolor: "#252525",
      }}
    >
      <Box>
        <Typography
          variant='body1'
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '15px',
            color: '#FFFFFF'
          }}
        >
          Copyright 2022 PT. Komodo Legends Interaktif
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
