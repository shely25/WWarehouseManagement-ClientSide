import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-5' >
            <h1 className='text-center mt-3'>Question-Answare</h1>
            <h3 className='mt-5'>1.Difference between Javascript and Node.js:</h3>
            <p>javascript is a simple programming languges that runs in any browser javascript engine and Node.js is an interpreter or running environment for javascript programming language that holds many excuses.
                javascript running any engine like spider monkey(firefox),Java script Core(Safari),v8(Chrome).Node js only run in v8 engine.

                Javascript Normally following java Programming Language standard.Whareas Node js is written in C++.
            </p>

            <h3 className='mt-5'>2. When should you use nodejs and when should you use mongodb??</h3>
            <p>Mongodb is a database where we can stor data and NodeJS helps to connect client side to database by it's server.</p>
        </div>
    );
};

export default Blogs;