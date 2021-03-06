import React, { Component } from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import utilsCss from "tion2/components/common/utils";
import exit from "./exit.svg";
import css from "./css";

export class MyComponent extends Component {
  onCloseClick = () => {
    if (this.props.app.view === "page") {
      this.props.dispatch({ type: "EXIT_CONTENT_CLICK" });
    } else if (this.props.interviews.selectedInterviewId) {
      this.props.dispatch({
        type: "EXIT_INTERVIEW_CLICK",
        eggId: this.props.eggs.selectedEggId,
        originId: this.props.origins.selectedOriginId
      });
    } else if (this.props.eggs.selectedEggId) {
      this.props.dispatch({
        type: "EXIT_EGG_CLICK",
        originId: this.props.origins.selectedOriginId
      });
    } else if (this.props.origins.selectedOriginId) {
      this.props.dispatch({ type: "EXIT_ORIGIN_CLICK" });
    }
  };
  render() {
    const exitClass = classnames(utilsCss.pointable, css.exit, {
      [css.visible]: (this.props.origins.selectedOriginId &&
        this.props.exploration.mode === "interactive") ||
        (this.props.app.view === "page" &&
          this.props.pages.selectedPage !== "tourEnd")
    });
    return (
      <div
        onClick={this.onCloseClick}
        className={exitClass}
        dangerouslySetInnerHTML={{ __html: exit }}
      />
    );
  }
}
const mapStateToProps = state => ({
  app: state.app,
  pages: state.pages,
  eggs: state.eggs,
  interviews: state.interviews,
  exploration: state.exploration,
  origins: state.origins
});

export default connect(mapStateToProps)(MyComponent);
