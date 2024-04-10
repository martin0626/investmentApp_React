export default function ResultBody({year, value, interestYear, totalInterest, investedCapit}){
    return (   
            <tbody>
                <tr>
                    <th>{year}</th>
                    <th>{value}</th>
                    <th>{interestYear}</th>
                    <th>{totalInterest}</th>
                    <th>{investedCapit}</th>
                </tr>
            </tbody> 
    )
}