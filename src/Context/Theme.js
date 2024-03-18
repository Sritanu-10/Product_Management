import { createContext,useContext } from "react";
export const Themecontext=createContext({
    thememode:'Light',
    darktheme:()=>{},
    lighttheme: ()=>{}
})
export const Themeprovider=Themecontext.Provider
export default function useTheme(){
    return useContext(Themecontext)
}