import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import PopUp from "./popUp";
import { useRecoilState, useRecoilValue } from "recoil";
import { editState, eventState, selectedState } from "./state";
import { getGroup } from "./group";
function Calender({user}) {
    let [selected,setSelected]=useRecoilState(selectedState)
    let [edit,setEdit]=useRecoilState(editState)
    let events=useRecoilValue(eventState)
    return ( 
    
    <div className="p-10">
        <FullCalendar
          height={"auto"}
            duration={{weeks:4}}
            slotMinTime={"08:00:00"}
            slotMaxTime={"17:00:00"}
            allDaySlot={false}

          slotLabelFormat={{
            hourCycle:"h24",
            minute:"numeric",
            hour:"numeric"
          }}
          // displayEventTime={false}
          displayEventEnd={false}
          headerToolbar={{
            right:"dayGridMonth,timeGridWeek,prev,next",
          }}
          select={(arg)=>{
            if(user.role==="admin"){
               setSelected(arg) 
            }
            
          }}
          events={
            [...events]
          }
           dayHeaderFormat={
                    {
                        weekday: document.body.offsetWidth < 2200 ? "short" : "long"
                    }
                }
          
          editable={user.role==="admin"}
          eventClick={(d)=>{
            console.log(d.event.extendedProps)
            setSelected({end:d.event.end,start:d.event.start})
            setEdit({title:d.event.title,...d.event.extendedProps})
          }}
          selectMirror={true}
          selectOverlap={false}
          fixedWeekCount={false}
          selectable={user.role==="admin"}
          validRange={(now)=>{
            now.setDate(now.getDate()-now.getDay())
            let d=new Date(now.getTime())
            d.setMonth(d.getMonth()+1)
            d.setDate(d.getDate()+(6-d.getDay()))
             return {
                start:now,
                end:d
             }
          }}
          plugins={[ timeGridPlugin,interactionPlugin,dayGridPlugin]}
          initialView="timeGridWeek"
        >

        </FullCalendar>
      {  selected && <div 
          className="fixed w-screen top-0 right-0 h-screen z-30  flex justify-center items-center ">
            <PopUp edit={edit}/>
         </div> }
    </div> );
}

export default Calender;