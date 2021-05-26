import React, { useState, useCallback, useRef } from "react";
import GridRow from "./grid-row";
import FakeApi, {
    apiGetListStocks,
    apiGetInitialValues,
    apiGetColumns,
} from "../../external/fake-api"
import "./grid.css";


function Grid({ onChangeStock }) {
    const gridCellRef = useRef([]);
    const gridHeaderRef = useRef(null);
    const gridBodyRef = useRef(null);
    const [listStocks] = useState(apiGetListStocks());
    const [columns] = useState(apiGetColumns());
    const [data, setData] = useState(apiGetInitialValues());
    const [selectedRow, setSelectedRow] = useState(0);

    //this function updates the list of quotes with the input of API data
    const updateQuote = useCallback((stock, quotes) => {
        const tempData = Object.assign({}, data);
        quotes.forEach(quote => {
            let tendency = quote.value > data[stock][quote.id]
            blink(stock, quote.id, tendency);
            tempData[stock][quote.id] = quote.value;
            setData(tempData);
        });
    }, [data]);

    FakeApi.apiUpdateQuotes["grid"] = updateQuote;

    //Color the grid cell for each new quote value update
    function blink(stock, column, tendency) {
        const listBlink = ["c001", "c002"]; //list of valid columns to blink

        if (listBlink.find(e=>column===e)) {
            const el = gridCellRef.current[`${column}-${stock}`];
            el.classList.add(tendency ? "grid-blink" : "grid-blink-negative");
            setTimeout(() => {
                el.classList.remove("grid-blink");
                el.classList.remove("grid-blink-negative");
            }, 1000)
        }
    }

    //scroll the grid header using the grid body scroll
    function bodyScroll(e) {
        gridHeaderRef.current.scrollLeft = gridBodyRef.current.scrollLeft;
    }

    function selectRow(stock, index) {
        setSelectedRow(index);
        onChangeStock(stock);
    }

    return (
        <div className="grid">
            <ul className="grid-header" ref={gridHeaderRef}>
                <li className="grid-stock">Ativo</li>
                <li className="grid-desc">Descrição</li>

                {columns.map((column) => (
                    <li key={column.id} style={{ minWidth: column.width, maxWidth: column.width, textAlign: column.align }}>{column.label}</li>
                ))}

                <li className="commands"></li>
            </ul>
            <ul className="grid-body" onScroll={bodyScroll} ref={gridBodyRef}>
                {
                    listStocks.map((stock, index) => (
                        <GridRow key={index}
                            onSelectRow={selectRow}
                            stock={stock} index={index}
                            selectedRow={selectedRow}
                            gridCellRef={gridCellRef}
                            data={data}>
                        </GridRow>
                    ))
                }
            </ul>
        </div>
    )
}

export default Grid;