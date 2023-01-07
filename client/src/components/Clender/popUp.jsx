import { useRecoilValue } from "recoil";
import Group, { getGroup } from "./group";
import { selectedState } from "./state";

function PopUp() {
    let selected=useRecoilValue(selectedState)
    let group
    
       group=getGroup(selected)
    return ( 
            <div className="absolute p-5 w-fit h-auto rounded-xl shadow-[0px_0px_0px_2000px_rgba(0,0,0,0.4)] bg-slate-200 ">
                    <Group startstr={group.startDate}  endstr={group.endDate} start={group.startTime} end={group.endTime}/>
                <div className="flex justify-center items-center w-full"></div>
            </div>
     );
}

export default PopUp;