import React from "react";

import BeuticiansList from "./../Pages/Beuticians";
import PhotographersList from "./../Pages/PhotographersList";
import CaterersList from "./../Pages/CaterersList";
import DacoratorsList from "./../Pages/DecoratorsList";
import DestinationPlannersList from "./../Pages/DestinationPlannersList";
import MusicBandsList from "./../Pages/MusicBandsList";


export default[
    {path:"/client/beuticians",component:BeuticiansList},
    {path:"/client/PhotographersList",component:PhotographersList},
    {path:"/client/CaterersList",component:CaterersList},
    {path:"/client/DecoratorsList",component:DacoratorsList},
    {path:"/client/DestinationPlannersList",component:DestinationPlannersList},
    {path:"/client/MusicBandsList",component:MusicBandsList}
]