// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestMostViral } from '../../redux/most-viral';
import ImageList from '../../components/image-list';
import LoadMore from '../../components/load-more';
import Loader from '../../components/loader';
import styles from './style.scss';

function mapStateToProps(state) {
    return {
        items: state.mostViral.items,
        initial: state.mostViral.initial,
        fetching: state.mostViral.fetching,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ requestMostViral }, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Start extends Component {
    static propTypes = {
        items: React.PropTypes.array.isRequired,
        requestMostViral: React.PropTypes.func.isRequired,
        initial: React.PropTypes.bool.isRequired,
        fetching: React.PropTypes.bool.isRequired,
    }

    componentWillMount() {
        this.props.requestMostViral();
    }

    render() {
        const isFetching = (!this.props.initial && this.props.fetching);

        return (
            <div className={ styles.main }>
                <ImageList items={this.props.items} />
                { isFetching ? <Loader /> : '' }
                <LoadMore
                  action={this.props.requestMostViral}
                  page={1}
                  isFetching={isFetching}
                />
            </div>
        );
    }
}
