export const Team = (props: any) => {
    return (
        <div id="team" className="text-center py-5">
            <div className="container">
                <div className="row justify-content-center mb-4">
                    <div className="col-md-8">
                        <h2>Meet the Team</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
                            dapibus leonec.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {props.data
                        ? props.data.map((d: any, i: any) => (
                            <div key={`${d.name}-${i}`} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                <div className="card border-0 shadow-sm">
                                    <img src="img/team/headshot.jpg" alt={d.name} className="card-img-top team-img m-auto" />
                                    <div className="card-body">
                                        <h4 className="card-title">{d.name}</h4>
                                        <p className="card-text">{d.job}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        : "loading"}
                </div>
            </div>
        </div>
    );
};
