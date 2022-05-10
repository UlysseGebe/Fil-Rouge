import React from "react";
import sphereAnimationThree from "./sphereAnimationThree";
import "./style.scss";

class SphereThree extends React.Component {
  componentDidMount() {
    sphereAnimationThree(this.props.index);
  }

  render() {
    return (
      <div className="animation-wrapper">
        <div className="sphere-animation" index={this.props.index} >
          <svg className="sphere" viewBox="0 0 440 440" stroke="rgba(80,80,80,.35)">
            <defs>
              <linearGradient
                id="sphereGradient"
                x1="5%"
                x2="5%"
                y1="0%"
                y2="15%"
              >
                <stop stopColor="#373734" offset="0%" />
                <stop stopColor="#242423" offset="50%" />
                <stop stopColor="#0D0D0C" offset="100%" />
              </linearGradient>
            </defs>
            <path d="M268 12.66C300.51 24.25 323.58 42.87 319.53 54.25C315.47 65.63 285.83 65.46 253.31 53.87C220.8 42.28 197.73 23.66 201.78 12.28C205.84 0.899986 235.48 1.06996 268 12.66V12.66Z" fill="black"/>
            <path d="M267.58 13.84C315.38 30.87 349.24 58.39 343.21 75.3C337.18 92.21 293.55 92.1 245.76 75.07C197.96 58.03 164.1 30.52 170.13 13.61C176.16 -3.30002 219.79 -3.19001 267.58 13.84Z" fill="black"/>
            <path d="M265.91 18.55C325.74 39.87 368.03 74.56 360.39 96.01C352.74 117.47 298.04 117.58 238.22 96.26C178.39 74.94 136.09 40.25 143.74 18.8C151.39 -2.66002 206.09 -2.77003 265.91 18.55Z" fill="black"/>
            <path d="M262.97 26.79C333.85 52.05 384.08 92.83 375.15 117.87C366.23 142.91 301.53 142.72 230.65 117.46C159.77 92.2 109.54 51.42 118.47 26.38C127.39 1.33996 192.09 1.52996 262.97 26.79Z" fill="black"/>
            <path d="M259.19 37.39C338.85 65.78 395.35 111.46 385.38 139.43C375.41 167.39 302.76 167.04 223.1 138.65C143.44 110.26 86.94 64.57 96.91 36.61C106.88 8.64998 179.53 8.99997 259.19 37.39Z" fill="black"/>
            <path d="M255.2 48.57C342.02 79.51 403.51 129.51 392.56 160.23C381.61 190.96 302.36 190.78 215.54 159.84C128.73 128.9 67.23 78.91 78.18 48.18C89.13 17.45 168.38 17.63 255.2 48.57V48.57Z" fill="black"/>
            <path d="M250.59 61.52C343.58 94.67 409.47 148.16 397.77 181C386.07 213.84 301.19 213.59 208.2 180.45C115.21 147.31 49.3099 93.82 61.0199 60.98C72.7299 28.14 157.6 28.39 250.59 61.53L250.59 61.52Z" fill="black"/>
            <path d="M244.92 77.42C342.46 112.19 411.58 168.31 399.3 202.77C387.02 237.23 297.98 236.99 200.44 202.22C102.9 167.45 33.7799 111.33 46.0699 76.86C58.3499 42.39 147.39 42.64 244.93 77.41L244.92 77.42Z" fill="black"/>
            <path d="M238.84 94.49C339.96 130.53 411.64 188.61 398.95 224.22C386.26 259.82 294 259.47 192.88 223.43C91.76 187.39 20.07 129.31 32.76 93.71C45.45 58.11 137.71 58.46 238.83 94.5L238.84 94.49Z" fill="black"/>
            <path d="M231.49 115.1C334.89 151.95 408.37 210.82 395.62 246.58C382.87 282.34 288.72 281.46 185.33 244.61C81.9299 207.76 8.44994 148.89 21.1999 113.12C33.9499 77.35 128.1 78.23 231.5 115.09L231.49 115.1Z" fill="black"/>
            <path d="M223.35 136.08C327.39 173.17 401.41 232.22 388.66 267.99C375.91 303.76 281.23 302.69 177.19 265.6C73.1499 228.52 -0.870098 169.46 11.8799 133.69C24.6299 97.92 119.31 98.99 223.35 136.08V136.08Z" fill="black"/>
            <path d="M216.38 157.49C319.78 194.34 393.26 253.21 380.52 288.97C367.77 324.74 273.62 323.86 170.22 287C66.83 250.15 -6.65998 191.28 6.09001 155.51C18.84 119.74 112.99 120.63 216.38 157.48L216.38 157.49Z" fill="black"/>
            <path d="M208.83 178.68C309.95 214.72 381.64 272.8 368.95 308.4C356.26 344 264 343.65 162.88 307.61C61.7599 271.57 -9.93011 213.49 2.76988 177.89C15.4599 142.29 107.72 142.64 208.84 178.68L208.83 178.68Z" fill="black"/>
            <path d="M201.28 199.87C298.82 234.64 367.94 290.76 355.65 325.23C343.37 359.7 254.33 359.45 156.79 324.69C59.25 289.92 -9.87001 233.8 2.40999 199.34C14.69 164.87 103.73 165.12 201.27 199.89L201.28 199.87Z" fill="black"/>
            <path d="M193.72 221.07C286.71 254.21 352.61 307.7 340.9 340.54C329.2 373.38 244.32 373.13 151.33 339.99C58.3399 306.85 -7.56011 253.36 4.14989 220.52C15.8499 187.68 100.73 187.93 193.72 221.07Z" fill="black"/>
            <path d="M186.17 242.26C272.98 273.2 334.48 323.2 323.53 353.92C312.58 384.65 233.33 384.47 146.51 353.53C59.7 322.59 -1.80002 272.6 9.14998 241.87C20.1 211.14 99.35 211.32 186.17 242.26V242.26Z" fill="black"/>
            <path d="M178.61 263.46C258.27 291.85 314.77 337.53 304.81 365.49C294.84 393.45 222.19 393.1 142.53 364.71C62.87 336.32 6.36996 290.63 16.34 262.67C26.31 234.71 98.9599 235.06 178.62 263.45L178.61 263.46Z" fill="black"/>
            <path d="M171.06 284.65C241.94 309.91 292.17 350.69 283.24 375.72C274.32 400.76 209.63 400.58 138.75 375.31C67.8699 350.05 17.6399 309.27 26.5699 284.23C35.4899 259.19 100.19 259.38 171.07 284.64L171.06 284.65Z" fill="black"/>
            <path d="M163.51 305.84C223.34 327.16 265.64 361.85 257.99 383.3C250.34 404.76 195.64 404.87 135.82 383.55C75.9899 362.23 33.6999 327.55 41.3399 306.09C48.9899 284.63 103.69 284.52 163.51 305.84Z" fill="black"/>
            <path d="M155.95 327.04C203.75 344.08 237.61 371.59 231.58 388.5C225.55 405.41 181.92 405.3 134.13 388.27C86.33 371.23 52.47 343.72 58.5 326.81C64.53 309.9 108.16 310.01 155.95 327.04Z" fill="black"/>
            <path d="M148.4 348.23C180.91 359.82 203.98 378.44 199.93 389.82C195.87 401.2 166.22 401.03 133.71 389.44C101.2 377.85 78.12 359.23 82.18 347.85C86.24 336.47 115.88 336.64 148.4 348.23V348.23Z" fill="black"/>
          </svg>
        </div>
      </div>

  );
  }

}

export default SphereThree;

