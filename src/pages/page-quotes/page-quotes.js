import React, { useState } from "react";
import "./page-quotes.css";
import Grid from "../../components/grid/grid";
import Chart from "../../components/chart/chart";
import Details from "../../components/details/details";


function PageQuotes() {

    const [selectedStock, setSlectedStock] = useState("PETR4");
    function changeStock(stock){
        setSlectedStock(stock);
    }

    return (
        <div className="page-quotes">
            <header>Cotações</header>
            <section className="chart">
                <Chart selectedStock={selectedStock}></Chart>
            </section>
            <section className="grid">
                <Grid onChangeStock={changeStock}></Grid>
            </section>
            <section className="datails">
                <Details selectedStock={selectedStock}></Details>
            </section>
        </div>
    )
}


export default PageQuotes