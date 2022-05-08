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
            <p>Mongodb is a database where we can store data and NodeJS helps to connect client side to database by it's server.
                There Are many problems when using NodeJS is Appreciating.Like non blocking even driven data intensive etc.Because of it's being single threaded.All the execution that happens in Node JS environment is carried out by one  computer thread.NodeJS is not recommended for heavy computation.Whenever a heavy request comes to the event loop, Node. js would set all the CPU available to process it first, and then answer other requests queued which makes the process slow.

                Mongodb is a good choice when the data is document-centric and doesn't fit into the schema of a relational database because of it's noSQL properties.
            </p>
            <h3 className='mt-5'>2.  Differences between sql and nosql databases.</h3>
            <p>SQl is relational database.NoSQL is non relational distributed database system.SQL databse has fixed predefined schema and the NoSQL ha dynamic schema.
                NoSQL is suitable for hierarchical data storage but SQL are not.SQL are vertical scalable and NoSQL are horizontal scalable.
            </p>
        </div>
    );
};

export default Blogs;