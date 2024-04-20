
import { formatter} from '../../util/investment'

export default function ResultBody({year, value, interestYear, investedCapit}){

    const totalInterest = value - investedCapit * year
    const totalAmountInvested = value - interestYear;

    return (   
            <tbody>
                <tr>
                    <th>{year}</th>
                    <th>{formatter.format(value)}</th>
                    <th>{formatter.format(interestYear)}</th>
                    <th>{formatter.format(totalInterest)}</th>
                    <th>{formatter.format(totalAmountInvested)}</th>
                </tr>
            </tbody> 
    )
}