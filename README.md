#What is this?

This is an example of using JSPM and SystemJS to load ES6 modules in the browser.


Intall and automatically configure JSPM (as per [this article](https://medium.com/@swirlycheetah/getting-started-with-jspm-systemjs-d6f2560b7eb4#.cq23cydns)):

    npm install jspm --save-dev

    jspm init -y

    ln -s node_modules/jspm/jspm.js jspm

To see a development build in the browser (i.e. including bable)

    # remove the bundles block from config.js
    ./jspm unbundle

    # serve index.html and open in the browser

To see a production build in the browser (i.e. without bable)

    # build the bundle into config.js, using main.js as the entry point
    ./jspm bundle main --inject

    # serve index.html and open in the browser

## Further reading

https://medium.com/@swirlycheetah/getting-started-with-jspm-systemjs-d6f2560b7eb4#.4rs62sdne

http://developer.telerik.com/featured/choose-es6-modules-today/

http://blog.mebooks.co.nz/es6-modules-with-system-js/

http://blog.codeschool.io/2015/12/11/es2015-a-systemjs-odyssey/

http://nervosax.com/2015/08/05/why-not-try-jspm-and-systemjs/

http://blog.codeschool.io/2015/12/11/es2015-a-systemjs-odyssey/
