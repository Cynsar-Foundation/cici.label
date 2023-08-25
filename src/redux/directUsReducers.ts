import { ContentData } from '@components/css/content/content';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTitle , fetchContentData} from './directUsActions';


interface DirectusState {
    title: string;
    contentData: ContentData[] | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const directusSlice = createSlice({
    name: 'directus',
    initialState: {
        title: '',
        contentData: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTitle.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTitle.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.title = action.payload;
            })
            .addCase(fetchTitle.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchContentData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContentData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contentData = action.payload;
            })
            .addCase(fetchContentData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default directusSlice.reducer;
