import styles from './PersonalInfo.module.css';
import { useEffect, useState } from 'react';

import user from "../../../assets/new-icons/account.png";

const PersonalInfo = () => {
    // const formik = useFormik();
    const [firstName, setFirstName] = useState("Enter First Name");
    const [lastName, setLastName] = useState("Enter Last Name");
    const [email, setEmail] = useState("example@domian.com")

    useEffect (() => {

    }, [])

    return (
        <div className={styles.personalInfo}>
            <img src={user} alt="" width="150px" />
            <br />
            <div className={styles.names_section}>
                <div className={styles.name}>
                    <label htmlFor="firstName" className={styles.infoLable}>First Name *</label><br />
                    <input 
                        id="firstName"
                        type="text"
                        placeholder={firstName}
                        // {...formik.getFieldProps('firstName')}
                        className={styles.names}
                    />
                </div>
                <div className={styles.name}>
                    <label htmlFor="lastName" className={styles.infoLable}>Last Name *</label><br />
                    <input 
                        id="lastName"
                        type="text"
                        placeholder={lastName}
                        // {...formik.getFieldProps('firstName')}
                        className={styles.names}
                    />
                </div>
            </div>
            <label htmlFor="lastName" className={styles.infoLable}>Email *</label><br />
            <input 
                id="email"
                type='email'
                placeholder={email}
                // {...formik.getFieldProps('firstName')}
                className={styles.otherInfo}
            />

            <label htmlFor="lastName" className={styles.infoLable}>Phone *</label><br />
            <input 
                id="email"
                type='email'
                placeholder={email}
                // {...formik.getFieldProps('firstName')}
                className={styles.otherInfo}
            />
        </div>
    );
}

export default PersonalInfo;