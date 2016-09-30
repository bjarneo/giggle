Giggle
======

This is an example of how to write an basic application based on [ROC](https://github.com/rocjs/roc) and [roc-package-web-app-react](https://github.com/rocjs/roc-package-web-app-react).

To test this application you need to create a client at imgur.com.
`https://api.imgur.com/oauth2/addclient`

Add the `client id` and `client secret` to `config/default.json`.

![Screenshot](https://i.imgur.com/sEnRDDk.png)

Get up and running
------
Remember to rename `default.json.dist` file to `default.json`
```bash
$ mv config/default.json.dist config/default.json
```

```bash
$ npm install
```

Development
```bash
$ npm run dev
```

Production
```bash
$ npm run build
$ npm start
```

Docker
------
```bash
$ npm run docker-build
$ npm run docker-run
```
Now run `npm start` from within the docker instance

License
------
MIT-licensed. See LICENSE.
