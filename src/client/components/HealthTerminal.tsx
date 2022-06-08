import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import AllFamily from './subComponents/Health/AllFamily';
import AllYouth from './subComponents/Health/AllYouth';
import AllAdult from './subComponents/Health/AllAdult';
import AllSenior from './subComponents/Health/AllSenior';
import Careers from './subComponents/Careers';

const Terminal = () =>
{

    const [mental, setMental] = useState(false);
    const [physical, setPhysical] = useState(false);
    const [tele, setTele] = useState(false);

    const mentalLoaded = () =>
    {
        setMental(true);
        setPhysical(false);
        setTele(false);
    }

    const physicalLoaded = () =>
    {
        setMental(false);
        setPhysical(true);
        setTele(false);
    }

    const teleLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(true);
    }


    const personalButton = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
    }

    const careersLoaded = () =>
    {
        setMental(false);
        setPhysical(false);
        setTele(false);
    }

    if (mental && !physical && !tele)
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Health <span className="blue">Resources</span></h2>                                
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li className="active">Mental</li></a>
                                    <a onClick={physicalLoaded}><li>Physical</li></a>
                                    <a onClick={teleLoaded}><li>Spiritual</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <AllYouth />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    } else if (!mental && physical && !tele)
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Health <span className="blue">Resources</span></h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Mental</li></a>
                                    <a onClick={physicalLoaded}><li className="active">Physical</li></a>
                                    <a onClick={teleLoaded}><li>Spiritual</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <AllAdult />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else if (!mental && !physical && tele)
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Health <span className="blue">Resources</span></h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li>General</li></a>
                                    <a onClick={mentalLoaded}><li>Mental</li></a>
                                    <a onClick={physicalLoaded}><li>Physical</li></a>
                                    <a onClick={teleLoaded}><li className="active">Spiritual</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <AllSenior />
                                </div>
                            </div>
                            <div className="buttonwrap">
                                <Link className="button" to="/partners">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    } else 
    {
        return (
            <>
                <section className="addRes">
                    <div className="container">
                        <div className="seven columns offset-by-one-half">
                            <div className="header">
                                <h2>Health <span className="blue">Resources</span></h2>
                                <p>Click the button below to select resources by category. Hover over</p>
                            </div>
                            <div className="list">
                                <ul className="terminal">
                                    <a onClick={personalButton}><li className="active">General</li></a>
                                    <a onClick={mentalLoaded}><li>Mental</li></a>
                                    <a onClick={physicalLoaded}><li>Physical</li></a>
                                    <a onClick={teleLoaded}><li>Spiritual</li></a>
                                </ul>
                            </div>
                            <div className="panel">
                                <div className="container">
                                    <AllFamily />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Terminal;

