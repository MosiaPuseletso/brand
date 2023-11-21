import React from "react";

function CaseStudies() {

    const caseStudies = [
        {
            title: 'The Olympian',
            description: 'The only athlete in the world to do her Olympic routine in 2020.',
            className: 'casestudy-olympian'
        },
        {
            title: 'The Savings Jar',
            description: 'Grow your savings treasure and grow your dragon.',
            className: 'casestudy-jar'
        },
        {
            title: 'Skhokho seMali',
            description: 'Helping South Africans become #CashCleva with Skhokho and TymeBank.',
            className: 'casestudy-skhoskho'
        }
    ];

    return (
        <div className="casestudies">
            <div className="casestudies-heading">
                <span></span>
                <h4>Case studies</h4>
            </div>
            <div className="casestudies-content">
                {
                    caseStudies.map((study, index) => (
                        <div key={index} className="slide">
                            <div className={study.className}>
                                <div className="casestudy-content">
                                    <span></span>
                                    <h5>{study.title}</h5>
                                    <p>{study.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CaseStudies;