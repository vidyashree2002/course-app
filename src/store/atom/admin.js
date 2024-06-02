import {atom} from "recoil";


export const adminState = atom({
    key : "adminState",
     default: {
         isloading : true,
         adminEmail: null
     }
}) 