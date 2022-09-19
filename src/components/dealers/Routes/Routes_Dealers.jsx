
import React from 'react'

import AddDestinations from '../AddEvents/Destinations/addDestination';
import AddPhotographers from '../AddEvents/Photogrphy/addPhotographers';
import AddBeauticians from '../AddEvents/Beauticians/addBeauticians';
import AddMusicbands from '../AddEvents/Musicbands/addMusicbands';
import AddCateres from '../AddEvents/Caterers/addCaterers';
import AddDecorators from '../AddEvents/Decorators/addDecorators';



export default[
    {path:"/add/destinations",component:AddDestinations},
    {path:"/add/photographers",component:AddPhotographers},
    {path:"/add/beauticians",component:AddBeauticians},
    {path:"/add/musicbands",component:AddMusicbands},
    {path:"/add/caterers",component:AddCateres},
    {path:"/add/decorators",component:AddDecorators}
]
