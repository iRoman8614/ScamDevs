import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import axios from 'axios';

import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/telegram/', data);
            if (response.data.success) {
                alert(`${t('contacts.success')}`);
            } else {
                alert(`${t('contacts.sentError')}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert(`${t('contacts.sentError')}`);
        }
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>GET IN TOUCH</h2>
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
            <textarea
                placeholder={t('contacts.message')}
                {...register("message", { required: `${t('contacts.messageError')}` })}
                className={styles.textarea}
            />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
            <button type="submit" className={styles.button}>{t('contacts.SENDIT')}</button>
        </form>
    );
};

export default ContactForm;
