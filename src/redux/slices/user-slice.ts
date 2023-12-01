import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { NetworkService } from '@/services/network-service';
import { IUpdate } from '@/types/common-global.types';
import { ICreateUser, IQueryUser, IUpdateUser } from '@/types/user.types';

const PREFIX_USER_SLICE = 'USER';

export const getListUser = createAsyncThunk(
  `${PREFIX_USER_SLICE}/LIST`,
  async (params: IQueryUser, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('USER', {
        params,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const getDetailUser = createAsyncThunk(
  `${PREFIX_USER_SLICE}/DETAIL`,
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.get('USER', {
        suffix: `/${id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const updateUser = createAsyncThunk(
  `${PREFIX_USER_SLICE}/UPDATE`,
  async (body: IUpdate<IUpdateUser>, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.patch('USER', body.data, {
        suffix: `/${body.id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const deleteUser = createAsyncThunk(
  `${PREFIX_USER_SLICE}/UPDATE`,
  async (id: number, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.delete('USER', {
        suffix: `/${id}`,
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

export const createUser = createAsyncThunk(
  `${PREFIX_USER_SLICE}/CREATE`,
  async (body: ICreateUser, { rejectWithValue }) => {
    try {
      const { data } = await NetworkService.post('USER', body, {
        isCms: true,
      });
      return data;
    } catch (error) {
      throw rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: PREFIX_USER_SLICE,
  initialState: {},
  reducers: {},
});

export const userReducer = userSlice.reducer;
