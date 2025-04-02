import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/telegram/', data);
            console.log(response.data);
            if (response.data.success) {
                alert('Message Sent!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Error sending message.');
        }
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>GET IN TOUCH</h2>
            <input
                type="text"
                placeholder="name"
                {...register("name", { required: "Name is required" })}
                className={styles.inputName}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
            <input
                type="email"
                placeholder="mail"
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
                className={styles.inputEmail}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            <textarea
                placeholder="Message"
                {...register("message", { required: "Message is required" })}
                className={styles.textarea}
            />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}
            <button type="submit" className={styles.button}>SEND IT</button>
        </form>
    );
};

export default ContactForm;
