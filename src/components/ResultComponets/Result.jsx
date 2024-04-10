import ResultBody from "./ResultBody";

export default function Result({year, value, interestYear, totalInterest, investedCapit}){
    return (
        <table id="result">
            <thead>
                <tr>
                  <th>Year</th>
                  <th>Investment Value</th>
                  <th>Interest (Year)</th>
                  <th>Total Interest</th>
                  <th>Invested Capital</th>
                </tr>
            </thead>
            <ResultBody year='asdsa' value='asdasd' interestYear='sdasdasd' totalInterest='sadasd' investedCapit='asasdasd'/>
        </table>
    )
}