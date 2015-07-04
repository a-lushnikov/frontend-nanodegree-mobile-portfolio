# Performance optimization project

This project was completed as a part of udacity frontend developer nanodegree programm. The idea was to optimize a given web-site to achieve adequate frame-rate for several terminally slow pages. Most of the exercise took place in main.js which is some weird JS with effects for web-site with lots of pizzas flying all over the screen.

* Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.
* Eliminated inefficiencies in the website's scroll animation.  Site now scrolls at 60 frames per second.


## Building project
Before you will be able to run this project you need to build it. Build is done with gulp. Run

npm install
gulp clean
gulp min

to get minified JS and CSS. That is necessary to run web site.

## Server setup
Chrome page speed insights was showing issues related to caching, encoding and charset. This might only be fixed on the server level. For me I've been using IIS. What you need to do is to set some HTTP headers in response.

Those should be:
 Cache-Control : max-age=86400
 Content-Type : text/html; charset=UTF-8
 Vary : Accept-Encoding

Also set content expiry date. Sample configuration for IIS provided (see web.config)



When setup is done - run your server and access index.html
