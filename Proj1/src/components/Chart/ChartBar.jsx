import ChartBar from "./ChartBar";

const ChartBar = (props) => {
    return <div className="chart">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill"></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>

}

export default ChartBar;