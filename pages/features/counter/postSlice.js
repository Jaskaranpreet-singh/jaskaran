import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export  const getPosts=createAsyncThunk("posts/getPosts",async()=>{

  return( 
   await fetch("https://api.themoviedb.org/3/list/1?api_key=b9bec279d64c2bae6eff69777f4a0902&language=en-US").then((res)=>res.json() )
 
  )
});
const postSlice=  createSlice(({
  name:"posts",
   initialState:{
    posts:[],
    loading:false
   },
   extraReducers:{
    [getPosts.pending]:(state,action)=>{
      state.loading=true
    },
    [getPosts.fulfilled]:(state,action)=>{
      state.loading=false
      state.posts=action.payload
    },
    [getPosts.rejected]:(state,action)=>{
      state.loading=false;
    },
   },
})) 
export const postslice=postSlice.reducer
