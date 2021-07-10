import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { simulateDatabaseQuery } from "./dataAPI"
import { RootState } from '../../app/store';
import { DataInstance } from './dataAPI';

export interface DataState {
	loading: boolean
	data: any
}

const initialState: DataState = {
	loading: false,
	data: []
}

export const fetchDataAsync = createAsyncThunk(
	'data/fetchData',
	async (): Promise<Array<DataInstance>> => {
		const response = await simulateDatabaseQuery()
		return response
	}
)

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataAsync.pending, (state: DataState) => {
				state.loading = true
			})
			.addCase(fetchDataAsync.fulfilled, (state: DataState, action: PayloadAction<Array<DataInstance>>) => {
				state.loading = false
				state.data = action.payload
			})
			.addCase(fetchDataAsync.rejected, (state: DataState) => {
				state.loading = false
			})
	}
})

export const selectData = (state: RootState) => state.data

export default dataSlice.reducer 