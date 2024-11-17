export const Header = (props: any) => {
    return (
        <header id="header" className="bg-dark text-white">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="mt-3 col-md-8 text-end intro-text">
                                <h1 className="display-4">
                                    {props.data ? props.data.title : "Loading"}
                                </h1>
                                <p className="lead">{props.data ? props.data.paragraph : "Loading"}</p>
                                <a
                                    href="mailto:ambientmailto:ambientlabs9@gmail.com?subject=nice%20to%20meet%20you&body="
                                    className="btn btn-primary btn-lg mt-3"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
