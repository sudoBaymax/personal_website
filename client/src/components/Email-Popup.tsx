import React, { useState } from "react";

interface EmailPopupProps {
    onClose?: () => void;
}

const EmailPopup: React.FC<EmailPopupProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const sendIntroEmail = () => {
        
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage("");
        setError("");

        // Basic email validation
        if (!formData.email.includes("@")) {
            setError("Please enter a valid email address.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/email_list", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 409) {
                setError("This email is already subscribed.");
            } else if (!response.ok) {
                setError("Something went wrong. Please try again.");
            } else {
                const data = await response.json();
                setMessage(data.message || "Successfully subscribed!");
                setFormData({ firstName: "", lastName: "", email: "" });
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="email-popup-overlay" onClick={onClose}></div>
            <div className="email-popup-wrapper">
                <button className="email-popup-close" onClick={onClose} aria-label="Close popup">&times;</button>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Last Name
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Subscribe"}
                    </button>
                </form>

                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    );
};

export default EmailPopup;
