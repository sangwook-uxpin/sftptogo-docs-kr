<a href="https://sftptogo.com/"><img alt="SFTP To Go logo" src="https://sftptogo.com/images/logo.svg" height="80" /></a>

_SFTP To Go: Managed cloud storage as a Service_

*Secure cloud storage with SFTP / FTPS / S3 / HTTP file access designed for smooth and easy data transfer and storage.*

SFTP To Go Documentation
========================

Documentation for [SFTP To Go](https://sftptogo.com).

[![Deploy](https://github.com/crazyantlabs/sftptogo-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/crazyantlabs/sftptogo-docs/actions/workflows/deploy.yml)

# Introduction

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
