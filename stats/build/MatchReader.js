"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
    }
    return MatchReader;
}());
exports.MatchReader = MatchReader;
// .map((row: string[]): MatchData => {
//   return [
//     dateStringToDate(row[0]),
//     row[1],
//     row[2],
//     parseInt(row[3]),
//     parseInt(row[4]),
//     row[5] as MatchResult,
//     row[6],
//   ];
// });
