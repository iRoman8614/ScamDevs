import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Message Sent!");
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <h2 className={styles.title}>GET IN TOUCH</h2>

            <input
                type="text"
                placeholder="name"
                {...register("name", { required: "Name is required" })}
                className={styles.input}
            />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}

            <input
                type="email"
                placeholder="mail"
                {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
                className={styles.input}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}

            <textarea
                placeholder="Message..."
                {...register("message", { required: "Message is required" })}
                className={styles.textarea}
            />
            {errors.message && <p className={styles.error}>{errors.message.message}</p>}

            <button type="submit" className={styles.button}>SEND IT</button>
        </form>
    );
};

export default ContactForm;
