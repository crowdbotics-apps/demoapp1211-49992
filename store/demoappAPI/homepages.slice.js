import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_homepage_list = createAsyncThunk(
  "homepages/api_v1_homepage_list",
  async payload => {
    const response = await apiService.api_v1_homepage_list(payload)
    return response.data
  }
)
export const api_v1_homepage_create = createAsyncThunk(
  "homepages/api_v1_homepage_create",
  async payload => {
    const response = await apiService.api_v1_homepage_create(payload)
    return response.data
  }
)
export const api_v1_homepage_retrieve = createAsyncThunk(
  "homepages/api_v1_homepage_retrieve",
  async payload => {
    const response = await apiService.api_v1_homepage_retrieve(payload)
    return response.data
  }
)
export const api_v1_homepage_update = createAsyncThunk(
  "homepages/api_v1_homepage_update",
  async payload => {
    const response = await apiService.api_v1_homepage_update(payload)
    return response.data
  }
)
export const api_v1_homepage_partial_update = createAsyncThunk(
  "homepages/api_v1_homepage_partial_update",
  async payload => {
    const response = await apiService.api_v1_homepage_partial_update(payload)
    return response.data
  }
)
export const api_v1_homepage_destroy = createAsyncThunk(
  "homepages/api_v1_homepage_destroy",
  async payload => {
    const response = await apiService.api_v1_homepage_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const homepagesSlice = createSlice({
  name: "homepages",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_homepage_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_homepage_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_homepage_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_retrieve,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_destroy,
  slice: homepagesSlice
}
