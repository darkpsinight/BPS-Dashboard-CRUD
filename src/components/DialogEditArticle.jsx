import { useEffect, useState } from 'react'
import React from 'react'
import {
  CButton,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'
import { getUsers, editUser } from '../Service/api'

const initialValue = {
  id: '',
  code: '',
  article: '',
  price: '',
  vat: '',
  status: '',
  company_id: '',
}

const DialogEditArticle = (props) => {
  const [visible, setVisible] = useState(false)
  const [isHover, setIsHover] = useState(false)
  const [user, setUser] = useState(initialValue)
  const { code, article, price, vat, status, company_id } = user

  const normalize = (v) => ({
    code: v.code,
    article: v.article,
    price: Number(v.price),
    vat: Number(v.vat),
    status: Number(v.status),
    company_id: Number(v.company_id),
  })

  useEffect(() => {
    loadUserDetails()
  }, [])

  const loadUserDetails = async () => {
    const response = await getUsers(id)
    console.log('loading user details ', response)
    setUser(response.data.find((x) => x.id == id))
  }

  const editUserDetails = async () => {
    const response = await editUser(id, normalize(user))
    console.log('Edit user details ', response)
  }

  const onValueChange = (e) => {
    console.log(e.target.value)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <CButton
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          marginRight: '10px',
          color: 'info',
          border: 'none',
          boxShadow: `2px 2px 9px -3px rgba(0,0,0,${isHover ? 0.6 : 0})`,
        }}
        onClick={() => setVisible(!visible)}
      >
        Edit
      </CButton>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        backdrop={'static'}
        keyboard={false}
        portal={false}
      >
        <CModalHeader>
          <CModalTitle>Edit Article:</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              type="text"
              id="exampleFormControlInput1"
              label="Code :"
              placeholder="Enter Code"
              text=" "
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={code}
              name="code"
            />
            <CFormInput
              type="text"
              id="exampleFormControlInput2"
              label="Article :"
              placeholder="Enter Article"
              text=" "
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={article}
              name="article"
            />
            <CFormInput
              type="number"
              id="exampleFormControlInput3"
              label="Price :"
              placeholder="Enter Price"
              text="Must be a number"
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={price}
              name="price"
            />
            <CFormInput
              type="text"
              id="exampleFormControlInput4"
              label="VAT :"
              placeholder="Enter VAT"
              text="Must be a number"
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={vat}
              name="vat"
            />
            <CFormInput
              type="text"
              id="exampleFormControlInput5"
              label="Status :"
              placeholder="Enter Status"
              text=" "
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={status}
              name="status"
            />
            <CFormInput
              type="number"
              id="exampleFormControlInput6"
              label="Company_id :"
              placeholder="Enter Company id"
              text="Must be '12'"
              aria-describedby="exampleFormControlInputHelpInline"
              onChange={(e) => onValueChange(e)}
              value={company_id}
              name="company_id"
            />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              editUserDetails()
              setVisible(false)
            }}
          >
            Update
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
export { DialogEditArticle }
