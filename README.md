# Basic Authentication

## Summary

### What is Basic Authentication?

Basic Authentication is an authentication method used to identify user that is sending the request to the client.
User credentials are encoded as a base64-encoded string and they are sent through the HTTP header.

### How does it work?

If Authentication Header is not present on the request, server will return a `401` with `WWW-Authenticate: Basic` header that will prompt the user for a username and a password.

When user enters valid username and password, credentials will be in a form of `username:password` encoded into base64-encoded string.

As long as the browser session is active, every request will contain Authentication Header with the value of `Basic <base64_encoded_string>` which will allow the request to access the resources of the server.

### What are Pros and Cons of using Basic Authentication?

This type of Authentication is easy to setup but it is highly insecure.

## Setup

Install Prettier

```
code --install-extension esbenp.prettier-vscode
```

Install dependencies

```
npm install
```

Run server

```
npm run dev
```
