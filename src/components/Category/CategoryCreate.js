import React from 'react'
import { Create, SimpleForm, TextField, TextInput } from 'react-admin'

export const CategoryCreate= ()=>(
    <Create>
      <SimpleForm>
        <TextInput source='name' label="Name"></TextInput>
        <TextInput source='description' label="Description"></TextInput>

    </SimpleForm>
    </Create>
  );

