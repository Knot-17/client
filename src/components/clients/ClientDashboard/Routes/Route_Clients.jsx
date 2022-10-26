import React from "react";

import BeuticiansList from "../pages/Beuticians";
import PhotographersList from "../pages/PhotographersList";
import CaterersList from "../pages/CaterersList";
import DacoratorsList from "../pages/DecoratorsList";
import DestinationPlannersList from "../pages/DestinationPlannersList";
import MusicBandsList from "../pages/MusicBandsList";
<<<<<<< HEAD
// import CheckListPage from "../pages/CheckListPage";
import PaymentGetway from "../PaymentGetway/PaymentGetway";

export default [
  { path: "/client/beuticians", component: BeuticiansList },
  { path: "/client/PhotographersList", component: PhotographersList },
  { path: "/client/CaterersList", component: CaterersList },
  { path: "/client/DecoratorsList", component: DacoratorsList },
  {
    path: "/client/DestinationPlannersList",
    component: DestinationPlannersList,
  },
  { path: "/client/MusicBandsList", component: MusicBandsList },
  { path: "/client/Payment", component: PaymentGetway },
];
=======
import CheckListPage from "../pages/CheckListPage";

import VenderReview from "../VerdersReviews/VenderReviews";



export default[
    {path:"/client/beuticians",component:BeuticiansList},
    {path:"/client/PhotographersList",component:PhotographersList},
    {path:"/client/CaterersList",component:CaterersList},
    {path:"/client/DecoratorsList",component:DacoratorsList},
    {path:"/client/DestinationPlannersList",component:DestinationPlannersList},
    {path:"/client/MusicBandsList",component:MusicBandsList},
    {path:"/client/CheckList",component:CheckListPage},
    {path:"/client/VenderReview",component:VenderReview }
]
>>>>>>> c1bef72946436468c309ff2b02c4e8727d0e0dd1
