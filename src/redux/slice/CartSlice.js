import {createSlice} from "@reduxjs/toolkit"
import {useSelector} from "react-redux"

//const user=useSelector(state=>state.UserReducer.user);
const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            var product=action.payload;
            const currentItem=product?{
                id:product?.id,
                key:product?.course,
                name:product?.courseName,
                image:product?.courseImg,
                mrpPrice:product?.courseMRP,
                spPrice:product?.courseSP,
                email:product?.userData?.email
                }:action.payload;
                const index=state?.cart?.findIndex(item=>item.key===currentItem.key && item.email===product?.userData?.email);
                if(index===-1){
                    state.cart.push({...currentItem});
                }
        },
        removeItemFromCart:(state,action)=>{
            const productData=action.payload;
            const index=state?.cart?.findIndex(item=>(item.key===productData.key));
            if(index===-1) return;
            state.cart=state.cart.filter(item=>(item.key!==productData.key));
        },
        resetCart:(state,action)=>{
            state.cart=[]
        }
    }
})
export default cartSlice.reducer;
export const {addToCart,removeItemFromCart,resetCart}=cartSlice.actions;