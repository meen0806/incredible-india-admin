import React from 'react'
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin'

export const CategoryList=()=>(
    <List>
        <Datagrid>
            <TextField source='name' label="Name"/>
            <TextField source='description' label="Description"/>
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
        
    </List>
)

