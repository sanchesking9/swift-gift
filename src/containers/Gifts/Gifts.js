import React, { Component } from 'react';
import { GiftsWrapper } from './styles';
import { getCategories } from '../../actions/categories';
import { connect } from 'react-redux';
import { Gift } from '../../components';

export class Gifts extends Component {
    componentDidMount() {
        this.props.getCategories('/data.json');
    }
    render() {
        const { categories } = this.props;
        return <GiftsWrapper>
            {categories.list.map((item, index) => <Gift key={index} data={item} />)}
        </GiftsWrapper>;
    }
}

export default connect(({categories}) => {
    return {categories};
}, {getCategories})(Gifts);
