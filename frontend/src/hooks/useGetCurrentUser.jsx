import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

function useGetCurrentUser() {
  const dispatch=useDispatch()
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/user/current`, { withCredentials: true })
        dispatch(setUserData(result.data))
        console.log(result);
      } catch (error) {
        // Only log error if it's not a 400 (no token) error
        if (error.response?.status !== 400) {
          console.log(error)
        }
      }
    }
    fetchUser()

  }, [])
}

export default useGetCurrentUser

