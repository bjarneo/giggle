import { appConfig } from 'roc-package-web-app-react/app/shared/universal-config';

const {
    host: {
        client,
        server
    }
} = appConfig;

export default () => {
    if (__WEB__) {
        return client;
    }

    return server;
};
