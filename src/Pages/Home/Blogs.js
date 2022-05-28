import React from 'react';

const Blogs = () => {
    return (
        <section class='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div class='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div>
                    <h1 class='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
                        Basic Questions
                    </h1>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        How will you improve the performance of a React Application?
                    </p>
                    <p class='text-gray-600'>
                        I can improve the perfomance of a reacr application by doing these techniques which are:

                        <li> Using React.Fragment to Avoid Adding Extra Nodes to the DOM.</li>
                        <li> By Ignoring Anonymous Functions.</li>
                        <li> Use A Production Build Before Deployment.</li>
                        <li> By Mounting And Unmounting Components.</li>
                        <li> Using React.memo for Component Memoization.</li>

                    </p>

                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        What are the different ways to manage a state in a React application?
                    </p>
                    <p class='text-gray-600'>
                        The different ways to manage state in a react application are:

                        <li> Local state - Local state is data we manage in one or another component.</li>
                        <li> Global state - Global state is data we manage across multiple components.</li>
                        <li> Server state - Data that comes from an external server that must be integrated with our UI state.</li>
                        <li> URL state - Data that exists on our URLs, including the pathname and query parameters.</li>

                    </p>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        How does prototypical inheritance work?
                    </p>
                    <p class='text-gray-600'>
                        CSS and JavaScript, when used properly, also have the potential to
                        allow for accessible web experiences, but if misused they can
                        significantly harm accessibility. This article outlines some CSS and
                        JavaScript best practices that should be considered to ensure that
                        even complex content is as accessible as possible.
                    </p>
                </div>
                <div>
                    <h1 class='mb-6 text-2xl font-light md:text-3xl'>
                        Advanced Questions
                    </h1>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                    </p>
                    <p class='text-gray-600'>

                        I should never set the state directly because of the following reasons: 1) If I set it directly, calling the setState() afterward may just replace the set i made. 2) When i directly set the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. 3) I will lose control of the state across all components.
                    </p>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        What is a unit test? Why should write unit tests?
                    </p>
                    <p class='text-gray-600'>

                        Unit tests only test a single part of your implementation. A unit. No dependencies or integrations, no framework specifics. They're like a method that returns a link in a specific language.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Blogs;