import React, { useState } from "react";
import CkEditor from "../CkEditor/CkEditor";
// import { CKEditor } from "@ckeditor/ckeditor5-react";


import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
  SelectInput,  
  BooleanInput,
  useGetList,
} from "react-admin";

export const LocationCreate = (props) => {
  const { data: locations, isLoading } = useGetList("locations", {

    pagination: { page: 1, perPage:10 },
    sort: { field: "name", order: "ASC" },
    filter: {},
  });

  

  console.log("data",locations);

  const filteredParentLocation = locations?.filter(
    (location) => location.parent_id == null || location.parent_id == undefined || location.parent_id == ""
  );
  
  console.log("filteredParentLocation",filteredParentLocation);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <Create {...props}>
      
      <SimpleForm
    //  onSubmit={(data) => {
    // console.log("Form data before submission:", data); // Should log full form data
  // }}
>
        
      <TextInput source="name" label="Name of State/City" />
       {/* <TextInput source="description" label="Description" /> */}
       <CkEditor source="description" label="Description" /> 

        <BooleanInput label="Favorite" source="favorite" />
        


        <BooleanInput label="Most Visited" source="most_visited" />

        <FileInput source="picture" label="Image" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput>

      
         <SelectInput
          label="Parent Location"
          source="parent_id"
          choices={filteredParentLocation.map((location) => ({
            id: location.id,
            name: location.name,
          }))}
          optionText="name"
          optionValue="id"
          emptyText="No parent"

        />

      </SimpleForm>
    </Create>
  );
};

