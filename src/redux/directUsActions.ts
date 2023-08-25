import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as directusService from './services/directUsClient';

export const fetchTitle = createAsyncThunk('directus/fetchTitle', async () => {
    return await directusService.getWebsiteTitleAndFooter();
});

export const fetchContentData = createAsyncThunk('directus/fetchContentData', async () => {
    return await directusService.getContentData();
});

export const fetchSidebarData = createAsyncThunk('directus/fetchSidebarData', async (id: number) => {
    return await directusService.getSidebarData(id);
})



