import * as React from 'react';

import { ParamContext } from '../../context';
import StripMTR from '../strip/strip-mtr';
import MainMTR from './main/main-mtr';

const RailMapMTR = () => {
    const { param } = React.useContext(ParamContext);
    return (
        <>
            <DefsMTR />

            <StripMTR stripPc={param.strip_pc} />
            <MainMTR />
        </>
    );
};

export default RailMapMTR;

const DefsMTR = React.memo(() => {
    return (
        <defs>
            <g id="airport" transform="scale(0.5970084519)">
                <rect x={-29.33899} height={58.67798} width={58.67798} />
                <path
                    id="airport"
                    d="M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241"
                    transform="translate(-28.9697,0.14347)"
                    fill="white"
                />
            </g>
            <g id="disney" transform="scale(0.5970084519)">
                <rect x={-29.33899} width={58.67798} height={58.67798} />
                <path
                    fill="white"
                    d="M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601"
                    transform="translate(-28.9697 0.13398)"
                />
            </g>
            <clipPath id="hsr-clip-path" transform="translate(-0.00057 0.01643)">
                <path
                    fill="none"
                    d="M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"
                />
            </clipPath>
            <g id="hsr" transform="scale(0.5970084519)">
                <rect x={-29.33899} width={58.67798} height={58.67798} />
                <g clipPath="url(#hsr-clip-path)" transform="translate(-29.33899,0)">
                    <rect
                        x={-3.25242}
                        y={24.74141}
                        width={61.75879}
                        height={0.98008}
                        transform="translate(-8.93747 17.31321) rotate(-30.16134)"
                        fill="white"
                    />
                    <path
                        d="M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121"
                        transform="translate(-0.00057 0.01643)"
                        fill="white"
                    />
                    <polygon
                        points="57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614"
                        fill="white"
                    />
                    <path
                        d="M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602"
                        transform="translate(-0.00057 0.01643)"
                    />
                    <path
                        d="M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065"
                        transform="translate(-0.00057 0.01643)"
                        fill="white"
                    />
                    <path
                        d="M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602"
                        transform="translate(-0.00057 0.01643)"
                    />
                    <path
                        d="M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z"
                        transform="translate(-0.00057 0.01643)"
                        fill="white"
                    />
                    <path
                        d="M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066"
                        transform="translate(-0.00057 0.01643)"
                        fill="white"
                    />
                    <polygon
                        points="23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311"
                        fill="white"
                    />
                    <path
                        d="M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z"
                        transform="translate(-0.00057 0.01643)"
                        fill="white"
                    />
                    <path
                        d="M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z"
                        transform="translate(-0.00057 0.01643)"
                    />
                    <path
                        d="M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962"
                        transform="translate(-0.00057 0.01643)"
                    />
                </g>
            </g>

            <circle id="stn" r={8} className="rmg-stn__mtr" />
            <path
                id="stn_b"
                className="rmg-stn__mtr"
                d="M -6.369803765,4.84 a 8,8 0 1,1 12.73960753,0 a 8,8 0 1,1 -12.73960758,0 Z"
            />
            <path
                id="stn_bb"
                d="M -6.369803765,4.84 a 8,8 0 1,1 12.73960753,0 a 8,8 0 0,1 0,9.68 a 8,8 0 1,1 -12.73960753,0 a 8,8 0 0,1 0,-9.68 Z"
                className="rmg-stn__mtr"
            />
            <path id="int2" d="M -8,0 v 18 a 8,8 0 0,0 16,0 v -18 a 8,8 0 0,0 -16,0 Z" className="rmg-stn__mtr" />

            {[3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => {
                let h = 18 * (n - 1);
                return (
                    <React.Fragment key={n}>
                        <path
                            id={`int${n}`}
                            d={`M -8,0 v ${h} a 8,8 0 0,0 16,0 v -${h} a 8,8 0 0,0 -16,0 Z`}
                            className="rmg-stn__mtr"
                        />
                        <path
                            id={`int${n}_b`}
                            className="rmg-stn__mtr"
                            d={`M -8,9.68 v ${h} a 8,8 0 0,0 16,0 v -${h} a 8,8 0 0,0 -1.630196235,-4.84 a 8,8 0 1,0 -12.73960758,0 a 8,8 0 0,0 -1.630196235,4.84 Z`}
                        />
                        <path
                            id={`int${n}_bb`}
                            className="rmg-stn__mtr"
                            d={`M -8,19.36 v ${h} a 8,8 0 0,0 16,0 v -${h} a 8,8 0 0,0 -1.630196235,-4.84 a 8,8 0 0,0 0,-9.68 a 8,8 0 1,0 -12.73960758,0 a 8,8 0 0,0 0,9.68 a 8,8 0 0,0 -1.630196235,4.84 Z`}
                        />
                    </React.Fragment>
                );
            })}

            <g id="osi11">
                <path d="M 0,0 V 26" />
                <use xlinkHref="#stn" />
                <use xlinkHref="#stn" y={26} />
            </g>
            <g id="osi11_b">
                <path d="M 0,0 V 35.68" />
                <use xlinkHref="#stn_b" />
                <use xlinkHref="#stn" y={35.68} />
            </g>
            <g id="osi11_bb">
                <path d="M 0,0 V 45.36" />
                <use xlinkHref="#stn_bb" />
                <use xlinkHref="#stn" y={45.36} />
            </g>

            <g id="osi12">
                <path d="M 0,0 V 26" />
                <use xlinkHref="#stn" />
                <use xlinkHref="#int2" y={26} />
            </g>
            <g id="osi12_b">
                <path d="M 0,11 V 35.68" />
                <use xlinkHref="#stn_b" />
                <use xlinkHref="#int2" y={35.68} />
            </g>
            <g id="osi12_bb">
                <path d="M 0,11 V 45.36" />
                <use xlinkHref="#stn_bb" />
                <use xlinkHref="#int2" y={45.36} />
            </g>

            <g id="osi22end">
                <path d="M 0,0 H 41" />
                <use xlinkHref="#stn" />
                <use xlinkHref="#int2" x={41} y={-18} />
            </g>
            <g id="osi22end_b">
                <path d="M 0,9.68 H 41" />
                <use xlinkHref="#stn_b" />
                <use xlinkHref="#int2" x={41} y={-8.32} />
            </g>

            <path id="inttick" d="M 0,0 v 17" strokeLinecap="round" />
        </defs>
    );
});