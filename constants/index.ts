import { createCampaign, dashboard, logout, payment, profile, withdraw} from '../assets';

import Profile from '../assets/profile.svg'

export const NavLinks=[
    {
        name: 'dashboard',
        imgURl: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgURl: createCampaign,
        link: '/create-campaign',
    },
    {
        name: 'payment',
        imgURl: payment,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdrawl',
        imgURl: withdraw,
        link: '/withdrawl',
        disabled: true
    },
    {
        name: 'profile',
        imgURl: profile,
        link: '/profile',
    },
    {
        name: 'logout',
        imgURl: logout,
        link: '/',
    }  
]