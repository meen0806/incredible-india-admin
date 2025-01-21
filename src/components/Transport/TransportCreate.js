import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, SelectInput, useGetList } from 'react-admin';


// const transportTypeChoices = [
//   { id: 'Railway Station', name: 'Railway Station' },
//   { id: 'Airport', name: 'Airport' },
//   { id: 'Bus Stand', name: 'Bus Stand' },
//   ];

export const TransportCreate = () => {
    const {data:places,isLoading} = useGetList("places", {
    
    pagination: { page: 2, perPage:10 },
    sort: { field: "name", order: "ASC" },
    filter: {},
  });

  if(isLoading)
    return<>
    <span>Loading...</span>
    </>
return(
    <Create>
        <SimpleForm>
            
            
            <SelectInput
                      label="Select Palace"
                      source="place_id"
                      choices={places.map((places) => ({
                        id: places.id,
                        name: places.name,
                      }))}
                      optionText="name"
                      optionValue="id"
                      
                      
                    />
             <TextInput source='transport_type' label='Transport Type'/>
             <TextInput source='transport_name' label='Transport Name' />
            <NumberInput source='distance_km' label='Distance (km)' />
        </SimpleForm>
    </Create>
  )
}
