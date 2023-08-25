import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cartSlice",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log("product data",action.payload);
            var product=action.payload;
            const currentItem=product?{
                id:product?.id,
                key:product?.course,
                name:product?.courseName,
                image:product?.courseImg,
                mrpPrice:product?.courseMRP,
                spPrice:product?.courseSP
                }:action.payload;
                console.log("currentItem 1234",currentItem);
                const index=state?.cart?.findIndex(item=>item.key===currentItem.key);
                console.log("index",index);
                if(index===-1){
                    state.cart.push({...currentItem});
                    console.log("second",currentItem);
                }
        },
        removeItemFromCart:(state,action)=>{
            const productData=action.payload;
            console.log("remove productData",productData)
            const index=state?.cart?.findIndex(item=>(item.key===productData.key));
            console.log("remove id",index);
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