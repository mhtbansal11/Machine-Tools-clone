// https://rune-veil-mantis.glitch.me/carts
import axios from "axios";

export const GetCartDataApi = async () => {
  try {
    const response = await axios.get(
      `https://zany-cyan-angelfish-tutu.cyclic.app/cart`
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};

export const DelCartItemApi = async (id) => {
  try {
    let response = await axios.delete(
      `https://zany-cyan-angelfish-tutu.cyclic.app/cart/${id}`
    );
    return response;
  } catch (er) {
    console.log(er);
  }
};

export const AddToCartApi = async (el) => {
  try {
    let response = await axios.post(
      `https://zany-cyan-angelfish-tutu.cyclic.app/cart`,
      { ...el }
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};
export const updateappicart=async(id,el)=>{
    try{
let data= await axios.patch(  `https://zany-cyan-angelfish-tutu.cyclic.app/cart/${id}`,{...el});
return data;
    }
    catch(er){
        console.log(er)
    }
}