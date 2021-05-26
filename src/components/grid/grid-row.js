import React, { useState} from "react";
import{ apiGetColumns} from "../../external/fake-api"

function GridRow({onSelectRow, stock, index, selectedRow, gridCellRef, data}) {
    const [columns] = useState(apiGetColumns());
    return (
        <li key={stock.symbol} onClick={() => onSelectRow(stock.symbol, index)} className={selectedRow === index ? 'grid-row-selected' : ''}>
            <span className="grid-stock">{stock.symbol}</span>
            <span className="grid-desc" title={stock.description}>{stock.description}</span>

            {columns.map((column) => (
                <span
                    ref={el => gridCellRef.current[`${column.id}-${stock.symbol}`] = el}
                    style={{ minWidth: column.width, maxWidth: column.width, textAlign: column.align }}
                    key={column.id}>{data[stock.symbol][column.id]}</span>
            ))}

            <span className="commands"></span>
        </li>
    )
}

export default GridRow;