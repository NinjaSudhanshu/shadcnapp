import React from 'react';

const DashboardCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Card Component */}
            <div className="flex flex-col gap-3 rounded-lg p-5 shadow-md bg-card text-card-foreground border border-card-border">
                {/* Label and Icon */}
                <section className="flex justify-between">
                    <p className="text-sm">Total Revenue</p>
                    <span>$</span>
                </section>

                {/* Amount and Description */}
                <section className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold">$45,231.89</h2>
                    <p className="text-sm">+20.1% from last month</p>
                </section>
            </div>

            <div className="flex flex-col gap-3 rounded-lg p-5 shadow-md bg-card text-card-foreground border border-card-border">
                {/* Label and Icon */}
                <section className="flex justify-between">
                    <p className="text-sm">Total Revenue</p>
                    <span>$</span>
                </section>

                {/* Amount and Description */}
                <section className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold">$45,231.89</h2>
                    <p className="text-sm">+20.1% from last month</p>
                </section>
            </div>

            <div className="flex flex-col gap-3 rounded-lg p-5 shadow-md bg-card text-card-foreground border border-card-border">
                {/* Label and Icon */}
                <section className="flex justify-between">
                    <p className="text-sm">Total Revenue</p>
                    <span>$</span>
                </section>

                {/* Amount and Description */}
                <section className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold">$45,231.89</h2>
                    <p className="text-sm">+20.1% from last month</p>
                </section>
            </div>

            <div className="flex flex-col gap-3 rounded-lg p-5 shadow-md bg-card text-card-foreground border border-card-border">
                {/* Label and Icon */}
                <section className="flex justify-between">
                    <p className="text-sm">Total Revenue</p>
                    <span>$</span>
                </section>

                {/* Amount and Description */}
                <section className="flex flex-col gap-1">
                    <h2 className="text-3xl font-bold">$45,231.89</h2>
                    <p className="text-sm">+20.1% from last month</p>
                </section>
            </div>
        </div>
    );
};

export default DashboardCard;
