import React from "react";
import {Admin,Resource,} from "react-admin";
import dataProvider from "./components/DataProvider/dataProvider"; 


import { LocationCreate } from "./components/Location/LocationCreate";
import { LocationList } from "./components/Location/LocationList";
import { LocationEdit } from "./components/Location/LocationEdit";


import {CategoryCreate} from "./components/Category/CategoryCreate";
import { CategoryList } from "./components/Category/CategoryList";
import {CategoryEdit} from "./components/Category/CategoryEdit";


import { PlaceCreate } from "./components/Place/PlaceCreate";
import { PlaceList } from "./components/Place/PlaceList";
import { PlaceEdit } from "./components/Place/PlaceEdit";
import { TransportCreate } from "./components/Transport/TransportCreate";
import { TransportList } from "./components/Transport/TransportList";
import { TransportEdit } from "./components/Transport/TransportEdit";



const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="locations" create={LocationCreate} edit={LocationEdit} list={LocationList}/>
      <Resource name="categories" create={CategoryCreate} list={CategoryList} edit={CategoryEdit}/>
      <Resource name="places" create={PlaceCreate}  edit={PlaceEdit} list={PlaceList}/>
      <Resource name="transport" create={TransportCreate} edit={TransportEdit} list={TransportList}/>
     </Admin>
);

export default App;
