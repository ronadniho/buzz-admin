import * as React from "react";
import Header from "./header";
import cdn from "./cdn";

export default class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet"
                      href="/css/semantic.min.css"></link>
                <link rel="stylesheet" href={cdn("/css/react-big-calendar.css")}></link>
            </head>
            <body>
            <Header title={this.props.title} path={this.props.path}/>
            {this.props.children}
            <script src={cdn("/js/bundle.js")}></script>
            </body>
            </html>
        )
            ;
    }
}