# nightwatchjs-demo
Exploring nightwatch.js

## References
- [NightwatchJS](http://nightwatchjs.org/ "nightwatch")
- [Selenium Standalone Downloads](http://selenium-release.storage.googleapis.com/index.html "selenium standalone")
- [Geckodriver](https://github.com/mozilla/geckodriver/releases "geckodriver")

## Installation Notes
Initially tried Selenium-standalone version 3.6, but found that it won't work with the version of OpenJDK I have installed, `java version "1.7.0_151"`. So I had to roll back to Selenium-standalone 2.53. Rolled back the version of geckodriver to 0.9.0 per nightwatch instructions. Both Selenium-standalone and geckodriver are stored in `bin/`.

Created `reports/` for the generated .xml content.


## Usage
- clone nightwatchjs-demo.
- `npm install`.
- download Selenium-standalone jar appropriate for your local JVM. Store in `bin/`.
- download geckodriver to match your Selenium-standalone version (assuming you want to test Firefox). Store in `bin/`.
- `npm t -s` will run unit, integration, and e2e tests.
