
<a name="0.4.0"></a>
# [0.4.0](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/compare/diff?targetBranch=refs%2Ftags%2F0.3.1&sourceBranch=refs%2Ftags%2F0.4.0) (2021-11-05)


### Chores


* Introduce dependabot configuration for automated deps updates ([0cf893d](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/0cf893d))
* Remove prepare script before publishing package ([ac4b6a9](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/ac4b6a9))
* Rename pr-labeler config file to use yaml extension everywhere ([796bf2c](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/796bf2c))
* Use .yarnrc instead of .npmrc because we are using yarn ([66b2d5e](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/66b2d5e))
### Dependencies


* Bump @lmc-eu/conventional-changelog-lmc-bitbucket ([2e17ebd](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/2e17ebd))
### Features


* Introduce new design connected to Spirit design tokens [#CCM-7](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-7) ([658c99f](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/658c99f))

<a name="0.3.1"></a>
## [0.3.1](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/compare/diff?targetBranch=refs%2Ftags%2F0.3.0&sourceBranch=refs%2Ftags%2F0.3.1) (2021-11-04)


### Chores


* Automatically replace package version in readme file to current ([97454e1](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/97454e1))
* Disable commit message hook with CI env ([3b0e0b9](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/3b0e0b9))
* Disable prepare script with commitlint on CI publish ([4886281](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4886281))
* Introduce contributors array to display package authors ([e2c3c4f](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/e2c3c4f))
* Introduce keywords to display on package page ([d8a3568](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/d8a3568))
* Introduce PR labelling ([4f8e67d](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4f8e67d))
* Introduce release action which is triggered manually ([97c00f0](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/97c00f0))
* Omit version prefix from replacing jsdelivr urls in readme ([704332b](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/704332b))
* Run publish only on tagged refs without any prefix ([534caf3](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/534caf3))
* Set git tag version to plain semver string without prefix ([6f7c069](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/6f7c069))

<a name="0.3.0"></a>
# [0.3.0](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/compare/diff?targetBranch=refs%2Ftags%2F0.2.0&sourceBranch=refs%2Ftags%2F0.3.0) (2021-11-02)


### Chores


* Create release on local machine and publish by ci pipeline [#CCM-8](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-8) ([4ed90f9](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4ed90f9))
* Introduce publish package pipeline [#CCM-8](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-8) ([ac0a5aa](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/ac0a5aa))
### Code Refactoring


* Rearrange and document internal defaults ([5b6c8e6](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/5b6c8e6))
### Dependencies


* Bump all dependencies ([9b1b90c](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/9b1b90c))
### Documentation


* Extend description of necessary consent ([a0ec0de](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/a0ec0de))
* How to publish this package [#CCM-8](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-8) ([7672f5e](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/7672f5e))
### Features


* Add 'ad' consent category [#CCM-12](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-12) ([5777638](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/5777638))
* Enable management of third-party scripts ([0020661](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/0020661))

<a name="0.2.0"></a>
# [0.2.0](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/compare/diff?targetBranch=refs%2Ftags%2F0.1.0&sourceBranch=refs%2Ftags%2F0.2.0) (2021-11-01)


### Bug Fixes


* Incomplete options passed by user overrides all defaults ([68f8dcb](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/68f8dcb))
### Chores


* Add repository URL to make it shown also on npmjs.com ([66947d6](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/66947d6))
* Block fixup commit message using github action ([1a43014](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/1a43014))
* Generate changelog using conventional changelog ([dddacfc](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/dddacfc))
* Introduce commit linting ([d8238c3](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/d8238c3))
* Introduce simple dev server for local development [#CCM-5](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-5) ([84c3245](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/84c3245))
* Make package publishlable ([effcd7a](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/effcd7a))
* Rename `dev` script to more common `start` ([bb6bd54](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/bb6bd54))
* Run all check with single npm script ([fee171a](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/fee171a))
* Use usernames instead of names for codeowners ([5cd5eba](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/5cd5eba))
### Code Refactoring


* Unify variable casing to camelCase ([3f1367e](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/3f1367e))
### Documentation


* Add development and contributing section [#CCM-20](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-20) ([4bc165d](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4bc165d))
* Extend and rearrange README [#CCM-20](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-20) ([2260342](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/2260342))
* Fix another typo in cdn path ([185d9f8](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/185d9f8))
* Fix typo in cdn path ([33ea2ec](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/33ea2ec))
* Introduce badges to make readme look more cool ([8e08301](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/8e08301))
* Mark config arguments optional in jsdoc ([10e48b2](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/10e48b2))
* Remove autoload script, extend default example [#CCM-20](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-20) ([a85c7b3](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/a85c7b3))
* Rename docs to examples [#CCM-20](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-20) ([32a0c39](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/32a0c39))
### Features


* Add callbacks for all onAccept scenarios [#CCM-24](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-24) ([23314b5](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/23314b5))
* Add custom onAccept callback to extend the default one [#CCM-19](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-19) ([8ed95ba](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/8ed95ba))
* Add translations for cs, en, sk and pl language [#CCM-10](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-10) ([1743866](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/1743866))
* Configure consent levels [#CCM-12](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-12) ([703cf98](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/703cf98))
* Configure plugin defaults ([bd6309f](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/bd6309f))
* Make language autodetection easily configurable [#CCM-26](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-26) ([4404a9a](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4404a9a))
* Provide cookieConsent instance to callbacks [#CCM-24](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-24) ([9232b09](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/9232b09))
* Push info to dataLayer on accept ([4203092](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/4203092))
* Rename default language settings to defaultLang to make it more understandable [#CCM-26](https://github.com/lmc-eu/cookie-consent-manager/issues/CCM-26) ([6635813](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/6635813))
* Return CookieConsent instance from the init function ([b217059](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/b217059))
* Save distribution files for instant usage and examples ([d9964f3](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/d9964f3))

<a name="0.1.0"></a>
# [0.1.0](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/compare/diff?targetBranch=refs%2Ftags%2F19ff586&sourceBranch=refs%2Ftags%2F0.1.0) (2021-10-19)


### Chores


* Build package using ESbuild ([19ff586](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/19ff586))
* Introduce prettier and reformat files using default lmc config ([8c433a2](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/8c433a2))
* Lint css using github action ([2b7f4dd](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/2b7f4dd))
### Code Refactoring


* Build and rename distribution files ([bdb0f89](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/bdb0f89))
### Dependencies


* Bump sass to 1.43.2 ([63e57e3](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/63e57e3))
### Documentation


* Documentation of usage and configuration ([6db08fa](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/6db08fa))
### Features


* Initial configuration for cookie consent ([38a4221](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/38a4221))
* Introduce support for czech language ([ca547eb](https://github.com/projects/lmc-eu/repos/cookie-consent-manager/commits/ca547eb))