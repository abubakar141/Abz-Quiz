export const quiz = {
  totalQuestions: 100,
  questions: [
    {
      id: 1,
      question: 'What is the purpose of the pages directory in a Next.js application?',
      answers: ['To store static assets', 'To define the routes of the application', 'To store environment variables', 'To configure Next.js settings'],
      correctAnswer: 'To define the routes of the application',
    },
    {
      id: 2,
      question: 'How does Next.js determine the route for a given page file?',
      answers: ['By the file name in the pages directory', 'By the file content', 'By a special route configuration file', 'By the order of file creation'],
      correctAnswer: 'By the file name in the pages directory',
    },
    {
      id: 3,
      question: 'What file should you create to define the root route (/) of your application?',
      answers: ['index.js', 'home.js', 'root.js', 'main.js'],
      correctAnswer: 'index.js',
    },
    {
      id: 4,
      question: 'In Next.js, what is the purpose of dynamic routing?',
      answers: ['To route requests to different servers', 'To generate routes based on data', 'To handle authentication', 'To define custom API endpoints'],
      correctAnswer: 'To generate routes based on data',
    },
    {
      id: 5,
      question: 'How do you define a dynamic route in Next.js?',
      answers: ['By creating files with square brackets (e.g., [id].js) in the pages directory', 'By using a special configuration file', 'By editing the next.config.js file', 'By creating functions in the pages directory'],
      correctAnswer: 'By creating files with square brackets (e.g., [id].js) in the pages directory',
    },
    {
      id: 6,
      question: 'What function can you use to get the parameters of a dynamic route in a Next.js page component?',
      answers: ['useRouter', 'getParams', 'useRouteParams', 'getRouteParams'],
      correctAnswer: 'useRouter',
    },
    {
      id: 7,
      question: 'Which hook provided by Next.js is used to access the router object?',
      answers: ['useRouting', 'useRouter', 'useParams', 'useNavigation'],
      correctAnswer: 'useRouter',
    },
    {
      id: 8,
      question: 'In Next.js, where do you define API routes?',
      answers: ['In the api directory inside the pages directory', 'In the routes directory', 'In the server directory', 'In the config directory'],
      correctAnswer: 'In the api directory inside the pages directory',
    },
    {
      id: 9,
      question: 'What file extension is used for API route files in Next.js?',
      answers: ['.js or .ts', '.api', '.jsx', '.api.js'],
      correctAnswer: '.js or .ts',
    },
    {
      id: 10,
      question: 'How can you create a nested route in Next.js?',
      answers: ['By creating a subfolder inside the pages directory', 'By configuring the next.config.js file', 'By using a special routing library', 'By editing the package.json file'],
      correctAnswer: 'By creating a subfolder inside the pages directory',
    },
    {
      id: 11,
      question: 'What is the purpose of getStaticPaths in a dynamic route page?',
      answers: ['To fetch data at build time', 'To define paths that need to be rendered at build time', 'To handle client-side routing', 'To create server-side routes'],
      correctAnswer: 'To define paths that need to be rendered at build time',
    },
    {
      id: 12,
      question: 'When using getStaticProps, when is the data fetched?',
      answers: ['At build time', 'At runtime', 'On every request', 'On the client side'],
      correctAnswer: 'At build time',
    },
    {
      id: 13,
      question: 'What is the primary use case for getServerSideProps in Next.js?',
      answers: ['To fetch data at request time', 'To pre-render pages at build time', 'To handle static file generation', 'To manage environment variables'],
      correctAnswer: 'To fetch data at request time',
    },
    {
      id: 14,
      question: 'Which Next.js feature allows for rendering pages at request time instead of at build time?',
      answers: ['getStaticProps', 'getServerSideProps', 'getInitialProps', 'useEffect'],
      correctAnswer: 'getServerSideProps',
    },
    {
      id: 15,
      question: 'What is the purpose of Link component in Next.js?',
      answers: ['To handle client-side navigation', 'To create server-side routes', 'To fetch data from APIs', 'To define dynamic routes'],
      correctAnswer: 'To handle client-side navigation',
    },
    {
      id: 16,
      question: 'How do you create a catch-all route in Next.js?',
      answers: ['By using square brackets with three dots (e.g., [...slug].js)', 'By configuring the next.config.js file', 'By editing the server.js file', 'By creating a wildcard route in the pages directory'],
      correctAnswer: 'By using square brackets with three dots (e.g., [...slug].js)',
    },
    {
      id: 17,
      question: 'What method is used in a Next.js API route to handle HTTP requests?',
      answers: ['handleRequest', 'httpRequest', 'apiHandler', 'export default function'],
      correctAnswer: 'export default function',
    },
    {
      id: 18,
      question: 'In Next.js, how can you redirect a user to a different page from an API route?',
      answers: ['By setting a Location header and status code', 'By using the Link component', 'By editing the next.config.js file', 'By using the useRouter hook'],
      correctAnswer: 'By setting a Location header and status code',
    },
    {
      id: 19,
      question: 'Which file can be used to define custom server configurations in Next.js?',
      answers: ['server.js', 'customServer.js', 'next.config.js', 'app.js'],
      correctAnswer: 'next.config.js',
    },
    {
      id: 20,
      question: 'What is the command to start a Next.js development server?',
      answers: ['npm run dev', 'npm start', 'next start', 'next build'],
      correctAnswer: 'npm run dev',
    },
    {
      id: 21,
      question: 'What is the primary benefit of using `getStaticProps` in Next.js?',
      answers: ['To fetch data at request time', 'To pre-render pages at build time', 'To handle client-side rendering', 'To manage dynamic routing'],
      correctAnswer: 'To pre-render pages at build time',
    },
    {
      id: 22,
      question: 'Which Next.js feature allows you to generate static pages for dynamic routes?',
      answers: ['getServerSideProps', 'getStaticProps', 'getStaticPaths', 'getInitialProps'],
      correctAnswer: 'getStaticPaths',
    },
    {
      id: 23,
      question: 'What is the primary use case for `getServerSideProps` in Next.js?',
      answers: ['To fetch data at request time', 'To pre-render pages at build time', 'To handle static file generation', 'To manage environment variables'],
      correctAnswer: 'To fetch data at request time',
    },
    {
      id: 24,
      question: 'How do you create an API route that handles POST requests in Next.js?',
      answers: ['By using `postHandler`', 'By using `useRouter`', 'By checking `req.method` in the API route', 'By creating a POST file in the api directory'],
      correctAnswer: 'By checking `req.method` in the API route',
    },
    {
      id: 25,
      question: 'What is the purpose of the `Link` component in Next.js?',
      answers: ['To handle client-side navigation', 'To create server-side routes', 'To fetch data from APIs', 'To define dynamic routes'],
      correctAnswer: 'To handle client-side navigation',
    },
    {
      id: 26,
      question: 'Which method is used to define dynamic API routes in Next.js?',
      answers: ['Using query parameters', 'Using `req.params`', 'Using square brackets in the filename', 'Using dynamic configuration in next.config.js'],
      correctAnswer: 'Using square brackets in the filename',
    },
    {
      id: 27,
      question: 'What command is used to build a Next.js application for production?',
      answers: ['next dev', 'next build', 'next start', 'next export'],
      correctAnswer: 'next build',
    },
    {
      id: 28,
      question: 'How can you redirect a user to a different page in Next.js using the `useRouter` hook?',
      answers: ['By setting the window.location property', 'By using the `push` method of `useRouter`', 'By using the `redirect` function', 'By updating the state'],
      correctAnswer: 'By using the `push` method of `useRouter`',
    },
    {
      id: 29,
      question: 'What is a fallback page in Next.js?',
      answers: ['A page that renders when an error occurs', 'A page that renders while another page is loading', 'A page that renders if no other routes match', 'A page that renders if dynamic data is not yet available'],
      correctAnswer: 'A page that renders if dynamic data is not yet available',
    },
    {
      id: 30,
      question: 'Which of the following methods allows Next.js to generate static HTML for a page?',
      answers: ['getServerSideProps', 'getStaticProps', 'useEffect', 'useRouter'],
      correctAnswer: 'getStaticProps',
    },
    {
      id: 31,
      question: 'In Next.js, how can you handle errors in API routes?',
      answers: ['By using try-catch blocks', 'By using the `errorHandler` method', 'By configuring `next.config.js`', 'By using custom middleware'],
      correctAnswer: 'By using try-catch blocks',
    },
    {
      id: 32,
      question: 'What is the purpose of the `next/link` module in Next.js?',
      answers: ['To enable client-side transitions between routes', 'To handle server-side redirects', 'To fetch data from an API', 'To manage application state'],
      correctAnswer: 'To enable client-side transitions between routes',
    },
    {
      id: 33,
      question: 'How do you add a custom 404 page in Next.js?',
      answers: ['Create a `404.js` file in the `pages` directory', 'Edit the `next.config.js` file', 'Use the `errorHandler` method', 'Override the default server'],
      correctAnswer: 'Create a `404.js` file in the `pages` directory',
    },
    {
      id: 34,
      question: 'Which lifecycle method is used to fetch data before a page is rendered in Next.js?',
      answers: ['componentDidMount', 'getInitialProps', 'useEffect', 'getServerSideProps'],
      correctAnswer: 'getServerSideProps',
    },
    {
      id: 35,
      question: 'What is the default port for a Next.js development server?',
      answers: ['3000', '4000', '5000', '8000'],
      correctAnswer: '3000',
    },
    {
      id: 36,
      question: 'How can you serve static files in a Next.js application?',
      answers: ['Place them in the `public` directory', 'Place them in the `static` directory', 'Configure them in `next.config.js`', 'Use the `static` method'],
      correctAnswer: 'Place them in the `public` directory',
    },
    {
      id: 37,
      question: 'What does `next/link` use to prefetch linked pages?',
      answers: ['Service Workers', 'WebSockets', 'Fetch API', 'Intersection Observer'],
      correctAnswer: 'Intersection Observer',
    },
    {
      id: 38,
      question: 'How do you enable AMP support in Next.js?',
      answers: ['Using the `amp` property in the page component', 'Using the `next.config.js` file', 'Using the `useAmp` hook', 'Using the `Link` component'],
      correctAnswer: 'Using the `amp` property in the page component',
    },
    {
      id: 39,
      question: 'What command is used to export a Next.js application as a static site?',
      answers: ['next build', 'next dev', 'next export', 'next start'],
      correctAnswer: 'next export',
    },
    {
      id: 40,
      question: 'How can you catch all routes in a Next.js application?',
      answers: ['By creating a wildcard route', 'By using `getServerSideProps`', 'By creating a catch-all route file with `[...slug].js`', 'By editing `next.config.js`'],
      correctAnswer: 'By creating a catch-all route file with `[...slug].js`',
    },
    {
      id: 41,
      question: 'How can you create an API route that handles DELETE requests in Next.js?',
      answers: ['By using the `deleteHandler` method', 'By checking `req.method` in the API route', 'By using the `DELETE` keyword in the filename', 'By using the `useRouter` hook'],
      correctAnswer: 'By checking `req.method` in the API route',
    },
    {
      id: 42,
      question: 'What is the purpose of the `_app.js` file in a Next.js project?',
      answers: ['To configure the global styles', 'To customize the default HTML document', 'To initialize pages', 'To create custom API routes'],
      correctAnswer: 'To initialize pages',
    },
    {
      id: 43,
      question: 'How can you create a custom 500 error page in Next.js?',
      answers: ['Create a `500.js` file in the `pages` directory', 'Edit the `next.config.js` file', 'Use the `errorHandler` method', 'Override the default server'],
      correctAnswer: 'Create a `500.js` file in the `pages` directory',
    },
    {
      id: 44,
      question: 'Which function is used to fetch data at build time in Next.js?',
      answers: ['getInitialProps', 'getServerSideProps', 'getStaticProps', 'useEffect'],
      correctAnswer: 'getStaticProps',
    },
    {
      id: 45,
      question: 'What is the purpose of the `useRouter` hook in Next.js?',
      answers: ['To fetch data from an API', 'To manage routing in a Next.js application', 'To handle state management', 'To optimize images'],
      correctAnswer: 'To manage routing in a Next.js application',
    },
    {
      id: 46,
      question: 'How can you implement dynamic imports in Next.js?',
      answers: ['Using the `dynamic` function from `next/dynamic`', 'Using the `import` keyword', 'Using the `next.config.js` file', 'Using the `useDynamic` hook'],
      correctAnswer: 'Using the `dynamic` function from `next/dynamic`',
    },
    {
      id: 47,
      question: 'Which of the following commands starts the Next.js development server?',
      answers: ['npm run start', 'npm run dev', 'next build', 'next start'],
      correctAnswer: 'npm run dev',
    },
    {
      id: 48,
      question: 'What is the purpose of the `public` directory in a Next.js application?',
      answers: ['To store environment variables', 'To define custom API routes', 'To serve static assets', 'To manage routing'],
      correctAnswer: 'To serve static assets',
    },
    {
      id: 49,
      question: 'How do you access query parameters in a Next.js page component?',
      answers: ['Using the `useQuery` hook', 'Using the `useParams` hook', 'Using the `useRouter` hook', 'Using the `getQueryParams` function'],
      correctAnswer: 'Using the `useRouter` hook',
    },
    {
      id: 50,
      question: 'How can you prefetch linked pages in Next.js?',
      answers: ['By setting the `prefetch` attribute on the `Link` component', 'By using the `usePrefetch` hook', 'By editing the `next.config.js` file', 'By using the `next/prefetch` module'],
      correctAnswer: 'By setting the `prefetch` attribute on the `Link` component',
    },
    {
      id: 51,
      question: 'What does the `next/image` component help you optimize?',
      answers: ['Routing', 'API requests', 'Image loading', 'Page transitions'],
      correctAnswer: 'Image loading',
    },
    {
      id: 52,
      question: 'How do you enable React Strict Mode in a Next.js application?',
      answers: ['By creating a `_strict.js` file', 'By setting `reactStrictMode` to `true` in `next.config.js`', 'By using the `useStrict` hook', 'By enabling it in `package.json`'],
      correctAnswer: 'By setting `reactStrictMode` to `true` in `next.config.js`',
    },
    {
      id: 53,
      question: 'What is the primary purpose of the `next/head` component?',
      answers: ['To manage application state', 'To handle routing', 'To modify the document head', 'To fetch data from APIs'],
      correctAnswer: 'To modify the document head',
    },
    {
      id: 54,
      question: 'How can you customize the HTML document structure in Next.js?',
      answers: ['By editing the `index.html` file', 'By creating a `_document.js` file', 'By modifying the `next.config.js` file', 'By using the `next/html` module'],
      correctAnswer: 'By creating a `_document.js` file',
    },
    {
      id: 55,
      question: 'What command is used to build and export a Next.js application as a static site?',
      answers: ['next build', 'next dev', 'next export', 'next start'],
      correctAnswer: 'next export',
    },
    {
      id: 56,
      question: 'How can you handle client-side redirects in Next.js?',
      answers: ['Using the `redirect` function', 'Using the `Link` component', 'Using the `Router.push` method', 'Using the `useRouter` hook'],
      correctAnswer: 'Using the `Router.push` method',
    },
    {
      id: 57,
      question: 'What does the `next/link` component enable in Next.js?',
      answers: ['Client-side transitions between routes', 'Server-side rendering', 'Static site generation', 'API route creation'],
      correctAnswer: 'Client-side transitions between routes',
    },
    {
      id: 58,
      question: 'How do you create a custom 404 error page in Next.js?',
      answers: ['Create a `_error.js` file in the `pages` directory', 'Edit the `next.config.js` file', 'Create a `404.js` file in the `pages` directory', 'Override the default server'],
      correctAnswer: 'Create a `404.js` file in the `pages` directory',
    },
    {
      id: 59,
      question: 'What is the default port for a Next.js production server?',
      answers: ['3000', '4000', '5000', '8000'],
      correctAnswer: '3000',
    },
    {
      id: 60,
      question: 'How do you serve static assets in a Next.js application?',
      answers: ['Place them in the `static` directory', 'Place them in the `assets` directory', 'Place them in the `public` directory', 'Place them in the `static-assets` directory'],
      correctAnswer: 'Place them in the `public` directory',
    },
    {
      id: 61,
      question: 'What is the purpose of the `next/error` component in Next.js?',
      answers: ['To handle errors during client-side transitions', 'To manage server-side errors', 'To create custom error pages', 'To fetch data from APIs'],
      correctAnswer: 'To handle errors during client-side transitions',
    },
    {
      id: 62,
      question: 'How do you create a static site using Next.js?',
      answers: ['By using the `next export` command', 'By configuring `next.config.js`', 'By using the `StaticSite` module', 'By creating a `static.js` file'],
      correctAnswer: 'By using the `next export` command',
    },
    {
      id: 63,
      question: 'What is the purpose of the `_error.js` file in Next.js?',
      answers: ['To define custom error pages', 'To manage static assets', 'To configure routing', 'To handle form submissions'],
      correctAnswer: 'To define custom error pages',
    },
    {
      id: 64,
      question: 'How do you handle environment variables in Next.js?',
      answers: ['By creating a `.env` file', 'By setting them in `next.config.js`', 'By using the `env` module', 'By editing the `package.json` file'],
      correctAnswer: 'By creating a `.env` file',
    },
    {
      id: 65,
      question: 'Which hook is used to fetch data on the client side in a Next.js application?',
      answers: ['useEffect', 'useFetch', 'useData', 'useRouter'],
      correctAnswer: 'useEffect',
    },
    {
      id: 66,
      question: 'What is the purpose of the `next/image` component in Next.js?',
      answers: ['To optimize image loading', 'To manage image uploads', 'To create responsive images', 'To handle image transformation'],
      correctAnswer: 'To optimize image loading',
    },
    {
      id: 67,
      question: 'How can you configure asset prefixes in Next.js?',
      answers: ['By setting `assetPrefix` in `next.config.js`', 'By creating a `prefix.js` file', 'By using the `usePrefix` hook', 'By configuring `publicPath`'],
      correctAnswer: 'By setting `assetPrefix` in `next.config.js`',
    },
    {
      id: 68,
      question: 'What is the purpose of the `next/link` component in Next.js?',
      answers: ['To handle client-side navigation', 'To create server-side routes', 'To manage state', 'To fetch data from an API'],
      correctAnswer: 'To handle client-side navigation',
    },
    {
      id: 69,
      question: 'How can you implement middleware in Next.js?',
      answers: ['By creating a custom server', 'By using the `next/middleware` module', 'By configuring `next.config.js`', 'By using the `useMiddleware` hook'],
      correctAnswer: 'By creating a custom server',
    },
    {
      id: 70,
      question: 'What is the purpose of the `next/document` component in Next.js?',
      answers: ['To customize the HTML document structure', 'To manage client-side state', 'To handle form submissions', 'To optimize images'],
      correctAnswer: 'To customize the HTML document structure',
    },
    {
      id: 71,
      question: 'How can you deploy a Next.js application to a production server?',
      answers: ['By using Vercel or other hosting platforms', 'By running `next deploy` command', 'By configuring `next.config.js`', 'By creating a custom deployment script'],
      correctAnswer: 'By using Vercel or other hosting platforms',
    },
    {
      id: 72,
      question: 'What is the purpose of the `next/amp` module in Next.js?',
      answers: ['To enable AMP support', 'To optimize image loading', 'To handle client-side redirects', 'To manage internationalization'],
      correctAnswer: 'To enable AMP support',
    },
    {
      id: 73,
      question: 'How can you enable TypeScript support in a Next.js project?',
      answers: ['By creating `tsconfig.json` and renaming files to `.ts` or `.tsx`', 'By using the `next/typescript` module', 'By editing the `package.json` file', 'By setting `typescript: true` in `next.config.js`'],
      correctAnswer: 'By creating `tsconfig.json` and renaming files to `.ts` or `.tsx`',
    },
    {
      id: 74,
      question: 'What is the purpose of the `next/dynamic` module in Next.js?',
      answers: ['To enable dynamic imports', 'To manage state', 'To fetch data from APIs', 'To handle server-side rendering'],
      correctAnswer: 'To enable dynamic imports',
    },
    {
      id: 74,
      question: 'What is ISR (Incremental Static Regeneration) in Next.js?',
      answers: ['A method to regenerate static pages at runtime', 'A strategy for improving server-side rendering', 'A caching mechanism for API responses', 'A method to handle routing in Next.js'],
      correctAnswer: 'A method to regenerate static pages at runtime',
    },
    {
      id: 75,
      question: 'How do you use environment variables in a Next.js application?',
      answers: ['Accessing them directly from process.env', 'Using a special `env` package', 'Setting them in the `next.config.js` file', 'Using the `useEnv` hook'],
      correctAnswer: 'Accessing them directly from process.env',
    },
    {
      id: 76,
      question: 'What is the purpose of the `next/image` component in Next.js?',
      answers: ['To optimize image loading and resizing', 'To fetch images from external sources', 'To handle image transformations', 'To create image galleries'],
      correctAnswer: 'To optimize image loading and resizing',
    },
    {
      id: 77,
      question: 'How can you handle authentication in a Next.js application?',
      answers: ['Using libraries like `next-auth` or `jsonwebtoken`', 'Using the `auth` package', 'Creating custom API routes', 'Editing the `next.config.js` file'],
      correctAnswer: 'Using libraries like `next-auth` or `jsonwebtoken`',
    },
    {
      id: 78,
      question: 'What is the purpose of the `next/script` component in Next.js?',
      answers: ['To load third-party scripts with optimization', 'To manage state in a Next.js application', 'To handle client-side routing', 'To create dynamic API routes'],
      correctAnswer: 'To load third-party scripts with optimization',
    },
    {
      id: 79,
      question: 'How can you implement SEO (Search Engine Optimization) in a Next.js application?',
      answers: ['By using the `next-seo` package', 'By editing the `next.config.js` file', 'By creating custom API routes', 'By using the `useSEO` hook'],
      correctAnswer: 'By using the `next-seo` package',
    },
    {
      id: 80,
      question: 'What is the purpose of the `_app.js` file in Next.js?',
      answers: ['To initialize pages', 'To manage global styles and layouts', 'To configure API routes', 'To optimize images'],
      correctAnswer: 'To manage global styles and layouts',
    },
    {
      id: 81,
      question: 'How do you handle internationalization (i18n) in a Next.js application?',
      answers: ['By using libraries like `next-translate` or `react-i18next`', 'By editing the `next.config.js` file', 'By creating custom translation APIs', 'By using the `i18n` hook'],
      correctAnswer: 'By using libraries like `next-translate` or `react-i18next`',
    },
    {
      id: 82,
      question: 'What is the purpose of the `next/head` component in Next.js?',
      answers: ['To modify the document head', 'To handle client-side routing', 'To manage state in components', 'To optimize images'],
      correctAnswer: 'To modify the document head',
    },
    {
      id: 83,
      question: 'How can you redirect users in a Next.js application?',
      answers: ['Using the `useRouter` hook and `push` method', 'By setting environment variables', 'By editing the `next.config.js` file', 'By using the `redirect` function'],
      correctAnswer: 'Using the `useRouter` hook and `push` method',
    },
    {
      id: 84,
      question: 'What is the purpose of the `getStaticProps` function in Next.js?',
      answers: ['To fetch data at request time', 'To pre-render pages at build time', 'To handle client-side routing', 'To create dynamic API routes'],
      correctAnswer: 'To pre-render pages at build time',
    },
    {
      id: 85,
      question: 'How do you create a custom 404 page in a Next.js application?',
      answers: ['Create a `404.js` file in the `pages` directory', 'Edit the `next.config.js` file', 'Use the `errorHandler` method', 'Override the default server'],
      correctAnswer: 'Create a `404.js` file in the `pages` directory',
    },
    {
      id: 86,
      question: 'What is the purpose of the `next/error` component in Next.js?',
      answers: ['To handle errors in the UI', 'To manage client-side routing', 'To optimize image loading', 'To create custom APIs'],
      correctAnswer: 'To handle errors in the UI',
    },
    {
      id: 87,
      question: 'How can you optimize performance in a Next.js application?',
      answers: ['By using `next optimize` command', 'By editing the `next.config.js` file', 'By using the `usePerformance` hook', 'By configuring the server'],
      correctAnswer: 'By editing the `next.config.js` file',
    },
    {
      id: 88,
      question: 'What is the purpose of the `next/router` module in Next.js?',
      answers: ['To manage client-side routing', 'To handle server-side rendering', 'To optimize server performance', 'To create dynamic APIs'],
      correctAnswer: 'To manage client-side routing',
    },
    {
      id: 89,
      question: 'How do you deploy a Next.js application to production?',
      answers: ['By using platforms like Vercel, Netlify, or AWS Amplify', 'By editing the `next.config.js` file', 'By using the `deploy` command', 'By configuring API routes'],
      correctAnswer: 'By using platforms like Vercel, Netlify, or AWS Amplify',
    },
    {
      id: 90,
      question: 'What is the purpose of the `next.config.js` file in a Next.js project?',
      answers: ['To configure settings like environment variables and webpack', 'To manage global styles and layouts', 'To create custom API routes', 'To optimize images'],
      correctAnswer: 'To configure settings like environment variables and webpack',
    },
    {
      id: 91,
      question: 'How can you handle form submissions in a Next.js application?',
      answers: ['By using the `useForm` hook', 'By creating custom API routes', 'By editing the `next.config.js` file', 'By setting environment variables'],
      correctAnswer: 'By creating custom API routes',
    },
    {
      id: 92,
      question: 'What is the purpose of the `next/image` component in Next.js?',
      answers: ['To handle image optimization', 'To manage image uploads', 'To create responsive images', 'To convert images to different formats'],
      correctAnswer: 'To handle image optimization',
    },
    {
      id: 93,
      question: 'How can you create a custom 404 error page in Next.js?',
      answers: ['By creating a `404.js` file in the `pages` directory', 'By editing the `next.config.js` file', 'By using the `errorHandler` method', 'By overriding the default server'],
      correctAnswer: 'By creating a `404.js` file in the `pages` directory',
    },
    {
      id: 94,
      question: 'What is the purpose of the `next/document` component in Next.js?',
      answers: ['To customize the HTML document', 'To handle API requests', 'To manage client-side navigation', 'To optimize images'],
      correctAnswer: 'To customize the HTML document',
    },
    {
      id: 95,
      question: 'How can you create a custom error page for specific HTTP status codes in Next.js?',
      answers: ['By using the `Error` object in `getServerSideProps`', 'By creating a `status-code.js` file in the `pages` directory', 'By editing the `next.config.js` file', 'By using the `useErrorHandler` hook'],
      correctAnswer: 'By creating a `status-code.js` file in the `pages` directory',
    },
    {
      id: 96,
      question: 'What is the purpose of the `next/image` component in Next.js?',
      answers: ['To handle image optimization', 'To manage image uploads', 'To create responsive images', 'To convert images to different formats'],
      correctAnswer: 'To handle image optimization',
    },
    {
      id: 97,
      question: 'How can you redirect users from one page to another in a Next.js application?',
      answers: ['By using the `Router.push` method', 'By editing the `next.config.js` file', 'By creating a custom `redirect.js` file', 'By using the `redirect` function'],
      correctAnswer: 'By using the `Router.push` method',
    },
    {
      id: 98,
      question: 'What is the purpose of the `next/script` component in Next.js?',
      answers: ['To load third-party scripts with optimization', 'To manage client-side navigation', 'To handle form submissions', 'To optimize images'],
      correctAnswer: 'To load third-party scripts with optimization',
    },
    {
      id: 99,
      question: 'How can you add meta tags for SEO in a Next.js application?',
      answers: ['By using the `next/head` component', 'By editing the `next.config.js` file', 'By using the `useSEO` hook', 'By creating a `SEO.js` file'],
      correctAnswer: 'By using the `next/head` component',
    },
    {
      id: 100,
      question: 'What command is used to start the development server in Next.js?',
      answers: ['npm run dev', 'npm start', 'next dev', 'next build'],
      correctAnswer: 'npm run dev',
    },
  ],
};
