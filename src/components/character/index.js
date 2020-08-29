// @flow
import React from "react";
import './index.css';
import Stastics from '../statistics';
import { TweenLite } from "gsap";

// TODO ideas
// too much light/lack of nutrition makes fungi slow growth
// too much co2 kills fungi
// too much oxygen kills fungi
// levels should affect appearance/rate at which milestones happen

type State = {

};

type Props = {
    age: number
};

class Character extends React.Component<Props, State> {
  svg: any;
  leftEye: any;
  rightEye: any;
  requestId: any;
  mouse: any;
  onMouseMove: any;
  onFrame: any;
  createEye: any;

  constructor(props: any) {
    super(props);

    this.svg = null;
    this.leftEye = null;
    this.rightEye = null;
    this.requestId = null;
    this.mouse = null;
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onFrame = this.onFrame.bind(this);
    this.createEye = this.createEye.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.onMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove(event: SyntheticMouseEvent<T>) {
    this.mouse = this.svg.createSVGPoint();
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;

    if (!this.requestId) {
      this.requestId = requestAnimationFrame(this.onFrame);
    }
  }

  onFrame() {
    var point = this.mouse.matrixTransform(this.svg.getScreenCTM().inverse());

    this.leftEye = this.createEye("#left-eye");
    this.rightEye = this.createEye("#right-eye");
    this.leftEye.rotateTo(point);
    this.rightEye.rotateTo(point);

    this.requestId = null;
  }

  createEye(selector: string) {
    var element = document.querySelector(selector);

    TweenLite.set(element, {
      transformOrigin: "center",
    });

    var bbox = element.getBBox();
    var centerX = bbox.x + bbox.width / 2;
    var centerY = bbox.y + bbox.height / 2;

    function rotateTo(point: any) {
      var dx = point.x - centerX;
      var dy = point.y - centerY;

      var angle = Math.atan2(dy, dx);

      TweenLite.to(element, 0.3, {
        rotation: angle + "_rad_short",
      });
    }

    return {
      element: element,
      rotateTo: rotateTo,
    };
  }

  render() {
    return (
      <div className="Character">
        <Stastics age={this.props.age} />
        i'm a funguy
        <svg
          id="svg"
          viewBox="0 0 1000 1000"
          ref={(element) => {
            this.svg = element;
          }}
        >
          <g
            id="left-eye"
            ref={(element) => {
              this.leftEye = element;
            }}
          >
            <circle className="eye-outer" cx="400" cy="500" r="100" />
            <circle className="eye-inner" cx="480" cy="500" r="20" />
          </g>

          <g
            id="right-eye"
            ref={(element) => {
              this.rightEye = element;
            }}
          >
            <circle className="eye-outer" cx="600" cy="500" r="100" />
            <circle className="eye-inner" cx="680" cy="500" r="20" />
          </g>
        </svg>
      </div>
    );
  }
}

export default Character;
