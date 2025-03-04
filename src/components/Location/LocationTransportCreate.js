import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, SelectInput, useGetList } from 'react-admin';

const transportTypeChoices = [
  { id: 'Railway Station', name: 'Railway Station' },
  { id: 'Airport', name: 'Airport' },
  { id: 'Bus Stand', name: 'Bus Stand' },
];


export const LocationTransportCreate = () => {
  const { data: locations, isLoading } = useGetList("locations", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "name", order: "ASC" },
    filter: {},
  });

  const filteredCity = locations?.filter(
    (location) => location.parent_id !== null
  );
  console.log("filteredCity",filteredCity);

  if (isLoading) return <span>Loading...</span>;

  return (
    <Create>
      <SimpleForm>
        <SelectInput
          label="Select Place"
          source="location_id"
          choices={filteredCity?.map((location) => ({
            id: location.id,
            name: location.name,
          })) || []}
          optionText="name"
          optionValue="id"
        />
        
        <SelectInput 
          source="transport_type" 
          label="Transport Type" 
          choices={transportTypeChoices} 
          optionText="name"  
          optionValue="name" 
        />

        <TextInput source="transport_name" label="Transport Name" />
        {/* <NumberInput source="distance_km" label="Distance (km)" /> */}
      </SimpleForm>
    </Create>
  );
};
