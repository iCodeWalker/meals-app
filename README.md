# Meals App Using Next.js

1. Custom Routes are set up using the components in the app folder.

2. The custom components and other util functions are to be placed in other folders, outside the "app" folder.

3. In next projects the image is imported as an object and we have to access the path using src property of the image object.

4. We use css modules, which in general is standard css code, but scoped to specifc components by assigning special names to the css files. CSS modules is supported by the Next.js out of the box.

We have to add css files that ends with "FILE_NAME.module.css", and we can import an object from this file.
The object is created internally by Next.js

Now we can access the css clases defined in the file as properties of the imported Style Object
