import ResultBody from "./ResultBody";

export default function Result({resultData}){
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
            {resultData.map(result=> <ResultBody year={result.year} value={result.valueEndOfYear} interestYear={result.interest} investedCapit={result.annualInvestment}/>)}
            
        </table>
    )
}