// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

const StyledLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none'
})

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out'
}))

// ** Styled Components
const MenuHeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight
}))

const LogoStyle = styled('img')({
  objectFit: 'cover'
})

const VerticalNavHeader = props => {
  // ** Props
  const { verticalNavMenuBranding: userVerticalNavMenuBranding, toggleNavVisibility } = props

  // ** Hooks
  const theme = useTheme()

  return (
    <MenuHeaderWrapper
      className='nav-header'
      sx={{
        ml: 8,
        mt: 5,
        mb: '18px',
        cursor: 'pointer'
      }}
    >
      {userVerticalNavMenuBranding ? (
        userVerticalNavMenuBranding(props)
      ) : (
        <Link href='/' passHref>
          <Box>
            <img src={'/logo.svg'} />
          </Box>
        </Link>
      )}

      <IconButton
        color='inherit'
        onClick={() => {
          toggleNavVisibility()

        }}
        sx={{
          position: 'fixed',
          left: '222px',
          top: '98px',
          zIndex: 10000,
          transition: 'left 0.01s'
        }}
      >
        <img width={18} height={18} alt='menu' src='/assets/images/appbar-menu.png' />
      </IconButton>
    </MenuHeaderWrapper>
  )
}

export default VerticalNavHeader
