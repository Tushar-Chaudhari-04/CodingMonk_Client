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
                const index=state?.cart?.findIndex(item=>item.id==currentItem.id);
                console.log("index",index);
                if(index===-1){
                    console.log("first")
                    state.cart.push({...currentItem});
                    console.log("second",currentItem);
                }
                // else{
                //     state.cart[index].quantity+=1;
                // }
        }
    },
    resetCart:(state,action)=>{
        state.cart=[]
    }
})
export default cartSlice.reducer;
export const {addToCart,resetCart}=cartSlice.actions;