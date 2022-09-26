import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from 'src/Service/api'
import ConfirmDialog from 'src/components/ConfirmDialog'
import Notification from 'src/components/Notification'
import DialogAddArticle from 'src/components/DialogAddArticle'
import { DialogEditArticle } from 'src/components/DialogEditArticle'

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`

const Typography = () => {
  const [users, setUsers] = useState([])
  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  })
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
  })

  useEffect(() => {
    getAllUsers()
  }, [])

  const deleteUserData = async (id) => {
    setConfirmDialog({
      ...setConfirmDialog,
      isOpen: false,
    })
    await deleteUser(id)
    getAllUsers()
    setNotify({
      isOpen: true,
      message: 'Article Deleted Successfully.',
      type: 'error',
    })
  }

  const getAllUsers = async () => {
    let response = await getUsers()
    console.log(response)
    setUsers(response.data)
  }

  return (
    <>
      <DialogAddArticle />
      <Notification notify={notify} setNotify={setNotify} />
      <StyledTable>
        <TableHead>
          <THead>
            <TableCell style={{ width: '90px' }}>Id:</TableCell>
            <TableCell style={{ width: '150px' }}>Code:</TableCell>
            <TableCell style={{ width: '150px' }}>Description:</TableCell>
            <TableCell style={{ width: '150px' }}>Price:</TableCell>
            <TableCell style={{ width: '150px' }}>Vat:</TableCell>
            <TableCell style={{ width: '150px' }}>Status:</TableCell>
            <TableCell>Company_id:</TableCell>
            <TableCell style={{ width: '200px', textAlign: 'center' }}> Actions: </TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.code}</TableCell>
              <TableCell>{user.article}</TableCell>
              <TableCell>{user.price}</TableCell>
              <TableCell>{user.vat}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>{user.company_id}</TableCell>
              <TableCell>
                <DialogEditArticle props={users} />
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: 'Are you sure to delete this Article?',
                      subTitle: 'You can"t undo this action!',
                      onConfirm: () => {
                        deleteUserData(user.id)
                      },
                    })
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
      <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
    </>
  )
}

export default Typography
