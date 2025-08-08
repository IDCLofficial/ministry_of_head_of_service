export const ObjectivesSection = () => {
    const agencies: { title: string; description: string }[] = [
        {
            title: "Merit-Based Appointments & Promotions",
            description: "Promote merit-based appointments and promotions."
        },
        {
            title: "Civil Service Training & Retraining",
            description: "Strengthen civil service training and retraining programs."
        },
        {
            title: "ICT & Digital Transformation",
            description: "Drive ICT adoption and digital transformation across ministries."
        },
        {
            title: "Transparent & Timely Service Delivery",
            description: "Ensure transparent and timely service delivery to the public."
        }
    ];

    const coreValues = [
        "Enlightenment",
        "Empowerment",
        "Excellence",
        "Social Responsibility"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {agencies.map((agency, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-xl md:text-[22px] mb-2 md:mb-3">
                                    {agency.title}
                                </h3>
                                <p className="text-dark-primary-body text-base md:text-[1rem]">
                                    {agency.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 