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
                        <ul>
                            <li>1. Using React.Fragment to Avoid Adding Extra Nodes to the DOM.</li>
                            <li>2. By Ignoring Anonymous Functions.</li>
                            <li>3. Use A Production Build Before Deployment.</li>
                            <li>4. By Mounting And Unmounting Components.</li>
                            <li>5. Using React.memo for Component Memoization.</li>
                        </ul>
                    </p>

                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        What are the different ways to manage a state in a React application?
                    </p>
                    <p class='text-gray-600'>
                        The different ways to manage state in a react application are:
                        <ul>
                            <li>1. Local state - Local state is data we manage in one or another component.</li>
                            <li>2. Global state - Global state is data we manage across multiple components.</li>
                            <li>3. Server state - Data that comes from an external server that must be integrated with our UI state.</li>
                            <li>4. URL state - Data that exists on our URLs, including the pathname and query parameters.</li>
                        </ul>
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
                        WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics, WAI-ARIA basics?
                    </p>
                    <p class='text-gray-600'>
                        Following on from the previous article, sometimes making complex UI
                        controls that involve unsemantic HTML and dynamic JavaScript-updated
                        content can be difficult. WAI-ARIA is a technology that can help
                        with such problems by adding in further semantics that browsers and
                        assistive technologies can recognize and use to let users know what
                        is going on. Here we'll show how to use it at a basic level to
                        improve accessibility.
                    </p>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        Accessible multimedia?
                    </p>
                    <p class='text-gray-600'>
                        Another category of content that can create accessibility problems
                        is multimedia — video, audio, and image content need to be given
                        proper textual alternatives, so they can be understood by assistive
                        technologies and their users. This article shows how.
                    </p>
                    <p class='mt-10 mb-3 font-semibold text-gray-900'>
                        Mobile accessibility?
                    </p>
                    <p class='text-gray-600'>
                        With web access on mobile devices being so popular, and popular
                        platforms such as iOS and Android.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;