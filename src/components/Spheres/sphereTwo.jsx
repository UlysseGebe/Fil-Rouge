import React, {useState} from "react";
import {useEffect} from "react";
import sphereAnimationTwo from "../../Hooks/sphereAnimationTwo";
import "./style.scss";

export default function SphereTwo() {

    let xPosition;
    let YPosition;
    let sphereScale;

    const [xPos, setxPos] = useState(-17);
    const [yPos, setyPos] = useState(8);
    const [scale, setScale] = useState(1.1);

    useEffect(() => {
        const win = document.querySelector('#Hero');
        win.addEventListener("mousemove", animation);
        sphereAnimationTwo();

    })

    function animation(e) {


        let ratioX = e.clientX / window.innerWidth;
        let ratioY = e.clientY / window.innerWidth;
        let ratio = (ratioX + ratioY);

        xPosition = -17 + (ratioX * 4);
        YPosition = 8 - (ratioY * 4.8);
        sphereScale = 1 - (ratio * 0.1);

        setxPos(xPosition)
        setyPos(YPosition)
        setScale(sphereScale)
    }


    return (
        <div className="animation-wrapper two"
             style={{
                 transform: `scale(${scale}) translate(${xPos}em, ${yPos}em)`,
             }}>
            <div className="sphere-animationTwo">
                <svg
                    className="sphere"
                    viewBox="0 0 440 440"
                    stroke="rgba(80,80,80,.35)"
                >
                    <defs>
                        <linearGradient
                            id="sphereGradient"
                            x1="5%"
                            x2="5%"
                            y1="0%"
                            y2="15%"
                        >
                            <stop stopColor="#363633"/>
                            <stop offset="0.06" stopColor="#020202"/>
                            <stop offset="0.22" stopColor="#0A0A0A"/>
                            <stop offset="0.4" stopColor="#181817"/>
                            <stop offset="0.62" stopColor="#2C2C2A"/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                    <path
                        d="M279.74 23.94C337.6 50.14 376.88 88.2 367.48 108.95C358.08 129.7 303.56 125.29 245.7 99.09C187.84 72.89 148.56 34.83 157.96 14.08C167.36 -6.67 221.88 -2.26 279.74 23.94V23.94Z"
                        fill="url(#paint0_linear_0_1)"
                    />
                    <path
                        d="M276.13 31.91C344.68 62.95 391.36 107.74 380.39 131.95C369.43 156.16 304.97 150.63 236.42 119.58C167.87 88.54 121.19 43.75 132.15 19.54C143.12 -4.66 207.58 0.870001 276.13 31.91Z"
                        fill="url(#paint1_linear_0_1)"
                    />
                    <path
                        d="M271.49 42.16C348.53 77.05 401.05 127.25 388.81 154.29C376.56 181.33 304.19 174.97 227.15 140.09C150.11 105.21 97.58 55 109.83 27.96C122.07 0.919996 194.45 7.28 271.49 42.16Z"
                        fill="url(#paint2_linear_0_1)"
                    />
                    <path
                        d="M266.59 52.98C350.55 91 407.7 145.91 394.24 175.62C380.78 205.33 301.82 198.6 217.86 160.59C133.91 122.57 76.7599 67.66 90.2099 37.95C103.67 8.24 182.63 14.97 266.59 52.98V52.98Z"
                        fill="url(#paint3_linear_0_1)"
                    />
                    <path
                        d="M260.92 65.51C350.85 106.23 412.09 164.99 397.71 196.75C383.33 228.51 298.77 221.24 208.84 180.52C118.91 139.79 57.66 81.03 72.05 49.27C86.43 17.51 170.99 24.78 260.92 65.5V65.51Z"
                        fill="url(#paint4_linear_0_1)"
                    />
                    <path
                        d="M253.96 80.88C348.29 123.6 412.53 185.24 397.43 218.58C382.34 251.91 293.63 244.3 199.3 201.58C104.97 158.86 40.73 97.21 55.82 63.88C70.91 30.55 159.62 38.16 253.95 80.87L253.96 80.88Z"
                        fill="url(#paint5_linear_0_1)"
                    />
                    <path
                        d="M246.48 97.39C344.27 141.67 410.91 205.48 395.32 239.92C379.73 274.35 287.81 266.37 190.02 222.08C92.2301 177.79 25.5901 113.98 41.1801 79.55C56.7701 45.12 148.69 53.11 246.48 97.39V97.39Z"
                        fill="url(#paint6_linear_0_1)"
                    />
                    <path
                        d="M237.46 117.32C337.45 162.6 405.82 227.35 390.15 261.94C374.49 296.53 280.73 287.86 180.74 242.58C80.74 197.29 12.38 132.55 28.04 97.96C43.7 63.37 137.46 72.04 237.45 117.32H237.46Z"
                        fill="url(#paint7_linear_0_1)"
                    />
                    <path
                        d="M227.61 137.55C328.23 183.11 397.1 248.09 381.44 282.68C365.78 317.27 271.51 308.37 170.89 262.81C70.27 217.25 1.38999 152.27 17.06 117.68C32.72 83.09 126.99 91.99 227.61 137.55Z"
                        fill="url(#paint8_linear_0_1)"
                    />
                    <path
                        d="M218.89 158.31C318.88 203.59 387.25 268.34 371.58 302.92C355.92 337.51 262.16 328.84 162.17 283.56C62.18 238.29 -6.17997 173.54 9.48003 138.95C25.14 104.36 118.9 113.03 218.89 158.31Z"
                        fill="url(#paint9_linear_0_1)"
                    />
                    <path
                        d="M209.61 178.81C307.4 223.09 374.04 286.9 358.45 321.33C342.86 355.76 250.94 347.77 153.15 303.49C55.36 259.21 -11.28 195.4 4.32005 160.97C19.91 126.54 111.83 134.53 209.62 178.81H209.61Z"
                        fill="url(#paint10_linear_0_1)"
                    />
                    <path
                        d="M200.33 199.3C294.66 242.02 358.9 303.67 343.81 336.99C328.72 370.32 240.01 362.71 145.68 320C51.34 277.29 -12.89 215.64 2.19997 182.31C17.29 148.98 106 156.59 200.33 199.3V199.3Z"
                        fill="url(#paint11_linear_0_1)"
                    />
                    <path
                        d="M191.05 219.8C280.98 260.52 342.23 319.28 327.84 351.04C313.46 382.8 228.9 375.53 138.97 334.81C49.04 294.08 -12.2 235.32 2.18004 203.57C16.56 171.81 101.12 179.08 191.05 219.8V219.8Z"
                        fill="url(#paint12_linear_0_1)"
                    />
                    <path
                        d="M181.77 240.3C265.73 278.32 322.88 333.23 309.42 362.94C295.96 392.65 217 385.92 133.04 347.91C49.08 309.88 -8.07003 254.98 5.38997 225.26C18.85 195.55 97.81 202.28 181.77 240.29V240.3Z"
                        fill="url(#paint13_linear_0_1)"
                    />
                    <path
                        d="M172.49 260.79C249.53 295.67 302.05 345.88 289.81 372.92C277.57 399.96 205.19 393.6 128.15 358.72C51.1 323.83 -1.41995 273.63 10.8201 246.59C23.0701 219.55 95.44 225.91 172.48 260.79H172.49Z"
                        fill="url(#paint14_linear_0_1)"
                    />
                    <path
                        d="M163.21 281.29C231.76 312.33 278.44 357.12 267.48 381.33C256.52 405.54 192.06 400.01 123.51 368.97C54.96 337.93 8.27996 293.14 19.24 268.93C30.2 244.72 94.66 250.25 163.21 281.29V281.29Z"
                        fill="url(#paint15_linear_0_1)"
                    />
                    <path
                        d="M153.92 301.79C211.78 327.99 251.06 366.05 241.66 386.8C232.26 407.55 177.74 403.14 119.88 376.94C62.02 350.74 22.74 312.68 32.14 291.93C41.54 271.18 96.06 275.59 153.92 301.79V301.79Z"
                        fill="url(#paint16_linear_0_1)"
                    />
                    <path
                        d="M144.64 322.28C190.86 343.21 222.33 373.43 214.93 389.79C207.53 406.14 164.05 402.43 117.83 381.5C71.6101 360.57 40.1401 330.35 47.5401 313.99C54.9401 297.64 98.4201 301.35 144.64 322.28Z"
                        fill="url(#paint17_linear_0_1)"
                    />
                    <path
                        d="M135.36 342.78C166.8 357.02 188.25 377.48 183.27 388.49C178.29 399.49 148.76 396.87 117.31 382.63C85.87 368.39 64.41 347.93 69.4 336.92C74.38 325.91 103.91 328.54 135.36 342.77V342.78Z"
                        fill="url(#paint18_linear_0_1)"
                    />
                </svg>
            </div>
        </div>
    );
}
