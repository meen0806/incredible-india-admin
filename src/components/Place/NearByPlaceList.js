import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, ReferenceField } from "react-admin";

const NearbyPlacesList = (props) => (
  <List {...props}>
    <Datagrid>
      
                 <ReferenceField source="place_id" reference="places" label="Place">
        <TextField source="name" />
      </ReferenceField>
                 <ReferenceField source="nearbyplace_id" reference="places" label="Place">
        <TextField source="name" />
      </ReferenceField>
      {/* <TextField source="nearbyplace_id" label="Nearby Place ID" /> */}
      <NumberField source="distance_km" label="Distance (km)" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default NearbyPlacesList;
