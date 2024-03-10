import React, { Component } from "react";

class TutorialView extends Component {
    componentWillMount = () => {
        this.setState({ contents: this.props.contents });
    };

    componentWillReceiveProps = () => {
        this.setState({ contents: {} });
        setTimeout(() => {
            this.setState({ contents: this.props.contents });
        }, 50);
    };

    updateTopics = () => {
        return (this.state.contents.subtopics || []).map((data, index) => {
            return (
                <>
                    <ReadOnlyEditor content={data.subtopic_contents} />
                </>
            );
        });
    };

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">{this.updateTopics()}</div>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </>
        );
    }
}

export default TutorialView;
