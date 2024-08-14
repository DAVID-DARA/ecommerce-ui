import React, { useState } from 'react';

import styles from './AccoutPage.module.css';
import Navigation from '../components/Navbar/Navigation';
import Components from '../components/AccountComponents/AccountComp';
import AccountSidebar from '../components/AccountComponents/AccountSidebar/AccountSidebar'

const { PersonalInfo, OrdersComp, AddressComp,PaymentComp, PasswordComp  } = Components;

const AccountPage = () => {
    const [selectedSection, setSelectedSection] = useState('personalInfo');

    const renderSection = () => {
        switch (selectedSection) {
            case 'personalInfo':
                return <PersonalInfo />;
            case 'orders':
                return <OrdersComp />;
            case 'manageAddress':
                return <AddressComp />;
            case 'paymentMethod':
                return <PaymentComp />;
            case 'passwordManager':
                return <PasswordComp />;
            case 'logout':
                // Handle logout logic here
                return <div>Logging out...</div>;
            default:
                return <PersonalInfo />;
        }
    };

    return (
        <div className={styles.accountpage}>
            <Navigation />
            <div className={styles.pageInfo}>
                <div className={styles.pageInfoContent}>
                    <h1>My Account</h1>
                    <br />
                    <p>Home &nbsp; / &nbsp;My Account</p>
                </div>
            </div>
            <div className={styles.accountPageMain}>
                <div className={styles.accountPageContent}>
                    <AccountSidebar onSelectSection={setSelectedSection} selectedSection={selectedSection}/>
                    <div className={styles.right}>
                        {renderSection()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
