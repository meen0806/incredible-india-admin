import {
  required,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
  TextField,
  useGetList,
  SelectInput,
  NumberInput,
} from "react-admin";


export const LocationTransportEdit = (props) => {
  const { data: locations, isLoading } = useGetList("locations", {
    pagination: { page: 2, perPage: 10 },
    sort: { field: "name", order: "ASC" },
    filter: {},
  });

  if (isLoading)
    return (
      <>
        <span>Loading...</span>
      </>
    );

  return (
    <Edit {...props}>
        <SimpleForm>
            
            
            <SelectInput
                      label="Select Palace"
                      source="place_id._id"
                      choices={locations?.map((location) => ({
                        id: location.id,
                        name: location.name,
                      }))}
                      optionText="name"
                      optionValue="id"
                      
            />
             <TextInput source='transport_type' label='Transport Type'/>
             <TextInput source='transport_name' label='Transport Name' />
            {/* <NumberInput source='distance_km' label='Distance (km)' /> */}
        </SimpleForm>
    </Edit>
  );
};
