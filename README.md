# Fœhn

Fœhn (*føn*) is the design system build for [the website of the State of Vaud](http://www.vd.ch/).

[Take a look at the documentation](http://dsi-vd.github.io/foehn/).

## Issues

If you don't like the [usual issues view](https://github.com/DSI-VD/foehn/issues), we have [a Waffle board view](https://waffle.io/DSI-VD/foehn).  
[![Stories in Progress](https://badge.waffle.io/DSI-VD/foehn.png?label=Ready)](https://waffle.io/DSI-VD/foehn)

## Build tools

[Fabricator](http://fbrctr.github.io/) is used to build fœhn.

## Quick Start

```shell
$ git clone https://github.com/vdch/foehn.git
$ cd foehn
$ npm start
```

## Versioning

The project use [Semantic Versioning](http://semver.org/).

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

### How to bump version ?

To bump version use the following commands **only after the changed have been merged on the master** ([more info](https://docs.npmjs.com/cli/version)):

- PATCH: `$ npm version patch -m "Upgrade to %s for reasons"`
- MINOR: `$ npm version minor -m "Upgrade to %s for reasons"`
- MAJOR: `$ npm version major -m "Upgrade to %s for reasons"`
