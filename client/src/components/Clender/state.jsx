import { atom} from "recoil";



export const selectedState = atom({
    key: 'selected',
    default: null
})


export const eventState = atom({
    key: "events",
    default: []
})
export const editState = atom({
    key: "edit",
    default: false
})