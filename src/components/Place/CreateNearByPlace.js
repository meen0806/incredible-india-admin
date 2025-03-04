import { useState } from "react";
import { Create, SimpleForm, NumberInput, useGetList, SelectInput } from "react-admin";

const CreateNearbyPlace = (props) => {
  const { data: places, isLoading } = useGetList("places", {
    pagination: { page: 1, perPage: 10 },
    sort: { field: "name", order: "ASC" },
    filter: {},
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  return ( 
    <Create {...props}>
      <SimpleForm>
        {/* Place Selection */}
        <SelectInput
          label="Select Place"
          source="place_id._id"
          choices={places?.map((place) => ({
            id: place.id,
            name: place.name,
          }))}
          optionText="name"
          optionValue="id"
          onChange={(e) => setSelectedPlace(e.target.value)} 
        />

        
        <SelectInput
          label="Select Nearby Place"
          source="nearbyplace_id"
          choices={places
            ?.filter((place) => place.id !== selectedPlace) 
            .map((place) => ({
              id: place.id,
              name: place.name,
            }))}
          optionText="name"
          optionValue="id"
        />

        {/* Distance Input */}
        <NumberInput source="distance_km" label="Distance (km)" />
      </SimpleForm>
    </Create>
  );
};

export default CreateNearbyPlace;
