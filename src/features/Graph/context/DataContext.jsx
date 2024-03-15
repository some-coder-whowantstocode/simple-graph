import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { usePopup } from "../../popup/context/PopupContext";

const dataContext = createContext(null);

export const DataProvider =({children})=>{

    const {addpopups,available_types} = usePopup()

    const [Hotels,setHotels] = useState({
        chart:{
            id:"hotels"
        },
        xaxis:{
            categories:[]
        }
    });
    const [Desks,setDesks] = useState([{
        name:'Requests',
        data:[]
    }]); //count of desks for each hotel
    const [loading,setloading] =  useState(false);
    const [totalreqs,settotalreqs] = useState(0);
    const [alldesk,setdesk] = useState([]);//names of desk


    const getData =async()=>{
        try{
            setloading(true);
            let url = import.meta.env.VITE_GRAPH_API
            const {data} = await axios.get(url); 

            const hotels = new Map();
            const names = [];
            const ids = [];
            const num = [];
            let reqs = 0;
            const desks = [];
            const deskrecord = new Map();

            data.requests.map(({ unit, name, comments, created_at, updated_at, hotel, desk, fulfilled_by })=>{
                reqs++;
                if(hotels.has(hotel.id)){
                    let prevdata = hotels.get(hotel.id);
                    prevdata.req_count += 1;
                }else{
                    names.push(hotel.name);
                    ids.push(hotel.id)
                    hotels.set(hotel.id,{
                        req_count:1
                    })
                }
                if(deskrecord.has(desk.name)){
                    
                }else{
                    deskrecord.set(desk.name,desk.id)
                    desks.push(desk.name);
                }

            })

            ids.map((id)=>{
                num.push(hotels.get(id).req_count)
            })

            const temphotels = {chart:{...Hotels.chart},xaxis:{...Hotels.xaxis}} 
            temphotels.xaxis.categories = names;
            setHotels(temphotels);

            const tempdesks = [...Desks];
            tempdesks[0].data = num;
            setDesks(tempdesks)
            settotalreqs(reqs);
            console.log(desks)
            setdesk(desks);
            addpopups({text:'data fetched successfully.',type:available_types.pass})
        }catch(err){
            if(err.code === "ERR_NETWORK"){
                addpopups({text:'check your internet connection...',type:available_types.fail})                
            }else{
                addpopups({text:'something went wrong...',type:available_types.fail})            
            }
        }finally{
         setloading(false);
        }
      
    }

    return(
        <dataContext.Provider value={{getData,totalreqs,Hotels,Desks,alldesk,loading}}>
        {children}
        </dataContext.Provider>
    )
}

export const useData =()=>{
    return useContext(dataContext);
}