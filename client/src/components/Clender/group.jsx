import { useState } from "react";
import { useRecoilState } from "recoil";
import Button from "./button";
import { editState, eventState, selectedState } from "./state";

function Group({startstr,endstr,start,end}) { 
    let [more,setMore]=useState(false)
    let [selected,setSelected]=useRecoilState(selectedState)
    let [edit,setEdit]=useRecoilState(editState)
    let [startT,setStartT]=useState(start)
    let [endT,setEndT]=useState(end)
    let [group,setGroup]=useState(edit?edit.group:"")
    let[ proof,setProof]=useState(edit?edit.proof:"")
    let [room,setRoom]=useState(edit?edit.room:"")
    let [title,setTitle]=useState(edit?edit.title:"")
    let [events,setEvents]=useRecoilState(eventState)

    if (!more){
        return ( 
            <div className="p-3">   
                    
                   <label className="mb-5">Group:</label> 
                   <input 
                    onChange={(e)=>{
                        setGroup(e.currentTarget.value)}}
                   value={group} className="rounded-md bg-transparent w-8 p-1 h-6 border border-black"></input>
                   
                   <div className="grid my-5 px-2 gap-x-11 gap-y-4 grid-cols-2">
                     <div>
                        <label>Start time: </label>
                        <input
                         onChange={(e)=>{
                            setStartT(e.currentTarget.value)}}
                         defaultValue={startT} className="rounded-md bg-transparent border  border-black" type="time" />
                     </div>
                     <div>
                        <label>End time: </label>
                        <input 
                         onChange={(e)=>{
                            setEndT(e.currentTarget.value)}}
                         defaultValue={endT} className="rounded-md bg-transparent border border-black" type="time" />
                     </div>
                     <div>
                        <label>Proof: </label>
                        <input
                         onChange={(e)=>{
                            setProof(e.currentTarget.value)}}
                       value={proof}  className="rounded-md bg-transparent border w-1/3 border-black" type="text" />
                     </div>
                     <div>
                        <label>Room: </label>
                        <input 
                         onChange={(e)=>{
                            setRoom(e.currentTarget.value)}}
                       value={room}
                        className="rounded-md bg-transparent border w-1/3 border-black" type="text" />
                     </div>
                     <div>
                        <label>Title: </label>
                        <input
                         onChange={(e)=>{
                                setTitle(e.currentTarget.value)}}
                         defaultValue={title} className="rounded-md bg-transparent border  border-black" type="text" />
                     </div>
                   </div>
                   <div className="flex justify-center mt-8">
                        <Button title={"Add"} color={"blue"} onClick={()=>{ 
                               if (!edit){
                                   let k=[...events]
                                   k.push({
                                      title,
                                      daysOfWeek:[selected.start.getDay()],
                                      startTime:startT,
                                      endTime:endT,
                                      extendedProps:{
                                           room,
                                           proof,
                                           group
                                      },
                                      color:"red"
                                   })
                                   setEvents([...k])
                                   setMore(true)

                               }else{
                                setEdit(false)
                               }
                       }}/>
                        <Button title={"Cancel"} color={"red"} onClick={()=>{
                           setSelected(null)
                           if (edit){
                            setEdit(false)
                           }
                        }}/>   
                   </div> 
           </div> )
    }
       return (<div 
                 className="fixed w-screen top-0 right-0 h-screen z-30  flex justify-center items-center ">
                               <div className="absolute p-5 w-fit h-auto rounded-xl shadow-[0px_0px_0px_2000px_rgba(0,0,0,0.4)] bg-slate-200 ">
                              Add more groups ?
                              <div className="flex justify-center mt-8">

                              <Button title={"Yes"} color={"blue"} onClick={()=>{ 
                                 setMore(false)
                       }}/>
                        <Button title={"No"} color={"red"} onClick={()=>{
                           setSelected(null)
                        }}/>
       </div>
                        </div> 
                </div> )
    
   ;
}


export class GroupC{
constructor(startDate,endDate,startTime,endTime){
    this.startDate=startDate
    this.endDate=endDate
    this.startTime=startTime
    this.endTime=endTime
}

}

export function getGroup(args){
    // let k=new Date()
    // k.getHours
    console.log(args.start)
    let start=Intl.DateTimeFormat(undefined,{hour:"numeric",minute:"numeric",second:"numeric",hour12:false}).format(args.start)
    let end=Intl.DateTimeFormat(undefined,{hour:"numeric",minute:"numeric",second:"numeric",hour12:false}).format(args.end)
    let endStr=Intl.DateTimeFormat(undefined,{year:"numeric"}).format(args.end)+"-"+Intl.DateTimeFormat(undefined,{month:"2-digit"}).format(args.end)+"-"+ Intl.DateTimeFormat(undefined,{day:"2-digit"}).format(args.end)
    let startStr=Intl.DateTimeFormat(undefined,{year:"numeric"}).format(args.end)+"-"+Intl.DateTimeFormat(undefined,{month:"2-digit"}).format(args.end)+"-"+ Intl.DateTimeFormat(undefined,{day:"2-digit"}).format(args.start)


    return new GroupC(startStr,endStr,start,end)
}
export default Group;