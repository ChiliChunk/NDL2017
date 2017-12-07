import React, { Component } from 'react';

class Logo extends Component {
//const Logo = () => (
    render() {
        return (
            <div id="svg-logo">
                <svg viewBox="0 0 550 180" width={this.props.width} height={this.props.height} >
                    <path
                        id="logo-id"
                        style={{fill:"#7BCBE6"}}
                        d="M3.6,93.4c6.1,0,12.2,0.1,18.3,0.1c6.1,0,6.8-0.4,6.9-6.4c0.2-9.7,1.6-19.1,4.8-28.2C40,40.8,52.1,24.6,68.3,14.2c26.1-16.7,61.4-17.7,88.4-2.4c16.2,9.2,29,24,36.4,41.1c17.3,39.9,1.3,89.1-37.1,110c-24.1,13.1-54.8,13.3-79.2,0.6c-26.9-14.1-39.2-41.5-61.6-60.4C11.3,99.8,7.5,96.6,3.6,93.4z"/>
                    <path
                        id="logo-id-6"
                        style={{fill:"#61B565"}}
                        d="M201.5,15.6C203.8,7.2,209,1,220.7,1c13,0,26,0,39,0c45.1,0,90.2,0.1,135.3,0.1c40.9,0,81.8,0.1,122.7,0.1c7.8,0,15.5,0,23.3,0c0,0-24.1,23.4-24.1,23.4c0,38.1,0,76.1,0,114.2c0,16.1-1.1,33.6-21.3,34.1c-24.6,0.6-49.3,0-73.9,0c-47.8,0-95.7,0-143.5,0c-15.5,0-30.9,0-46.4,0c-8,0-17.7,1-24.6-4c-10.4-7.5-7.4-22.4-7.4-33.5c0-30.8,0-61.5,0-92.3C199.8,34.6,199.2,24,201.5,15.6z"/>
                    <path
                        id="logo-id-4"
                        style={{fill:"#FFFFFF"}}
                        d="M142.2,74.2c0.2,0.1,0.7,0.2,2.4-0.8c1.3-0.8,2.2-1.6,2.3-1.7c0.4-0.4,1.9-1.1,4.4-3c1.7-1.3,4.3-3,7.8-4.7c-8.5-14-23.6-23.5-40.1-23.6c-16.2-0.2-32.2,8.8-40.5,22.8s-8.6,32.3-0.7,46.5s23.6,23.6,39.9,23.9c9.1,0.2,18.2-2.6,25.9-7.4c3.9-2.5,7.5-5.5,10.5-9c0.8-1,4.2-4.3,4.1-5.6c-0.1-1-1.4-1.6-3.3-2.7c-1.3-0.7-1.6-0.7-3.2-1.6c-0.5-0.3-1.2-0.7-2.6-1.7c-2.1-1.4-2.2-1.5-3-2c-1.3-0.8-1.1-0.5-2.6-1.3c-1.1-0.6-1.5-1-2.1-0.8c-0.3,0.1-0.5,0.3-1.2,1.3c-0.7,1-1,1.5-1.2,1.8c-0.9,1.5-2.3,2.9-3.2,3.8c-2.7,2.6-6.4,3.8-7.5,4.3c-5.6,2.1-12,2.2-17.6,0.1c-11.1-4.2-18.4-16.3-17.6-28.1c0.7-11.4,9-22.2,20-25c5.7-1.5,11.8-0.6,17,1.9c1.8,0.9,5.1,2.5,7.3,5.5c1,1.3,1.8,2.1,2.4,3.5c0.1,0.2,0.4,0.9,0.9,1.8C141.3,73.5,141.7,74,142.2,74.2z"/>
                    <path id="logo-id-8" style={{fill:"#FFFFFF"}} d="M238.2,40.2v92.3h12c0,0,12.5,0,12.5,0c3.1,0,6.5,0.4,9.6,0.1c4.3-0.4,9-2.8,12.8-4.8
                        c8.1-4.5,15-11.3,19.3-19.6c6.6-12.7,7.1-28.5,1.2-41.5c-5.5-12.3-19.3-26.1-33.6-26.5c-9.9-0.3-19.8,0-29.6,0
                        C240.9,40.2,239.5,40.2,238.2,40.2z"/>
                    <path id="logo-id-9" style={{fill:"#5DB565"}} d="M257.2,56.1c0,20.1,0.3,40.2,0,60.3c4-0.2,8,0.6,12.2-0.4c4.6-1.1,8.9-3.5,12.3-6.9
                        c5.9-5.9,8.9-14.5,8.9-22.8c0-8.3-2.9-16.8-8.8-22.8c-6.9-6.9-17.6-7.1-20.8-7.3c-0.8-0.1-1.5-0.1-1.9-0.1"/>
                    <path id="logo-id-7" style={{fill:"#FFFFFF"}} d="M315.5,40.2c5.8,0,11.6,0.1,17.5,0.1c0,30.9-0.1,61.7-0.1,92.6c-5.8,0-11.6,0-17.4,0
                        C315.5,101.9,315.5,71,315.5,40.2z"/>
                    <path id="logo-id-10" style={{fill:"#FFFFFF"}} d="M343,39.9c16.1,0,32.2,0,48.3,0.1c0,5.4,0,10.7,0,16.1c-10,0-20.1,0-30.1,0v19.6
                        c9.5,0,19-0.1,28.5-0.1c0,5.5,0,11.1,0,16.6c-9.4,0-18.7,0-28.1,0c0,8.2,0,16.5,0,24.7c9.8,0,19.6,0.1,29.4,0.1v16.4
                        c-16,0-32,0-48-0.1C342.9,102.2,342.9,71.1,343,39.9z"/>
                    <path id="logo-id-11" style={{fill:"#FFFFFF"}} d="M393,39.9c18.5,0,37,0,55.6,0c0,5.4,0,10.9,0,16.3c-6.2,0-12.4,0-18.7,0c0,25.9,0,51.8,0,77.7
                        c-6.3,0-12.6,0-18.9,0c0-26,0-52.1,0-78.1c-6,0-12,0-18,0C393,50.5,393,45.2,393,39.9z"/>
                    <path id="logo-id-12" style={{fill:"#FFFFFF"}} d="M456.5,39.9c5.8,0,11.6,0,17.3,0c0,22.1,0,44.2,0,66.3h-17.4V39.9z"/>
                    <ellipse id="logo-id-13" style={{fill:"#FFFFFF"}} cx="465.6" cy="124.4" rx="11.2" ry="11.1"/>
                </svg>
            </div>
        );
    }
}

export default  Logo;
