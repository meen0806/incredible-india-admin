import { required, Edit,SimpleForm,TextInput,ArrayInput,SimpleFormIterator} from "react-admin";

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Name" validate={required()} />
      <TextInput source="description" label="Description" />
    
    </SimpleForm>
  </Edit>
);
