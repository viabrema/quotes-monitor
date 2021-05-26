const context = {
  apiUpdateQuotes: {},
  quotesTimeout: null
}

export function apiGetListStocks() {
  return [{
    "source": "12",
    "symbol": "PETR4",
    "description": "PETROBRAS"
  },
  {
    "source": "12",
    "symbol": "VALE3",
    "description": "Vale S.A."
  },
  {
    "source": "12",
    "symbol": "ABEV3",
    "description": "AMBEV"
  },
  {
    "source": "12",
    "symbol": "AZUL4",
    "description": "Azul SA"
  },
  {
    "source": "12",
    "symbol": "B3SA3",
    "description": "B3 SA - Brasil Bolsa Balcao"
  },
  {
    "source": "12",
    "symbol": "BBAS3",
    "description": "Banco do Brasil SA"
  },
  {
    "source": "12",
    "symbol": "BBDC3",
    "description": "Banco Bradesco SA"
  },
  {
    "source": "12",
    "symbol": "BBDC4",
    "description": "Banco Bradesco SA Preference Shares"
  },
  {
    "source": "12",
    "symbol": "BBSE3",
    "description": "BB Seguridade"
  },
  {
    "source": "12",
    "symbol": "BEEF3",
    "description": "Minerva Foods"
  },
  {
    "source": "12",
    "symbol": "BPAC11",
    "description": "Banco BTG Pactual SA Brazilian Units"
  },
  {
    "source": "12",
    "symbol": "BRAP4",
    "description": "Bradespar SA Preference Shares"
  },
  {
    "source": "12",
    "symbol": "BRDT3"
  },
  {
    "source": "12",
    "symbol": "BRFS3"
  },
  {
    "source": "12",
    "symbol": "BRKM5"
  },
  {
    "source": "12",
    "symbol": "BRML3"
  },
  {
    "source": "12",
    "symbol": "BTOW3"
  },
  {
    "source": "12",
    "symbol": "CCRO3"
  },
  {
    "source": "12",
    "symbol": "CIEL3"
  },
  {
    "source": "12",
    "symbol": "CMIG4"
  },


  {
    "source": "12",
    "symbol": "PETR4V",
    "description": "PETROBRAS"
  },
  {
    "source": "12",
    "symbol": "VALE3V",
    "description": "Vale S.A."
  },
  {
    "source": "12",
    "symbol": "ABEV3V",
    "description": "AMBEV"
  },
  {
    "source": "12",
    "symbol": "AZUL4V",
    "description": "Azul SA"
  },
  {
    "source": "12",
    "symbol": "B3SA3V",
    "description": "B3 SA - Brasil Bolsa Balcao"
  },
  {
    "source": "12",
    "symbol": "BBAS3V",
    "description": "Banco do Brasil SA"
  },
  {
    "source": "12",
    "symbol": "BBDC3V",
    "description": "Banco Bradesco SA"
  },
  {
    "source": "12",
    "symbol": "BBDC4V",
    "description": "Banco Bradesco SA Preference Shares"
  },
  {
    "source": "12",
    "symbol": "BBSE3V",
    "description": "BB Seguridade"
  },
  {
    "source": "12",
    "symbol": "BEEF3V",
    "description": "Minerva Foods"
  },
  {
    "source": "12",
    "symbol": "BPAC11V",
    "description": "Banco BTG Pactual SA Brazilian Units"
  },
  {
    "source": "12",
    "symbol": "BRAP4V",
    "description": "Bradespar SA Preference Shares"
  },
  {
    "source": "12",
    "symbol": "BRDT3V"
  },
  {
    "source": "12",
    "symbol": "BRFS3V"
  },
  {
    "source": "12",
    "symbol": "BRKM5V"
  },
  {
    "source": "12",
    "symbol": "BRML3V"
  },
  {
    "source": "12",
    "symbol": "BTOW3V"
  },
  {
    "source": "12",
    "symbol": "CCRO3V"
  },
  {
    "source": "12",
    "symbol": "CIEL3V"
  },
  {
    "source": "12",
    "symbol": "CMIG4V"
  }
  ]
}

export function apiGetColumns() {
  return [
    {
      id: "c001",
      label: "Venda",
      width: "100px",
      align: "right"
    },
    {
      id: "c002",
      label: "Compra",
      width: "100px",
      align: "right"

    },
    {
      id: "c003",
      label: "Quantidade",
      width: "100px",
      align: "right"
    },
    {
      id: "c009",
      label: "Tend.",
      width: "100px",
      align: "center"
    },
    {
      id: "c004",
      label: "Último",
      width: "100px",
      align: "right"

    },
    {
      id: "c005",
      label: "Total",
      width: "100px",
      align: "right"
    },
    {
      id: "c006",
      label: "Min.",
      width: "100px",
      align: "right"

    },
    {
      id: "c007",
      label: "Max.",
      width: "100px",
      align: "right"
    },
    {
      id: "c008",
      label: "Variação",
      width: "100px",
      align: "right"

    },
    {
      id: "c010",
      label: "Max%",
      width: "100px",
      align: "right"

    },
    {
      id: "c011",
      label: "Min%",
      width: "100px",
      align: "right"
    },
    {
      id: "c012",
      label: "Fechamento",
      width: "100px",
      align: "right"

    },
    {
      id: "c013",
      label: "Abertura",
      width: "100px",
      align: "right"
    }
  ]
}

export function apiGetInitialValues() {

  const data = {};
  const list = apiGetListStocks();
  list.forEach(stock => {
    data[stock.symbol] = {
      c001: ((Math.random() * 10.3) + 10).toFixed(2),
      c002: ((Math.random() * 10.3) + 10).toFixed(2),
      c003: Math.floor(Math.random() * 1000000),
      c004: ((Math.random() * 10.3) + 10).toFixed(2),
      c005: ((Math.random() * 10.3) + 10).toFixed(2),
      c006: ((Math.random() * 10.3) + 10).toFixed(2),
      c007: ((Math.random() * 10.3) + 10).toFixed(2),
      c008: ((Math.random() * 10.3) + 10).toFixed(2),
      c009: (Math.floor((Math.random() * 2)) === 1? "↑":"↓" ),
      c010: ((Math.random() * 10.3) + 10).toFixed(2),
      c011: ((Math.random() * 10.3) + 10).toFixed(2),
      c012: ((Math.random() * 10.3) + 10).toFixed(2),
      c013: ((Math.random() * 10.3) + 10).toFixed(2)

    }
  });

  return data;

}

export function apiGetChartValues() {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr[i] = ((Math.random() * 8.3)) + 10;
  }
  return arr;
}

export function apiStartquotes() {


  let random = Math.floor(Math.random() * 40);
  let stock = apiGetListStocks()[random].symbol;
  let data = [
    { id: "c001", value: ((Math.random() * 10.3) + 10).toFixed(2) },
    { id: "c002", value: ((Math.random() * 10.3) + 10).toFixed(2) },
    { id: "c009", value: (Math.floor((Math.random() * 2)) === 1? "↑":"↓" ) }

  ]
  for (let i in context.apiUpdateQuotes) {
    if (typeof context.apiUpdateQuotes[i] === "function") {
      context.apiUpdateQuotes[i](stock, data);
    }
  }

  clearTimeout(context.quotesTimeout);
  context.quotesTimeout = setTimeout(apiStartquotes, 100);

}


export default context;