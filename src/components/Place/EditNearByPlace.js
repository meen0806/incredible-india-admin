import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const EditNearbyPlace = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled label="ID" />
      <TextInput source="place_id" label="Place ID" />
      <TextInput source="nearbyplace_id" label="Nearby Place ID" />
      <NumberInput source="distance_km" label="Distance (km)" />
    </SimpleForm>
  </Edit>
);

export default EditNearbyPlace;
