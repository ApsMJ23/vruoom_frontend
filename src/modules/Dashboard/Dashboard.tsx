import styles from './Dashboard.module.scss';


const Dashboard = () => {
    return (
        <div className={styles.DashboardWrapper}>
            <div className={styles.DashboardHeading}>
            <h2>Dashboard</h2>
            </div>
            <h3>Client List:</h3>
            <div className={styles.ClientContainer}>
                <div className={styles.ClientCard}>
                    <div className={styles.ClientCardHeader}>
                        <h3>Client Name</h3>
                    </div>
                    <div className={styles.ClientCardBody}>
                        <p>Client Email</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;