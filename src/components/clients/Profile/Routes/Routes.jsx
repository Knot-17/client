import UserDetails from '../ProfilePages/UserDetails'
import AccountDetails from '../ProfilePages/AccountDetails'
import WeddingDetails from '../ProfilePages/WeddingDetails'


export default[
    {path:"/user/profile",component:UserDetails},
    {path:"/user/profile/accountdetails",component:AccountDetails},
    {path:"/user/profile/weddingdetails",component:WeddingDetails}
]