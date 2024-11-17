export const About = (props: any) => {
    return (
        <div id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <img src="img/about.jpg" className="img-fluid" alt="About" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="about-text">
                            <h2>About Us</h2>
                            <p>{props.data ? props.data.paragraph : "loading..."}</p>
                            <h3>Why Choose Us?</h3>
                            <div className="row">
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        {props.data
                                            ? props.data.Why.map((d: any, i: any) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        {props.data
                                            ? props.data.Why2.map((d: any, i: any) => (
                                                <li key={`${d}-${i}`}>{d}</li>
                                            ))
                                            : "loading"}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
