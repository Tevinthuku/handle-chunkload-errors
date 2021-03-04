## Chunk Load Errors

This errors can occur when a user has your app open & a deployment happens.
In this simple example we can assume that about page which is loaded in dynamically has hashed name of
`about.old123.chunk.js`
After modifying the file & running the deployment, the name can change to
`about.new345.chunk.js`.
In this particular case, when a user who is viewing the old assets clicks on the about link, the app tries to fetch `about.old123.chunk.js` which is the old asset & no longer exists.
This causes the app to crash.

## This solution

What we do in this solution check if the error is a `ChunkLoadError` & if it didn't already reload in the last 1 second. See `src/errorboundary.js`. If this conditions are met, we reload the page & the browser can then fetch the updated assets.

## How to test this & reproduce ChunkLoadError.

1. Install [Serve](https://www.npmjs.com/package/serve) globally
2. Clone the repo & run `yarn` to install the packages.
3. Run `yarn build` to build the app.
4. Run `serve -s build` to serve the built asset in a separate terminal window.
5. Open the port specified & visit the `/` route.
6. (Sorry, this is getting tiresome, but we are almost done) Modify the about file in the `src/routes/about.js`.. (Add a lengthy paragragh or delete most of the content that exists)
7. Run the build again
8. Go back to the open app & click on the `/about` link.

What you'll realize is the page reloads & the updated about content is displayed on the browser.
This might be a better experience for users & they dont have to manually reload the page if the issue that caused the app to break is a `ChunkLoadError`
