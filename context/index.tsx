import React, { useContext, createContext, FC} from "react";
import { useAddress, useContract, useContractWrite, useMetamask} from '@thirdweb-dev/react';
import { ethers } from "ethers";

interface Form{
    title: string,
    description: string,
    targetAmount: number,
    deadlineProject: string,
    images: string,
}

const StateContext = createContext('value');

interface Props{
    children:React.ReactNode
}

export const StateContextProvider:React.FC<Props>=({children})=>{
    const { contract } = useContract("0x0b720B51d1fa6C792907f239D2249C7462B8143a");
    const {mutateAsync: createCampaign}= 
    useContractWrite(
        contract,
        'createCampagin',
    );

    const address=useAddress();
    const connect=useMetamask();

    const publishCampaign=async(form: Form)=>{
        try {
            const campaignData = await createCampaign({
                args:[
                    address, //campaign owner address
                    form.title, //campaign title
                    form.description, //campaign description
                    form.targetAmount, //goal amount
                    new Date(form.deadlineProject).getTime(), //deadlineProject
                    form.images //campaign image
                ]
            })
            console.log("success: ", campaignData);
        } catch (error) {
            console.log("failed",error);
        }
    }
    return(
        <StateContext.Provider value={{
            address,
            contract,
            connect,
            createCampaign: publishCampaign,
        }}>
        {children}
        </StateContext.Provider>
    )
}   
export const useStateContext=()=>  useContext(StateContext);
