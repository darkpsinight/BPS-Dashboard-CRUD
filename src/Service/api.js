import axios from 'axios'

const baseURL = 'https://api.factarni.tn/article'

const token =
  'eyJhbGciOiJSUzI1NiIsImtpZCI6IjIxZTZjMGM2YjRlMzA5NTI0N2MwNjgwMDAwZTFiNDMxODIzODZkNTAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiZmFraHJpIGtyYWllbSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BSXRidm1uMS12dWJJcHNxTURKMkNTcDhVcTlmU3I1LUI1T3Y3RHY2SFRNMT1zMTMzNyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9mYWN0YXJuaSIsImF1ZCI6ImZhY3Rhcm5pIiwiYXV0aF90aW1lIjoxNjYzNzY3ODk5LCJ1c2VyX2lkIjoiaWhqM0JWM0hIRFhpVnUwdmpzV3ZidjMyRDdMMiIsInN1YiI6ImloajNCVjNISERYaVZ1MHZqc1d2YnYzMkQ3TDIiLCJpYXQiOjE2NjM3Njc4OTksImV4cCI6MTY2Mzc3MTQ5OSwiZW1haWwiOiJmYWtocmlpLmtyYWllbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwODU1MTA3MjAwODIwNjMxMjI0NCJdLCJlbWFpbCI6WyJmYWtocmlpLmtyYWllbUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.bvRTxHfPtJrQjF2BjXqhs7ji738kma55LMFVRb8jkeraWP-JRBi-LRPa0d7OR_-BPwCGuRBXIb6980_PP8wjhBeDdB5B77GujiGn3nUvpPOFeIaM0L7muw1NKo4YCtS3v6ifuywypTbL3_5x3SBFZEH-QV0sp5DAzaA-P3Fn8AwP66o3cUPHGengGpZNsfkJ0FYcqzH-xpyKVVWV'

const config = { headers: { Authorization: `Bearer ${token}` } }

export const getUsers = async (id) => {
  id = id || ''
  try {
    return await axios.get(`${baseURL}`, config)
  } catch (error) {
    console.log('Error while calling getArticles api ', error)
  }
}

export const addUser = async (user) => {
  return await axios.post(`${baseURL}/create`, user, config)
}

export const deleteUser = async (id) => {
  return await axios.delete(`${baseURL}/${id}`, config)
}

export const editUser = async (id, user) => {
  return await axios.put(`${baseURL}/${id}`, user, config)
}
