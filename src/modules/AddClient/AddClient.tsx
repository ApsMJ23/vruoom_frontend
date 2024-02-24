import React, {useState} from "react";
import styles from './AddClient.module.scss'
import {addClient} from "../../store/Client/actions.ts";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../common/hooks.ts";

export type ClientDetails = {
    businessName:string
    GSTIN:string
    SAPCode:string
    PAN:string
    address:string
    YearOfEstablishment:string
    TypeOfFirm:string
    TypeOfSite:string
}

const AddClient = ()=>{
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [clientDetails,setClientDetails] = useState<ClientDetails>({
        businessName:'',
        GSTIN:'',
        SAPCode:'',
        PAN:'',
        address:'',
        YearOfEstablishment:'',
        TypeOfFirm:'',
        TypeOfSite:''
    })
    const handleSubmit = ()=>{
        dispatch(addClient(clientDetails,navigate('/app/dashboard')))

    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>)=>{
        setClientDetails({
            ...clientDetails,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div>
            <h1>Add Client</h1>
            <div className={styles.FormContainer}>
            <div className={styles.AddClientForm}>
                <h3>Enter Client Details</h3>
                <input
                    type="text"
                    placeholder="Business Name"
                    name={'businessName'}
                    value={clientDetails.businessName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="GSTIN"
                    name={'GSTIN'}
                    value={clientDetails.GSTIN}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="SAP Code"
                    name={'SAPCode'}
                    value={clientDetails.SAPCode}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="PAN"
                    name={'PAN'}
                    value={clientDetails.PAN}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Address"
                    name={'address'}
                    value={clientDetails.address}
                    onChange={handleChange}
                />
                <input
                    type="date"
                    placeholder="Year Of Establishment"
                    name={'YearOfEstablishment'}
                    value={clientDetails.YearOfEstablishment}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Type Of Firm"
                    name={'TypeOfFirm'}
                    value={clientDetails.TypeOfFirm}
                    onChange={handleChange}
                />
                <select
                    name={'TypeOfSite'}
                    value={clientDetails.TypeOfSite}
                    onChange={()=>{
                        setClientDetails({
                            ...clientDetails,
                            TypeOfSite:clientDetails.TypeOfSite==='A-Site'?'B-Site':'A-Site'
                        })
                    }}
                >
                    <option selected disabled value="">Type Of Site</option>
                    <option value="A-Site">A-Site</option>
                    <option value="B-Site">B-Site</option>
                </select>
                <button onClick={handleSubmit} >Add Client</button>
            </div>
            </div>
        </div>
    )
}

export default AddClient;