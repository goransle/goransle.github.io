# Highcharts 101

## Hurtigstart

1. Lag ei HTML-fil (eller bruk jsfiddle.net, codepen.io eller liknande)
2. Last inn Highcharts med `<script src="https://code.highcharts.com/highcharts.js"></script>`
3. Legg til eit element som Highcharts kan rendre til, f.eks. `<div id="container"></div>` 
4. Legg til eit Javascript-script som setter opp Highcharts:
	```
<script>
    Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
</script>
	```
5. Legg dine data i `series`. Merk at forskjellige typer serier har forskjellige dataformat. [Her kan dere se korleis bar-charts forventer at datene skal se ut](https://api.highcharts.com/highcharts/series.bar.data).

* [Alle serietyper](https://api.highcharts.com/highcharts/series)
* ["Your first chart" artikkel](https://www.highcharts.com/docs/getting-started/your-first-chart)
* [Demoen dette er henta frå](https://jsfiddle.net/highcharts/kh5jY/)

## Api og dokumentasjon

Her finner dere dokumentasjon, og linker videre til API referanser og demoer: [highcharts.com/docs/index](https://www.highcharts.com/docs/index)

## Nyttige moduler

Her er noen moduler som kan vere nyttige. Modulene legges til under `<script src="https://code.highcharts.com/highcharts.js"></script>`.

(om dere bruker Maps, bruk `code.highcharts.com/maps/modules/{modul}`)

### Data modulen 
`<script src="https://code.highcharts.com/modules/data.js"></script>`

Gjer det mulig å hente inn data frå kjelder som Google Spreadsheets, csv-filer og HTML-tabeller. 

* [Dokumentasjon](https://www.highcharts.com/docs/working-with-data/data-module)
* [API](https://api.highcharts.com/highcharts/data)
* [Demo med data henta fra Google Spreadsheets](https://www.highcharts.com/samples/highcharts/data/google-spreadsheet)
* [Live data demo](https://www.highcharts.com/samples/highcharts/data/livedata-csv)

### Exporting modulen

`<script src="https://code.highcharts.com/modules/exporting.js"></script>`

Gjer det mulig å laste ned charten som PNG, PDF, eller SVG filer.

Sjå [dokumentasjon](https://www.highcharts.com/docs/export-module/export-module-overview#controling-the-size-of-the-exported-image) og [demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/exporting/sourcewidth/) for korleis dere kan styre størrelsen på dei eksporterte filene.

### Debugger modulen

`<script src="https://code.highcharts.com/modules/debugger.js"></script>`

Feil i Highcharts vil vises i charten med rød ramme.

[Dokumentasjon](https://www.highcharts.com/docs/advanced-chart-features/debugger-mode)

## Styling i Highcharts

Det er to måter å legge til stiler i Highcharts: gjennom innstillingene i Javascript, og som CSS.

Se [dokumentasjonen](https://www.highcharts.com/docs/chart-design-and-style/style-by-css) for kva CSS-selectorer som kan brukes. Dere kan og se standard-stilen på [code.highcharts.com](https://code.highcharts.com/css/highcharts.css)

[Demo som viser CSS styling](https://www.highcharts.com/demo/styled-mode-pie)

Se [APIen](https://api.highcharts.com/highcharts/chart.style) for kva innstillinger som er tilgjengelige i Javascript.

## Kart

For å bruke Highcharts Maps, må det laste det inn i staden for Highcharts. 

`<script src="https://code.highcharts.com/maps/highmaps.js"></script>`

Ein må òg bruke `Highcharts.mapChart` i staden for `Highcharts.chart`, når ein oppretter diagrammet. 

Se [dokumentasjonen](https://www.highcharts.com/docs/maps/getting-started) for meir om bruk av kart.

I tillegg må ein laste inn kartet som skal vises. Desse kan ein importere på samme måte som Highcharts. Her er eit enkelt utvalg:
* Norge med kommuner: `https://code.highcharts.com/mapdata/countries/no/no-all-all.js`
* Norge med fylker: `https://code.highcharts.com/mapdata/countries/no/no-all.js`

Se https://www.highcharts.com/docs/maps/map-collection for meir informasjon om innlasting av kart. Sjå https://code.highcharts.com/mapdata/ for ei oversikt over alle kart som me leverer.

For å legge til punkter på kartet ut I frå fysiske koordinater må ein laste inn eit eksternt bibliotek kalla `proj4js`. Dette gjer ein med å legge til `<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.6.1/proj4.js"></script>` før Highcharts scriptet. 

[Dette eksempelet viser dette i praksis](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/maps/demo/mappoint-latlon/)

For meir informasjon se [artikkel om punkter og linjer](https://www.highcharts.com/docs/maps/adding-points-and-lines) og [artikkel om lengde- og breddegrader](https://www.highcharts.com/docs/maps/latlon)

## Meir frå bloggen
* [The 7 Most Common Chart Mistakes](https://www.highcharts.com/blog/tutorials/182-7-most-common-chart-mistakes/)
* [Pattern fills](https://www.highcharts.com/blog/tutorials/pattern-fills/)
* [Chart accessibility best practices](https://www.highcharts.com/blog/tutorials/best-chart-accessibility-practices/)
* [How to write accessible descriptions for interactive charts](https://www.highcharts.com/blog/tutorials/accessible-descriptions-for-interactive-charts/)
* [Which charts are best at showing data relationships?](https://www.highcharts.com/blog/tutorials/which-charts-are-best-at-showing-data-relationships/)
* [How to compare data using charts](https://www.highcharts.com/blog/tutorials/how-to-compare-data-using-charts/)
