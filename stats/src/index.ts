import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");

summary.buildAndPrintReport(matchReader.matches);
