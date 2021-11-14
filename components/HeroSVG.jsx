import * as d3 from 'd3'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function makeDraggable(comp) {
  let translateX = 0;
  let translateY = 0;
  
  const handleDrag = d3.drag().subject(function() {
    const me = d3.select(this);
    return { x: translateX, y: translateY };
  })
  .on('drag', function() {
    const me = d3.select(this);
    const transform = `translate(${d3.event.x}, ${d3.event.y})`; 
    translateX = d3.event.x;
    translateY = d3.event.y;
    me.attr('transform', transform);
  });
  const node = ReactDOM.findDOMNode(comp);
  handleDrag(d3.select(node));
}

class Group extends React.Component {
  componentDidMount() {
    makeDraggable(this);
  }
  render() {
    return <g {...this.props} />
  }
}

class Circle extends React.Component {
  render() {
    return <circle {...this.props} />
  }
}

class Rect extends React.Component {
  render() {
    return <rect {...this.props} />
  }
}

class Path extends React.Component {
  render() {
    return <path {...this.props} />
  }
}

export default class HeroSVG extends Component {
    render() {
        return (
            <svg width="367" height="367" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/" className="hero__avatar--me">
              <g className="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                  <path fill="var(--powder-blue)" opacity="0.2" d="M50.8,-50.5C64.1,-37.4,72,-18.7,68.6,-3.4C65.2,11.9,50.4,23.8,37.1,32.7C23.8,41.6,11.9,47.5,-1.1,48.6C-14.2,49.7,-28.4,46.1,-38.4,37.3C-48.4,28.4,-54.2,14.2,-55.6,-1.5C-57.1,-17.1,-54.2,-34.2,-44.2,-47.2C-34.2,-60.2,-17.1,-69.2,0.8,-70C18.7,-70.8,37.4,-63.5,50.8,-50.5Z" transform="translate(450 520) scale(6.5)" />
                  <rect className="cls-3" x="792.97" y="788.8" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-4" x="806.58" y="749.29" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-3" x="792.97" y="709.78" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-4" x="809.21" y="670.27" width="168.8" height="39.51" rx="8.34"></rect>
                  <path className="cls-5" d="M361.83,303c-85.75,0-124.46,91.79-164.63,196.94S160.32,718.34,215,778.27s108.87,57.29,244.75,57.29h326.2c85.61,0,108.66-138,80.34-209.94s-96.81-97.39-161.34-122.19S541,303,361.83,303Z"></path>
                  <path className="cls-6" d="M704.93,503.43c-18.51-7.11-39.89-26.63-65.2-50.85v383h146.2c85.61,0,108.66-138,80.34-209.94S769.46,528.23,704.93,503.43Z"></path>
                  <path className="cls-6" d="M215,778.27c54.65,59.93,108.87,57.29,244.75,57.29h22.65C462.59,770.8,405.17,622.2,282.15,564.24a274.5,274.5,0,0,1,45.19,126.22c3.39,33.85-37.47,53.6-61.77,29.79C176.49,633,197.2,499.93,197.2,499.93,157,605.07,160.32,718.34,215,778.27Z"></path>
                  <path className="cls-7" d="M599.84,265.32c21.16,14.8,45.7,38.51,55.09,61.05s8.22,38.34-7.3,40.68S597,363,597,363Z"></path>
                  <path className="cls-8" d="M599.84,265.32c21.16,14.8,45.7,38.51,55.09,61.05s8.22,38.34-7.3,40.68S597,363,597,363Z"></path>
                  <rect className="cls-7" x="427.92" y="467.22" width="169.08" height="32.71"></rect>
                  <path className="cls-2" d="M242.85,551.73s42.59-51.8,109.32-51.8H613S751.68,591.24,800.41,662.8c34.17,50.18,53.66,115.46,62.41,164.53,2.45,13.7,7.44,29,17.79,39.55a7,7,0,0,1-4.94,11.92H430.32s-60.64-29-78.39-111.07S320.56,593.44,242.85,551.73Z"></path>
                  <path className="cls-9" d="M797.88,659.18C774.07,625.92,732,588.87,694,558.88L524.41,596.8S679.45,611.22,797.88,659.18Z"></path>
                  <path className="cls-10" d="M731.72,596.8H524.41L435.84,514a8.13,8.13,0,0,1,5.55-14.06h228.2l73.31,68.55C753.75,578.62,746.57,596.8,731.72,596.8Z"></path>
                  <path className="cls-7" d="M352.17,499.93s-4.83-53.56,28.54-128.64,62.34-122.92,94.83-128.19S559,229.93,598,263.73s38.78,59.42,38.49,80.2-6.63,45.36,0,57.66,22.78,15.51,17.22,40.09-17.27,49.76-77,53.56-73.37-9.36-73.37-9.36v14.05Z"></path>
                  <ellipse className="cls-4" cx="533.71" cy="392.59" rx="44.12" ry="38.63"></ellipse>
                  <ellipse className="cls-4" cx="626.78" cy="392.59" rx="39.73" ry="38.63"></ellipse>
                  <path className="cls-7" d="M490.79,240.77c-25.57,1-50.16.57-64.64,13.08s-63.22,56.42-61,81.66,39.08,33.59,61.25,28.1,34-57.51,53.78-73.76C489.37,260,490.79,240.77,490.79,240.77Z"></path>
                  <path className="cls-8" d="M503.43,485.88c-21.6-8.32-42.38-30.73-48.53-50.49C435.15,483.57,469,499.93,469,499.93H580.46l-5.25-5.25S533.08,497.29,503.43,485.88Z"></path>
                  <path className="cls-11 laptop" d="M763,596.8H524.41l66.72-135.08a15,15,0,0,1,13.41-8.33H833.73a6.4,6.4,0,0,1,5.74,9.23L777.7,587.68A16.37,16.37,0,0,1,763,596.8Z"></path>
                  <path className="cls-7 paw" d="M427.92,499.66s1.54-16,26.08-21.56,46.42-1.82,59.59,8.89,24.21,32.92,20.25,42.8-28.64,15.48-43.62,3.13-46.43-33.26-46.43-33.26Z"></path>
                  <path className="cls-12" d="M606.15,431.33c0,7.15-9.34,12.95-20.86,12.95s-20.85-5.8-20.85-12.95,9.34-10,20.85-10S606.15,424.18,606.15,431.33Z"></path>
                  <circle className="cls-12" id="eyeLeft" cx="536.84" cy="398.35" r="8.18"></circle>
                  <circle className="cls-12" id="eyeRight" cx="614.32" cy="398.35" r="8.18"></circle>
                  <path className="cls-13 paw--stroke" d="M441,480s44.34-24.58,83.41,13.43"></path>
                  <path className="cls-13" d="M386.41,362.51c9.44,3.73,29.93,5.93,43.06,0s14.68-33.58,30.26-48.95"></path>
                  <path className="cls-14" d="M576.63,401.52a34,34,0,0,0,1.2-8.93c0-21.34-19.75-38.64-44.12-38.64a49.88,49.88,0,0,0-9.48.91Z"></path>
                  <path className="cls-14" d="M626.78,354a40.76,40.76,0,0,0-7.29.66L666.11,398a37.52,37.52,0,0,0,.4-5.43C666.51,371.25,648.72,354,626.78,354Z"></path>
                  <path className="cls-15" d="M375.71,383.08c-27.86,68.83-23.54,116.85-23.54,116.85h70.9C358.8,460.44,375.68,383.2,375.71,383.08Z"></path>
                  <ellipse className="cls-10" cx="691.54" cy="522.87" rx="17.34" ry="12.18" transform="translate(-28.12 39.44) rotate(-3.2)"></ellipse>
                  <path className="cls-9" d="M339.73,711.19c4.38,18.89,8.18,38,12.2,56.54,17.75,82.1,78.39,111.07,78.39,111.07H663.44C405.52,848.32,339.84,711.43,339.73,711.19Z"></path>
                  <rect className="cls-4" x="99.73" y="788.8" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-3" x="113.34" y="749.29" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-4" x="99.73" y="709.78" width="168.8" height="39.51" rx="8.34"></rect>
                  <rect className="cls-3" x="115.98" y="670.27" width="168.8" height="39.51" rx="8.34"></rect>
                  <Group>
                    <g id="envelope" className="envelope">
                      <rect className="cls-4" x="713.27" y="320.61" width="106.9" height="71.17" rx="7.9"></rect>
                      <path className="cls-11" d="M772,361.57l47.07-37.5a7.28,7.28,0,0,0-6.21-3.46H720.58a7.28,7.28,0,0,0-6.2,3.46l47.07,37.5A8.48,8.48,0,0,0,772,361.57Z"></path>
                    </g>
                  </Group>
                  {/* <g id="calendar" className="calendar">
                    <rect className="cls-3" x="849.91" y="241.81" width="90.88" height="85.17" rx="7.9"></rect>
                    <path className="cls-16" d="M932.89,241.81H857.82a7.91,7.91,0,0,0-7.91,7.9v14.93h90.88V249.71A7.9,7.9,0,0,0,932.89,241.81Z"></path>
                    <path className="cls-11" d="M885.49,275.33c-6.88,0-12.45,7.64-12.45,17.07s5.57,17.06,12.45,17.06S898,301.82,898,292.4,892.37,275.33,885.49,275.33Zm0,24.95c-2.84,0-5.14-3.53-5.14-7.88s2.3-7.89,5.14-7.89,5.15,3.53,5.15,7.89S888.34,300.28,885.49,300.28Z"></path>
                    <rect className="cls-11" x="902.93" y="275.33" width="7.61" height="34.13" rx="1.63"></rect>
                  </g> */}
                  <Group>
                    <g id="calendar" className="calendar">
                      <Rect className="cls-3" x={849.91} y={241.81} width={90.88} height={85.17} rx={7.9} />
                      <path className="cls-16" d="M932.89,241.81H857.82a7.91,7.91,0,0,0-7.91,7.9v14.93h90.88V249.71A7.9,7.9,0,0,0,932.89,241.81Z"></path>
                      <path className="cls-11" d="M885.49,275.33c-6.88,0-12.45,7.64-12.45,17.07s5.57,17.06,12.45,17.06S898,301.82,898,292.4,892.37,275.33,885.49,275.33Zm0,24.95c-2.84,0-5.14-3.53-5.14-7.88s2.3-7.89,5.14-7.89,5.15,3.53,5.15,7.89S888.34,300.28,885.49,300.28Z"></path>
                      <Rect className="cls-11" x={902.93} y={275.33} width={7.61} height={34.13} rx={1.63} />
                    </g>
                  </Group>
                  <Group>
                    <g id="note" className="note">
                      <path className="cls-5" d="M960.66,377.88a7,7,0,0,0-7-7H876.8a7,7,0,0,0-7,7V449a7,7,0,0,0,7,7h57a11.48,11.48,0,0,0,8.33-3.59l15.43-16.33a11.43,11.43,0,0,0,3.13-7.86Z"></path>
                      <path className="cls-17" d="M937,435.08v20.48a11.48,11.48,0,0,0,5.08-3.11l15.43-16.33a11.44,11.44,0,0,0,3-6.22H942.2A5.18,5.18,0,0,0,937,435.08Z"></path>
                      <rect className="cls-17" x="891.84" y="393.35" width="46.76" height="9.33" rx="1.92"></rect>
                      <rect className="cls-17" x="891.84" y="413.45" width="46.76" height="9.33" rx="1.92"></rect>
                    </g>
                  </Group>
                </g>
              </g>
            </svg>
        )
    }
}
