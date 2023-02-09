// just did this way since APIs should be returned from backend already formatted
export const variationHandler = (res: any) => {
  const data: any = {
    result: [],
    labels: [],
    current: [],
    open: [],
    meta: {}
  }

  const calc = (open: any, close: any) => {
    return ((open - close) / open * 100).toFixed(2)
  }

  res.chart.result.forEach((result: any) => {
    data.meta = result.meta;

    result.indicators.quote.forEach((quote: any) => {
      data.open = quote.open;

      result.timestamp.forEach((timestamp: any) => {
        data.labels.push(new Date(timestamp * 1000).toLocaleDateString('pt-BR'));
      })

      quote.open.forEach((_: any, index: number) => {
        data.result.push(calc(quote.open[index - 1], quote.open[index]))
        data.current.push(calc(quote.open[0], quote.open[index]))
      })
    })
  });

  data.open = data.open.map((open: any, index: number) => {
    if (data.result[index] === 'NaN') {
      data.result.splice(index, 1);
      data.current.splice(index, 1);
      data.labels.splice(index, 1);
    }

    return open
  });

  data.open.splice(data.open.length - 1, 1);

  return data
}
