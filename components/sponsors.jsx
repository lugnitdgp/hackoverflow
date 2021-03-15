import React from 'react';

export default function Sponsors() {
    return (
        <React.Fragment>
            <div className="container" style={{ marginTop: "40px", }}>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="serction_title_large mb-16">
                            <h3>Sponsors</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-2 md:pt-6 md:pb-4 flex md:flex-row flex-col items-center md:justify-around" style={{ marginTop: "30px", marginBottom: "20px", }}><div className="p-3">
                <img src="/devfolio.png" /></div>
            </div>
            <div className="w-full pt-2 md:pt-6 md:pb-8 flex md:flex-row flex-col items-center md:justify-around" style={{ marginBottom: "80px", }}>
                <div className="p-1">
                    <img src="/tezos.png" />
                </div>
                <div className="p-1">
                    <img src="/portis.png" />
                </div>
                <div className="p-1">
                    <img src="/Portis_Logo-Colored.png" />
                </div>
            </div>
        </React.Fragment>
    )
}