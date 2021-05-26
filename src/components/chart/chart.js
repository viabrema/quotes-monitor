import React, { useState, useEffect } from "react";
import "./chart.css";
import {
    apiGetChartValues,
} from "../../external/fake-api"


function Chart({ selectedStock }) {

    const [points, setPoints] = useState([1, 5, 3]);
    const [bars] = useState([30, 25, 20, 15, 10, 5, 0]);
    const [heightChart] = useState(270);
    const [widthChart] = useState(400);

    useEffect(() => {
        setPoints(apiGetChartValues());
    }, [selectedStock]);

    //get the max data value
    function getMaxDataValue() {

        let max = points.reduce((a, b) => {
            return Math.max(a, b);
        });
        return max +20;
    }

    //calculate point vertical position
    function calcPointVPosition(value) {

        const marginTop = 0;
        const height = heightChart - marginTop;
        const max = getMaxDataValue();
        //calculate relative value using the chart height and max data value
        return heightChart - ((value * height) / max);
    }

    //calculate point horizontal position
    function calcPointHPosition(index) {
        let step = widthChart / points.length;
        return (index * step) + (step/2);
    }

    //generate path of chart area
    function generatePath() {
        let path = `M ${calcPointHPosition(0)} ${heightChart}`;

        points.forEach((point, index) => {
            path += ` L ${calcPointHPosition(index)} ${calcPointVPosition(point)} `;
        });
        path += ` L ${calcPointHPosition(points.length - 1)} ${heightChart}`;
        return path;
    }

    //generate path of chart line
    function generatePathLine() {
        let path = `M ${calcPointHPosition(0)} ${calcPointVPosition(points[0])}`;

        points.forEach((point, index) => {
            path += ` L ${calcPointHPosition(index)} ${calcPointVPosition(point)} `;
        });
        path += ` L ${calcPointHPosition(points.length - 1)} ${calcPointVPosition(points[points.length-1])}`;
        return path;
    }

    return (
        <>
            <div className="chart-header">Gráfico {selectedStock}</div>
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${widthChart} ${heightChart}`}
                className="chart"
            >

                <g>
                    {bars.map((bar, index) => (getMaxDataValue() > bar &&
                        <g key={index}>
                            <path d={`M 0 ${calcPointVPosition(bar)}  L ${widthChart} ${calcPointVPosition(bar)}`} stroke="#eee" strokeWidth="1" />
                            <text x="5" y={calcPointVPosition(bar) -5} fontSize="12px" >{bar.toFixed(2)}</text>
                        </g>
                    ))}
                </g>

                <path
                    v-if="nullOrEmpityPoints"
                    d={generatePath()}
                    strokeWidth="0"
                    fill="#34bbbb"
                    opacity="0.4"
                />

                <path
                    v-if="nullOrEmpityPoints"
                    d={generatePathLine()}
                    stroke="#008080"
                    strokeWidth="3"
                    fill="transparent"
                    opacity="0.4"
                />

                <g>
                    {points.map((point, index) => (
                        <circle key={index} cx={calcPointHPosition(index)} cy={calcPointVPosition(point)} r="3" fill="#008080">
                            <title>{point.toFixed(2)}</title>
                        </circle>
                    ))}
                </g>

            </svg>
        </>
    )
}


export default Chart;