import config from 'config';

export default () => {
    return {
        Authorization: `${config.get('imgur.id')} ${config.get('imgur.secret')}`,
    };
};
