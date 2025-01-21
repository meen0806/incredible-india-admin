import React from 'react';
import { Datagrid, DeleteButton, EditButton, List, TextField, ArrayField, SingleFieldList, ChipField, ReferenceField, ImageField } from 'react-admin';

export const PlaceList = () => (
    <List>
        <Datagrid>
            <TextField source="name" label="Name" />
            <TextField source="description" label="Description" />
{/*             
        <ReferenceField
        source="location_id" 
        reference="locations" 
        label="location"    
      ></ReferenceField>


        <ReferenceField
        source="category_id" 
        reference="categories" 
        label="Category"
      ></ReferenceField> */}


   <ArrayField source="tags">
  <SingleFieldList>
    <ChipField source="tags" />
  </SingleFieldList>
</ArrayField> 

            {/* <ArrayField source="images">
                <SingleFieldList>
                    <ImageField source="images" title="Image" />
                </SingleFieldList>
            </ArrayField>   */}

        <TextField source="latitude"  label="Latitude"/>
        <TextField source="longitude"  label="longitude"/>

            
            
            {/* <ArrayField source="opening_hours">
                <SingleFieldList>
                    <TextField source="day" label="Day" />
                    <TextField source="open" label="Open" />
                    <TextField source="close" label="Close" />
                </SingleFieldList>
            </ArrayField> */}

            
            <TextField source="contact_info.phone" label="Phone" />
            <TextField source="contact_info.email" label="Email" />
            <TextField source="contact_info.address" label="Address" />

            
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

