import { useState } from 'react'
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
import PostAddIcon from '@mui/icons-material/PostAdd'
import { addUser } from 'src/Service/api'

const initialValue = {
  id: '',
  code: '',
  article: '',
  price: '',
  vat: '',
  status: '',
  company_id: '',
}

export default function DialogAddArticle() {
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

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const addUserDetails = async () => {
    await addUser(normalize(user))
  }

  return (
    <>
      <CButton
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          float: 'right',
          marginBottom: '15px',
          marginRight: '30px',
          backgroundColor: '#06ac06',
          border: 'none',
          transition: 'box-shadow .3s',
          boxShadow: `5px 5px 0px 0px rgba(0,0,0,${isHover ? 0.18 : 0})`,
        }}
        onClick={() => setVisible(!visible)}
      >
        <PostAddIcon style={{ fontSize: '30px' }} />
      </CButton>
      <CModal visible={visible} onClose={() => setVisible(false)} backdrop={'static'}>
        <CModalHeader>
          <CModalTitle>Add New Article:</CModalTitle>
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
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              addUserDetails()
              setVisible(false)
            }}
          >
            Add
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
