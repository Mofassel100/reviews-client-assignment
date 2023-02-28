import React from 'react';
import { Link } from 'react-router-dom';

const componentName = (props) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=300")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Mothers Food Delevery</h1>
                        <p className="mb-5">Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                            It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                            Interested? Let's start our partnership today!</p>
                        <Link to="/details" className="btn btn-primary">All Foods</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default componentName;