import React, { useState } from "react";
import styles from './AddClient.module.scss'
import { addClient } from "../../store/Client/actions.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks.ts";
import { AUTOMATION_TYPES } from "../../utils/constants/GeneralConstants.ts";
import { toast } from "react-toastify";

export type ClientDetails = {
    businessName: string
    TypeOfFirm: string
    TypeOfSite: string
    address: string
    AverageSaleVolumeMS: number
    AverageSaleVolumeHSD: number
    AutomationType: string
    HoursOfOperation: string
}

const AddClient = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [isWhatsappSameAsMobile, setIsWhatsappSameAsMobile] = useState(false)
    const [clientDetails, setClientDetails] = useState<ClientDetails>({
        businessName: '',
        address: '',
        TypeOfFirm: '',
        TypeOfSite: '',
        AverageSaleVolumeMS: 0,
        AverageSaleVolumeHSD: 0,
        AutomationType: '',
        HoursOfOperation: ''
    })
    const [employeeDetails, setEmployeeDetails] = useState({
        mobileNo: '',
        whatsappNo: '',
        role: ''
    })
    const handleSubmit = () => {
        dispatch(addClient({
            client: {
                businessName: clientDetails.businessName,
                TypeOfFirm: clientDetails.TypeOfFirm,
                TypeOfSite: clientDetails.TypeOfSite,
                address: clientDetails.address,
                AverageSaleVolumeMS: clientDetails.AverageSaleVolumeMS,
                AverageSaleVolumeHSD: clientDetails.AverageSaleVolumeHSD,
                AutomationType: clientDetails.AutomationType,
                HoursOfOperation: clientDetails.HoursOfOperation
            },
            employees: {
                mobileNo: employeeDetails.mobileNo,
                whatsappNo: employeeDetails.whatsappNo,
                role: 'Owner' // Assuming the role is always Owner
            }
        }, () => {
            toast.success('Client Added Successfully')
            navigate('/app/dashboard')
        }))
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setClientDetails({
            ...clientDetails,
            [e.target.name]: e.target.value
        })
    }
    const handleEmployeeChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setEmployeeDetails({
            ...employeeDetails,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <h1>Add Client</h1>
            <div className={styles.FormContainer}>
                <div className={styles.AddClientForm}>
                    <h3>Enter Client Details</h3>
                    <form>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.businessName ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="businessName">Name Of RO</label>
                            <input
                                required
                                type="text"
                                placeholder="Name Of RO"
                                id="businessName"
                                name={'businessName'}
                                value={clientDetails.businessName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.address ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="address">Location</label>
                            <input
                                required
                                type="text"
                                placeholder="Location"
                                id="address"
                                name={'address'}
                                value={clientDetails.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.AverageSaleVolumeMS >= 0 ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="AverageSaleVolumeMS">Average Sale Volume MS (in KL)</label>
                            <input
                                required
                                type="number"
                                placeholder="Average Sale Volume MS (in KL)"
                                id="AverageSaleVolumeMS"
                                name={'AverageSaleVolumeMS'}
                                value={clientDetails.AverageSaleVolumeMS}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.AverageSaleVolumeHSD >= 0 ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="AverageSaleVolumeHSD">Average Sale Volume HSD (in KL)</label>
                            <input
                                required
                                type="number"
                                placeholder="Average Sale Volume HSD (in KL)"
                                id="AverageSaleVolumeHSD"
                                name={'AverageSaleVolumeHSD'}
                                value={clientDetails.AverageSaleVolumeHSD}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.TypeOfFirm ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="TypeOfFirm">Type Of RO OwnerShip</label>
                            <input
                                required
                                type="text"
                                placeholder="Type Of RO OwnerShip"
                                id="TypeOfFirm"
                                name={'TypeOfFirm'}
                                value={clientDetails.TypeOfFirm}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.TypeOfSite !== '' ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="TypeOfSite">Type Of Site</label>
                            <select
                                id="TypeOfSite"
                                name={'TypeOfSite'}
                                value={clientDetails.TypeOfSite}
                                onChange={(event) => {
                                    setClientDetails({
                                        ...clientDetails,
                                        TypeOfSite: event.target.value
                                    })
                                }}
                            >
                                <option selected disabled value="">Type Of Site</option>
                                <option value="A-Site">A-Site</option>
                                <option value="B-Site">B-Site</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.AutomationType !== '' ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="AutomationType">Type Of Automation</label>
                            <select
                                id="AutomationType"
                                name={'AutomationType'}
                                value={clientDetails.AutomationType}
                                onChange={(event) => {
                                    setClientDetails({
                                        ...clientDetails,
                                        AutomationType: event.target.value
                                    })
                                }}
                            >
                                <option selected disabled value="">Type Of Automation</option>
                                {AUTOMATION_TYPES.map((type) => (
                                    <option value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label style={clientDetails.HoursOfOperation !== '' ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="HoursOfOperation">Type Of Automation</label>
                            <select
                                id="HoursOfOperation"
                                name={'HoursOfOperation'}
                                value={clientDetails.HoursOfOperation}
                                onChange={(event) => {
                                    setClientDetails({
                                        ...clientDetails,
                                        HoursOfOperation: event.target.value
                                    })
                                }}
                            >
                                <option selected disabled value="">Hours Of Operation</option>
                                <option value="12 hrs">12 hrs</option>
                                <option value="24 hrs">24 hrs</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label style={employeeDetails.mobileNo !== '' ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="mobileNo">Owner Mobile Number</label>
                            <input
                                required
                                type="number"
                                placeholder="Mobile Number"
                                id="mobileNo"
                                name={'mobileNo'}
                                onChange={handleEmployeeChange}
                            />
                        </div>
                        {!isWhatsappSameAsMobile&&<div className={styles.formGroup}>
                            <label style={employeeDetails.whatsappNo !== '' ? { fontSize: '0.75rem' } : { fontSize: 0 }} htmlFor="whatsappNo">Owner WhatsApp Number</label>
                            <input
                                required
                                type="number"
                                placeholder="Whatsapp Number"
                                id="whatsappNo"
                                name={'whatsappNo'}
                                onChange={handleEmployeeChange}
                            />
                        </div>}
                        <div style={{ width: '80%' }}>
                            <input type="checkbox" id="whatsappNo" name="whatsappNo" value="whatsappNo" onChange={(e) => {
                                if (e.target.checked) {
                                    setIsWhatsappSameAsMobile(true)
                                    setEmployeeDetails({
                                        ...employeeDetails,
                                        whatsappNo: employeeDetails.mobileNo
                                    })
                                } else {
                                    setIsWhatsappSameAsMobile(false)
                                    setEmployeeDetails({
                                        ...employeeDetails,
                                        whatsappNo: ''
                                    })
                                }
                            }} />
                            <label htmlFor="whatsappNo">Mobile Number Same As Whatsaap Number?</label>
                        </div>
                        <button type="submit" onClick={handleSubmit} >Add Client</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddClient;