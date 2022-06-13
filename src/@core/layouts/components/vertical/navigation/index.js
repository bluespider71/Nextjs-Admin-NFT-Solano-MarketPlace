// ** React Import
import { useRef, useState } from 'react'

// ** MUI Import
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

// ** Third Party Components
import PerfectScrollbar from 'react-perfect-scrollbar'

// ** Component Imports
import Drawer from './Drawer'
import VerticalNavItems from './VerticalNavItems'
import VerticalNavHeader from './VerticalNavHeader'

// ** Navigation Imports
import VerticalNavItemDatas from 'src/navigation/vertical'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const StyledBoxForShadow = styled(Box)({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block'
  }
})

const Navigation = props => {
  // ** Props
  const {
    hidden,
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent,
    toggleNavVisibility: toggleNavVisibility
  } = props

  // ** States
  const [groupActive, setGroupActive] = useState([])
  const [currentActiveGroup, setCurrentActiveGroup] = useState([])

  // ** Ref
  const shadowRef = useRef(null)

  // ** Hooks
  const theme = useTheme()

  // ** Fixes Navigation InfiniteScroll
  const handleInfiniteScroll = ref => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect
      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  // ** Scroll Menu
  const scrollMenu = container => {
    container = hidden ? container.target : container
    if (shadowRef && container.scrollTop > 0) {
      // @ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        // @ts-ignore
        shadowRef.current.classList.add('d-block')
      }
    } else {
      // @ts-ignore
      shadowRef.current.classList.remove('d-block')
    }
  }
  const ScrollWrapper = hidden ? Box : PerfectScrollbar

  return (
    <Drawer toggleNavVisibility={toggleNavVisibility} {...props}>
      <VerticalNavHeader toggleNavVisibility={props.toggleNavVisibility} {...props} />
      <Box>
        {beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null}
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {userVerticalNavMenuContent ? (
            userVerticalNavMenuContent(props)
          ) : (
            <List className='nav-items' sx={{ transition: 'padding .25s ease', mx: 3.75 }}>
              <VerticalNavItems
                groupActive={groupActive}
                setGroupActive={setGroupActive}
                currentActiveGroup={currentActiveGroup}
                setCurrentActiveGroup={setCurrentActiveGroup}
                {...props}
              />
            </List>
          )}
        </Box>
      </Box>
      <Button
        variant='contained'
        sx={{
          mt: 8,
          mx: 3.75,
          borderRadius: '26px',
          background: 'linear-gradient(180deg, #007E05 0%, #000000 100%);',
          fontWeight: 700,
          backgroundColor: '#fff'
        }}
      >
        Connect Wallet
      </Button>

      <Button
        variant='contained'
        sx={{
          mt: 8,
          mx: 3.75,
          borderRadius: '26px',
          background: 'linear-gradient(180deg, #007E05 0%, #000000 100%);',
          fontWeight: 700,
          backgroundColor: '#fff'
        }}
      >
        BwkQ...prW7
      </Button>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <List className='nav-items' sx={{ transition: 'padding .25s ease', mx: 3.75, py: 1 }}>
          <VerticalNavItems {...props} verticalNavItems={VerticalNavItemDatas('user')} />
        </List>
      </Box>
    </Drawer>
  )
}

export default Navigation
