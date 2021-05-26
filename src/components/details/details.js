import React, { useState, useCallback, useEffect } from "react";
import FakeApi, {
    apiGetListStocks,
    apiGetInitialValues,
} from "../../external/fake-api"
import "./details.css";
import IconBr from "./icon-br.js";


function Datails({ selectedStock }) {
    const [data, setData] = useState(apiGetInitialValues());
    const [stock, setStock] = useState({});
    const [tendency, setTendency] = useState(true);

    useEffect(() => {
        setStock(() => apiGetListStocks().find(e => e.symbol === selectedStock))
    }, [selectedStock])

    //this function updates the list of quotes with the input of API data
    const updateQuote = useCallback((stock, quotes) => {
        if (stock === selectedStock) {
            const tempData = Object.assign({}, data);
            quotes.forEach(quote => {
                setTendency(quote.value > data[stock][quote.id]);
                tempData[stock][quote.id] = quote.value;
                setData(tempData);
            });
        }
    }, [data, selectedStock]);

    FakeApi.apiUpdateQuotes["details"] = updateQuote;

    return (
        <div className="details">
            <div className="stock"><IconBr></IconBr>{selectedStock}</div>
            <div className="description">
                {stock.description || '-'}
            </div>
            <h1 className={tendency ? 'positive' : 'negative'}>{data[selectedStock]["c001"]} {data[selectedStock]["c009"]}</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <strong>{stock.description || selectedStock }</strong> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

            <a href={`https://www.google.com/search?q=${selectedStock}`} target="_blank"> veja mais... </a>
        </div>
    )
}

export default Datails;