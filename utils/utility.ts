//remaining campaign days left one can donate
export const dayLeft=(deadline: string)=>{
    const diff= new Date(deadline).getTime()- Date.now();
    const remain_days=diff/(1000*3600*24);

    return Math.round(remain_days);
}
//return raised amount parcentage to reach the goal amount 
export const calculatePercentage=(
    raisedAmount: number,
     goal: number 
     ): number=>{
    const parcentage=Math.round(raisedAmount*100/goal);

    return parcentage;
}
//image exist callback if url is given
export const checkImageexist=(
    url: string,
    callback: (result: boolean)=>void
    ): void=>{
    const img=new Image();
    img.src= url;
    if(img.complete) callback(true);    

    img.onload=()=> callback(true);
    img.onerror=()=> callback(false);  
}