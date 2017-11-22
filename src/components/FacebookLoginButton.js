/**
 * Created by piotr.pozniak@thebeaverhead.com on 10/07/2017.
 */

import React from "react";
import FacebookIcon from "./FacebookIcon";


export default class FacebookLoginButton extends React.Component {

  constructor(props) {
    super(props);
  }

  /**
   *
   * @constructor
   */
  FBLoginDialog() {

    this.props.onStartLoading();

    FB.login((response) => {

      if (response.status == "connected" && this.props.onSuccess) {
        this.props.onSuccess('facebook', response);

      } else if (response.status != "connected" && this.props.onFail) {

        this.props.onFail('facebook', response);
      }
    }, {scope: this.props.scope});
  }

  /**
   *
   * @constructor
   */
  render () {

    return (
      <button
        className={this.props.btnClass}
        disabled={this.props.inactive}
        onClick={() => this.FBLoginDialog()}
      >
        <FacebookIcon />
        <span>
          {this.props.label}
        </span>
      </button>
    )
  }
};