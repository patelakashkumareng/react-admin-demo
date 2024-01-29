import React from 'react'
import { Trash } from 'react-feather'

const RemoveAdmin = (props) => {
    const removeAdminHandler = (e) => {
        e.preventDefault()

        const adminId = props.adminId

        console.log('adminId:: ', adminId);
        console.log('Admin List', props.adminList);

        //TODO Delete API Still Left


        
    }
  return (
    <a className="btn text-primary" href="/#" onClick={removeAdminHandler}>
    <Trash />
  </a>
  )
}

export default RemoveAdmin