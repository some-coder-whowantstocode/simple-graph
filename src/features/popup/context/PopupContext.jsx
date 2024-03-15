import { createContext, useContext, useState } from "react";

const popupContext = createContext(null);

export const PopupProvider =({children})=>{

    const [Popups,setPopup] = useState([]);


    const addpopups =(val)=>{
        try{
            let timeoutId;
            setPopup(prevdata => {
            const newMsg = { ...val, id: Date.now() };
            timeoutId = setTimeout(() => {
                setPopup(prevdata => prevdata.filter(msg => msg.id !== newMsg.id));
            }, 3000);
            return [...prevdata,{ ...newMsg, timeoutId }];
            });
        }catch(err){
            console.log(err);
        }
     
    }

    const available_types = {
        pass:'SUCCESS',
        fail:'Error'
    }

    const TYPE = {
        Error:{
            border:'red',
            text:'red',
            background:'white'
        },
        SUCCESS:{
            border:'green',
            text:'green',
            background:'white'
        }
    }

    return(
        <popupContext.Provider value={{ TYPE, available_types, Popups, addpopups }}>
        {children}
        </popupContext.Provider>
    )
}


export const usePopup = ()=>{
    return useContext(popupContext);
}