import styles from './Dashboard.module.scss';
import {fetchClientList} from "../../store/Client/actions.ts";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../common/hooks.ts";


const Dashboard = () => {
    const dispatch = useAppDispatch();
       const clientList = useAppSelector((state)=>state.client.clientData);
       console.log(clientList[0].businessName)
    const getClientList = () => {
            dispatch(fetchClientList())
    }
    useEffect(() => {
        // eslint-disable-next-line no-debugger
            getClientList();
    }, []);
    return (
        <div className={styles.DashboardWrapper}>
            <div className={styles.DashboardHeading}>
            <h2>Dashboard</h2>
            </div>
            <h3>Client List:</h3>
            <div className={styles.ClientContainer}>
                <div className={styles.ClientList}>
                    <div className={styles.ClientListHeading}>
                        <div className={styles.ClientListHeadingItem}>Business Name</div>
                        <div className={styles.ClientListHeadingItem}>Automation Type</div>
                        <div className={styles.ClientListHeadingItem}>Average Sale HSD</div>
                        <div className={styles.ClientListHeadingItem}>Average Sale MS</div>
                        <div className={styles.ClientListHeadingItem}>Address</div>
                        <div className={styles.ClientListHeadingItem}>Type of Firm</div>
                        <div className={styles.ClientListHeadingItem}>Type of Site</div>
                    </div>
                    {clientList?.map((client)=>{
                        return(
                            <div className={styles.ClientListData}>
                                <div className={styles.ClientListDataItem}>{client.businessName}</div>
                                <div className={styles.ClientListDataItem}>{client.AutomationType}</div>
                                <div className={styles.ClientListDataItem}>{client.AverageSaleVolumeHSD}</div>
                                <div className={styles.ClientListDataItem}>{client.AverageSaleVolumeMS}</div>
                                <div className={styles.ClientListDataItem}>{client.address}</div>
                                <div className={styles.ClientListDataItem}>{client.TypeOfFirm}</div>
                                <div className={styles.ClientListDataItem}>{client.TypeOfSite}</div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}

export default Dashboard;