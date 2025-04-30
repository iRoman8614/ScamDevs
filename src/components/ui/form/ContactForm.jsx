import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import {useState} from "react";
import axios from 'axios';

import { useTranslation } from 'react-i18next';


const ContactForm = () => {
    const { t } = useTranslation();
    const [message, setMessage] = useState()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/telegram/', data);
            if (response.data.success) {
                setMessage(`${t('contacts.success')}`);
            } else {
                setMessage(`${t('contacts.sentError')}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            setMessage(`${t('contacts.sentError')}`);
        }
    };

    return (
        <>
            <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
                <h2 className={styles.title}>{t('contacts.GETINTOUCH')}</h2>
                <input
                    type="text"
                    placeholder={t('contacts.name')}
                    {...register("name", { required: `${t('contacts.nameError')}` })}
                    className={styles.inputName}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                <input
                    type="email"
                    placeholder={t('contacts.mail')}
                    {...register("email", { required: `${t('contacts.mailError')}`, pattern: /^\S+@\S+\.\S+$/ })}
                    className={styles.inputEmail}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                <input
                    type="text"
                    placeholder={t('contacts.telegram')}
                    {...register("telegram", {
                        pattern: {
                            value: /^@(?:[a-zA-Z0-9_]){1,32}$/,
                            message: `${t('contacts.telegramPatternError')}`
                        }
                    })}
                    className={styles.inputName}
                />
                {errors.telegram && <p className={styles.error}>{errors.telegram.message}</p>}
                <input
                    type="text"
                    placeholder={t('contacts.phone')}
                    {...register("phone", {
                        pattern: {
                            value: /^\+\d{7,15}$/,
                            message: `${t('contacts.phonePatternError')}`
                        }
                    })}
                    className={styles.inputEmail}
                />
                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                <textarea
                    placeholder={t('contacts.message')}
                    {...register("message", { required: `${t('contacts.messageError')}` })}
                    className={styles.textarea}
                />
                {errors.message && <p className={styles.error}>{errors.message.message}</p>}
                <button type="submit" className={styles.button}>{t('contacts.SENDIT')}</button>
            </form>
            {message !== null && message !== undefined && <div>{message}</div>}
        </>
    );
};

export default ContactForm;
