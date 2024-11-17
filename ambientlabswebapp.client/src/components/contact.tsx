import { useState } from "react";
import emailjs from "emailjs-com";

const initialState = {
    name: "",
    email: "",
    message: "",
};

export const Contact = (props: any) => {
    const [{ name, email, message }, setState] = useState(initialState);
    console.log(props);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };
    const clearState = () => setState({ ...initialState });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(name, email, message);

        // Replace below with your own Service ID, Template ID and Public Key from your EmailJS account
        emailjs
            .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
            .then(
                (result: any) => {
                    console.log(result.text);
                    clearState();
                },
                (error: any) => {
                    console.log(error.text);
                }
            );
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
                                    ></textarea>
                                    <div className="invalid-feedback">Please enter a message.</div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
