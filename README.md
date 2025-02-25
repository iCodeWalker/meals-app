# Meals App Using Next.js

1. Custom Routes are set up using the components in the app folder.

2. The custom components and other util functions are to be placed in other folders, outside the "app" folder.

3. In next projects the image is imported as an object and we have to access the path using src property of the image object.

4. We use css modules, which in general is standard css code, but scoped to specifc components by assigning special names to the css files. CSS modules is supported by the Next.js out of the box.

We have to add css files that ends with "FILE_NAME.module.css", and we can import an object from this file.
The object is created internally by Next.js

Now we can access the css clases defined in the file as properties of the imported Style Object

5. We can use <Image> element provided by the Next.js to render image in more optimised way.
   Makes setting responsive image easier. Serves in the best size possible.
   Helps in lazy loading the image.
   When using <Image> tag we have to pass the whole image object that is imported to the "src" attribute. As Next.js uses it under the hood for optimization purposes.
   Automatically serves the image in the best format for the different browsers.
   We have to add a "priority" property when we need the image to always be visible when the page loads so we don't have any unnecesary flickering of the images.

   We add "priority" property when we have to laod images on priority.

    <Image src={logoImg} alt="logo" priority />

6. As in Styles.header-background "header-background" is an invalid property name in JS so we have to use it like Styles["header-background"]

7. We cannot use useState hook in Server Components. useState only works on Client Components.
   By default Next.js marks components as Server Component.

8. React Server Components and Client Components

   React is a pure Client Side library it receives the HTML file that contains the client-side JS code and running the JS code in the Client Browser.

   Next.js is a fullstack framework, so code is also executed on the backend. The backend server executes the server component functions and outputs the HTML code to be rendererd on the. The client side receives and renders the HTML code.

   RSCs:
   React server component are only rendered on the server.
   By default all React components in Next.js app are RSCs.
   Advantage : Less client side JS code, Good for SEO.

   Client Component:
   Components that are pre-rendered on the server but can also render on the client side. useState or useEffect hooks are not available on the Server side.
   We have to use 'use client' directive in the component whom we want to render on client side also.
   Advantage : client side interactivity and features.

9. To use Client Side components efficiently we should bifurcate the components into more simpler components as possible.

10. When using dynamic images i.e. the images coming from backend or database we have to use the "Fill" attribute on the <Image> element to optimize the image properly, as Next.js does not know thw size of the image and cannot provide the suitable height and width to the image as it does in case of local used images at the time of build so we have to provide the "Fill" so that it can fill the whole space that is available for the image.

<Image src={image} alt={title} fill />

11. better-sqlite3 is a package that helps us to work with sql database. we will use it as it can be used locally without setting any extra database server.

run command node initdb.js to create the meals.db

12. To fetch data from the database we can use Server Side components, without using any fetch request or useEffects.
    we can make components async in next js and use promises directly.

13. Next.js performs some preety agressive caching under the hood, it caches the page that we visited including the data of that page and when we revisits the same page from another page, next.js loads the page from the cache. So that it can show the page as quickly as possible.

And when we reload than the page is recreated.

14. loading.js file becomes active when if page.js file next to it or any nested page.js or layout.js file is loading data.

Untill the data is loaded the content of the loading.js is shown as a fallback.

15. For Granular Loading State Management we can use <Suspense> component provided by React. <Suspense> helps us to handle loading states and show fallback content untill some data or resource is being loaded.
