import config from 'config';

export default () => {
    return {
        Authorization: `Client-ID ${config.get('imgur.id')}`,
    };
};
