import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, ReferenceField, SelectInput, TextField, useGetList} from 'react-admin'


export const LocationTransportList =()=>{

    return(
    <List>
        <Datagrid>


         
            <ReferenceField source="location_id" reference="locations" label="Place">
  <TextField source="name" />
</ReferenceField>

            <TextField source='transport_type' label="transport_type"/>
            <TextField source='transport_name' label="name"/>
            {/* <TextField source='distance_km' label="distance_km"/> */}
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
        
    </List>
    )
}

