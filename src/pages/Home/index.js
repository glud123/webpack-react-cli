import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTitle } from "Store/Home/action";
import './index.less';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick = () => {
        this.props.updateTitle("首页-修改");
    };
    render() {
        return (
            <div className="home">
                <h1 className='title'>{this.props.title}</h1>
                <Link to="/page1">Page1</Link>
                <button onClick={this.handleClick}>修改标题</button>
            </div>
        );
    }
}
Home.propTypes = {
    title: PropTypes.string.isRequired
};
export default connect(
    state => ({
        title: state.homeData.title
    }),
    { updateTitle }
)(Home);
