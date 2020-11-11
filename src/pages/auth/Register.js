import React, { useState, useContext } from 'react';
import Layout from '../../components/Layout';

import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';
import { ThemeContext } from '../../context/ThemeContext';

import styles from './login.module.scss';
import { useTranslation } from 'react-i18next';

const Register = () => {

    const firebase = useFirebaseApp();

    const { t } = useTranslation();

    const { theme } = useContext(ThemeContext);
    
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        setLoading(true)
        // firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        //     setLoading(false)
        // }).catch((err) => {
        //     alert('Login Failed', 'check your email and password')
        //     console.log("Error !",err);
        //     setLoading(false)
        // });
    }

    const googleLogin = async () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }


    const style = {background: theme.ui, color: theme.text, borderColor: theme.ui}

    return ( 
        <Layout>
            
            {
                <div className={styles.p__container}>
                    <h1 style={{fontSize: "1.2rem", margin: "0 0 5px"}}>Register</h1>
                    <p className="text-muted">{t('Start tracking your expenses')}</p>
                    <div className="text-left">
                        <div className={styles.field__group}>
                            <input style= {style}
                             className={styles.control} type="email" name="email" placeholder={t('email')} disabled={loading} value={email} onChange={(e) => setEmail(e.target.value) } />
                        </div>
                        <div className={styles.field__group}>
                            <input style= {style}
                            className={styles.control} type="password" name="password" placeholder={t('password')} disabled={loading} value={password} onChange={(e) => setPassword(e.target.value) }/>
                        </div>
                        <div className={styles.field__group}>
                            <button onClick={handleSubmit} type="button" className={styles.button} disabled={loading}>{loading ? t('loading') : Register}</button>
                        </div>
                    </div>
                </div>
            }
            

        </Layout>
     );
}

export default Register;