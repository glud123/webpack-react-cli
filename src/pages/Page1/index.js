import React from "react";
import { Link } from "react-router-dom";
class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Page1
                <Link to="/">首页</Link>
            </div>
        );
    }
}
export default Page1;
