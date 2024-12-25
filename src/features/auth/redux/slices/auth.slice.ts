import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean
  user?: { email: string, name: string } | null
  token: string | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null
}

export const useAuthSlice = createSlice({
  name: 'useAuthSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.token = null
    }
  }
})

export const { login, logout } = useAuthSlice.actions