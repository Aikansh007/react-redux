import {INC_SAL,DEC_SAL} from "./actionTypes"
export const incSal=()=>({
    type:INC_SAL,
    payload:1000
});

export const decSal=()=>({
    type:DEC_SAL,
    payload:1000
});