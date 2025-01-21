import {
  Admin,
  ImageField,
  Resource,
  List,
  Datagrid,
  TextField,
  EditButton,
  FileInput,
  FileField,
  Create,
  SimpleForm,
  TextInput,
  DeleteButton,
  ReferenceField,
  SelectInput,
} from "react-admin";

import { styled } from "@mui/material/styles";

const StyledImageField = styled(ImageField)({
  "& .RaImageField-image": {
    width: "200px",
    height: "100px", 
    objectFit: "cover", 
  },
});


 export const LocationList = () => (
  <List>
    <Datagrid>
      <TextField source="name" label="Name" />

      <TextField source="favorite" label="Favorite" />


      <TextField source="most_visited" label="Most Visited"/>

       <ReferenceField
              source="parent_id" 
              reference="locations" 
              label="Location"
            ></ReferenceField>


<StyledImageField
        source="picture"
        label="Picture"
        src={(record) => record.picture && `http://localhost:3000${record.picture}`}
      />


<EditButton />
       <DeleteButton
          />
    </Datagrid>
  </List>
);

