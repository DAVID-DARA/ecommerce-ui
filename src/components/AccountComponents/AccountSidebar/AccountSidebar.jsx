import styles from './AccountSidebar.module.css';

const AccountSidebar = ({ onSelectSection, selectedSection }) => {
    return (
        <div className={styles.accountSidebar}>
            <button 
                className={`${selectedSection === 'personalInfo' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('personalInfo')}
            >
                Personal Information
            </button>
            <button 
                className={`${selectedSection === 'orders' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('orders')}
            >
                My Orders
            </button>
            <button 
                className={`${selectedSection === 'manageAddress' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('manageAddress')}
            >
                Manage Address
            </button>
            <button 
                className={`${selectedSection === 'paymentMethod' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('paymentMethod')}
            >
                Payment Method
            </button>
            <button 
                className={`${selectedSection === 'passwordManager' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('passwordManager')}
            >
                Password Manager
            </button>
            <button 
                className={`${selectedSection === 'logout' ? styles.active : styles.sidebarItems}`} 
                onClick={() => onSelectSection('logout')}
            >
                Logout
            </button>
        </div>
    );
}

export default AccountSidebar;
