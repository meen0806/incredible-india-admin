import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, ReferenceField, SelectInput, TextField, useGetList} from 'react-admin'


export const TransportList=()=>{

    return(
    <List>
        <Datagrid>


            <ReferenceField source="place_id" reference="places" label="PlaceId"></ReferenceField>
            <TextField source='transport_type' label="transport_type"/>
            <TextField source='transport_name' label="name"/>
            <TextField source='distance_km' label="distance_km"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
        
    </List>
    )
}

