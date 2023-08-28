import { ContentData } from '@components/css/content/content';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTitle , fetchContentData, fetchSidebarData} from './directUsActions';
import { SideBarData } from './services/directUsClient';


interface DirectusState {
    title: string;
    contentData: ContentData[] | null;
    sideBarData: SideBarData | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const directusSlice = createSlice({
    name: 'directus',
    initialState: {
        title: '',
        contentData: [
            {
                imgSrc: '',
                title: '',
                author: '',
                desc: '',
                imageAWSs3: ''
            }
        ],
        sideBarData: {
            title:'',
            subTitle:'',
            paragraph:'',
            content:''
        },
        status: 'idle',
        error: ''
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
                state.error = action.error.message as string;
            })
            .addCase(fetchContentData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchContentData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.contentData = action.payload as ContentData[];
            })
            .addCase(fetchContentData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string
            })
            .addCase(fetchSidebarData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSidebarData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.sideBarData = action.payload as unknown as SideBarData;
            })
            .addCase(fetchSidebarData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message as string;
            });
    }
});

export default directusSlice.reducer;
