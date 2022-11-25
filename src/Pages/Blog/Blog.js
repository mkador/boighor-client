import React from 'react'

const Blog = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-12 mx-auto">
          <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
            Frequently asked questions
          </h1>

          <div class="mt-8 space-y-8 lg:mt-12">
            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button class="flex items-center justify-between w-full">
                <h1 class="font-semibold text-gray-900 dark:text-white">
                  What are the different ways to manage a state in a React
                  application?
                </h1>
              </button>
              <p>
                There are four main types of state you need to properly manage
                in your React apps:
              </p>
              <li>Local state</li>
              <li>Global state</li>
              <li>Server state</li>
              <li>URL state</li>
              <p class="mt-6 text-sm text-gray-700 dark:text-gray-300">
                <h4 className="text-xl">Local (UI) state</h4> – Local state is
                data we manage in one or another component. Local state is most
                often managed in React using the useState hook. For example,
                local state would be needed to show or hide a modal component or
                to track values for a form component, such as form submission,
                when the form is disabled and the values of a form’s inputs.{' '}
                <br />
                <h4 className="text-xl">Global (UI) state</h4>– Global state is
                data we manage across multiple components. Global state is
                necessary when we want to get and update data anywhere in our
                app, or in multiple components at least. A common example of
                global state is authenticated user state. If a user is logged
                into our app, it is necessary to get and change their data
                throughout our application. Sometimes state we think should be
                local might become global. <br />
                <h4 className="text-xl">Server state</h4>– Data that comes from
                an external server that must be integrated with our UI state.
                Server state is a simple concept, but can be hard to manage
                alongside all of our local and global UI state. There are
                several pieces of state that must be managed every time you
                fetch or update data from an external server, including loading
                and error state. Fortunately there are tools such as SWR and
                React Query that make managing server state much easier. <br />
                <h4 className="text-xl">URL state</h4>– Data that exists on our
                URLs, including the pathname and query parameters. URL state is
                often missing as a category of state, but it is an important
                one. In many cases, a lot of major parts of our application rely
                upon accessing URL state. Try to imagine building a blog without
                being able to fetch a post based off of its slug or id that is
                located in the URL! There are undoubtedly more pieces of state
                that we could identify, but these are the major categories worth
                focusing on for most applications you build
              </p>
            </div>

            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button class="flex items-center justify-between w-full">
                <h1 class="font-semibold text-gray-700 dark:text-white">
                  How does prototypical inheritance work?
                </h1>
              </button>
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
            </div>

            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button class="flex items-center justify-between w-full">
                <h1 class="font-semibold text-gray-700 dark:text-white">
                  What is a unit test? Why should we write unit tests?
                </h1>
              </button>
              <p>
                Unit Testing is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object <br />{' '}
                They enable you to catch bugs early in the development process.
                Automated unit tests help a great deal with regression testing.
                They detect code smells in your codebase. For example, if you're
                having a hard time writing unit tests for a piece of code, it
                might be a sign that your function is too complex
              </p>
            </div>

            <div class="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button class="flex items-center justify-between w-full">
                <h1 class="font-semibold text-gray-700 dark:text-white">
                  React vs. Angular vs. Vue?
                </h1>
              </button>
              <p>
                Angular is a front-end framework with lots of components,
                services, and tools. On Angular’s site, you can see that they
                define Angular as: “The modern web developer’s platform” It is
                developed and maintained by Google developers, but curiously it
                is not used to implement any of their most common products such
                as Search or YouTube. <br /> React is considered a UI library.
                They define themselves as: “A JavaScript library for building
                user interfaces” Facebook developers are behind the development
                and maintenance of this library. And, in this case, most of
                Facebook’s products are made with React. <br /> Last but not
                least, Vue.js is, according to its site: “A progressive
                JavaScript framework” Vue.js is developed and led by Evan You,
                but also it counts on a huge open-source community. <br /> These
                three frameworks have several things in common, such as each
                follows a component-based architecture and allows creating UI
                features quickly. React and Vue.js are mainly declarative, and
                while Angular could also be declarative, it’s really more
                imperative. Nevertheless, they present some more differences
                according to their structure, architecture and way of working,
                so let’s dive into all these characteristics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
