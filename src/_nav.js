import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import PeopleIcon from '@mui/icons-material/People'
import ArticleIcon from '@mui/icons-material/Article'
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Users',
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <PeopleIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavTitle,
    name: 'Articles',
  },
  {
    component: CNavItem,
    name: 'Articles',
    to: '/articles',
    icon: <ArticleIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavTitle,
    name: 'Devis',
  },
  {
    component: CNavItem,
    name: 'Devis',
    to: '/devis',
    icon: <CurrencyExchangeTwoToneIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
  {
    component: CNavTitle,
    name: 'Factures',
  },
  {
    component: CNavItem,
    name: 'Factures',
    to: '/factures',
    icon: <RequestQuoteIcon style={{ marginRight: 20, marginLeft: 5 }} />,
  },
]

export default _nav
