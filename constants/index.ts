import { createCampaign, dashboard, logout, payment, profile, withdraw} from '../assets';

export const NavLinks=[
    {
        name: 'dashboard',
        imgURL: dashboard,
        link: '/',
    },
    {
        name: 'campaign',
        imgURL: createCampaign,
        link: '/create-campaign',
    },
    {
        name: 'payment',
        imgURL: payment,
        link: '/',
        disabled: true,
    },
    {
        name: 'withdrawl',
        imgURL: withdraw,
        link: '/withdrawl',
        disabled: true
    },
    {
        name: 'profile',
        imgURL: profile,
        link: '/profile',
    },
    {
        name: 'logout',
        imgURL: logout,
        link: '/',
    }  
]