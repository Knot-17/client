import UserManagement from "../Pages/UserManagement"
import DealersManagement from "../Pages/DealersManagement"
import AdsManagement from "../Pages/AdsManagement"
import Settings from "../Pages/Settings"

export default[ 
    {path:"/admin/profile",component:UserManagement},
    {path:"/admin/profile/dealers",component:DealersManagement},
    {path:"/admin/profile/ads",component:AdsManagement},
    {path:"/admin/profile/settings",component:Settings}
]