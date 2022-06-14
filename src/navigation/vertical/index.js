// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import SvgIconStyle from '../../@core/components/SvgIconStyle'
import { FaHome } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'

function Komodo_Express() {
  return (
    <SvgIconStyle
      src={'/icons/Komodo_Express.svg'}
      sx={{
        width: '20px',
        height: '20px'
      }}
    />
  )
}

function Account() {
  return (
    <SvgIconStyle
      src={'/icons/Account.svg'}
      sx={{
        width: '20px',
        height: '20px'
      }}
    />
  )
}

function Inventory() {
  return (
    <SvgIconStyle
      src={'/icons/Inventory.svg'}
      sx={{
        width: '20px',
        height: '20px'
      }}
    />
  )
}

const navigation = auth => {
  if (auth == 'guest') {
    return [
      {
        title: 'Home',
        icon: FaHome,
        path: '/'
      },
      {
        title: 'Marketplace',
        icon: FaShoppingCart,
        path: '/market-place'
      },
      {
        title: 'Komodo Express',
        icon: Komodo_Express,
        path: '/komodo_express'
      }
    ]
  } else if (auth == 'user') {
    return [
      {
        title: 'Account',
        icon: Account,
        path: '/account'
      },
      {
        title: 'Inventory',
        icon: Inventory,
        path: '/inventory'
      },
    ]
  }
}

export default navigation
