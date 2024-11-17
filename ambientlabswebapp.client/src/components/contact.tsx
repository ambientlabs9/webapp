import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for the toast

export const Contact = (props: any) => {
    console.log(props);

    const initialState = {
        name: "",
        email: "",
        message: "",
    };

    const [sending, setSending] = useState<boolean>(false);
    const [{ name, email, message }, setForm] = useState(initialState);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setForm({ ...initialState });

    const handleSubmit = async (e: any) => {
        setSending(true);
        e.preventDefault();
        const emailRequest = {
            from: email,
            subject: `Contact Form Submission from ${name}`,
            body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        console.log(emailRequest);
        // Post data to the .NET controller
        try {
            const response = await fetch('api/Email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailRequest)
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
            } else {
                toast.error('Failed to send email.');
            }
        } catch (error: any) {
            toast.error(`An error occurred: ${error.message}`);
        } finally {
            setSending(false);
            clearState();
        }
    };

    return (
        <div>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mb-4 m-auto">
                            <div className="section-title">
                                <h2>Get In Touch</h2>
                                <p>
                                    Please fill out the form below to send us an email and we will
                                    get back to you as soon as possible.
                                </p>
                            </div>
                            <form name="sentMessage" onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required
                                                onChange={handleChange}
                                                value={name}
                                            />
                                            <div className="invalid-feedback">Please enter your name.</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required
                                                onChange={handleChange}
                                                value={email}
                                            />
                                            <div className="invalid-feedback">Please enter a valid email.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows={4}
                                        placeholder="Message"
                                        required
                                        onChange={handleChange}
                                        value={message}
                                    ></textarea>
                                    <div className="invalid-feedback">Please enter a message.</div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg mt-4" disabled={sending}>
                                    {sending ? (
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <div id="footer" className="bg-dark text-white py-3">
                <div className="container text-center">
                    <p>
                        &copy; 2024 Ambient Labs
                    </p>
                </div>
            </div>
        </div>
    );
};
