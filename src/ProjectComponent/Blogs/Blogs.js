import React from 'react';
import UseTitle from '../../RoutHooks/RoutHooks';

const Blogs = () => {
    UseTitle('Blogs')
    return (
        <div className="flex my-8 items-center justify-center ">
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold">
                        Some Asked Questions
                    </h2>
                    <p className="mt-4 mb-8 text-gray-600">
                        Learn skills Questions And Answers
                    </p>
                    <div className="space-y-4">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                Difference between SQL and NoSQL ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <h6 className='text-2xl'>SQL</h6>
                                <p>SQL programming can be effectively used to insert, search, update, delete database records.

                                    That doesn’t mean SQL cannot do things beyond that. It can do a lot of things including, but not limited to, optimizing and maintenance of databases.

                                    Relational databases like MySQL Database, Oracle, Ms SQL Server, Sybase, etc. use SQL.</p>
                            </p>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                <h6 className='text-2xl'>NoSQL</h6>
                                <p>NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs. NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day.

                                    NoSQL database stands for “Not Only SQL” or “Not SQL.” Though a better term would NoREL NoSQL caught on. Carl Strozz introduced the NoSQL concept in 1998.

                                    Traditional RDBMS uses SQL syntax to store and retrieve data for further insights. Instead, a NoSQL database system encompasses a wide range of database technologies that can store structured, semi-structured, unstructured and polymorphic data.

                                    Next, we will discuss the key diff between SQL and NoSQL.

                                </p>
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                What is JWT and how does it works ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                <br />
                                How JWT Works
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                                </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                            What is difference between Javascript and Node.js??
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            At first it was hard for me to understand the differences because for me, they were the same thing. It was all javascript. But then, I started to understand what each one was used for. For this reason, I share it :

** JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client-side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel.
<br/>
it needs an interpreter to run. V8 is Google Chrome's JS engine and 'node' is a front-end that can be used to run JavaScript scripts outside the browser. In other words:

** NodeJs is an open source, cross-platform environment that allows you to create server-side applications and tools using JavaScript.

                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                          How does NodeJs handle multiple requests at the same time ?
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                            No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.
<br/>
With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;