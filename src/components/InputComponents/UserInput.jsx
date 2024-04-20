import InputField from "./InputField";

export default function UserInput({handleInput, data}){
    const inputFields = {
        'initialInvestment': 'Inntial Investments', 
        'annualInvestment': 'Annual Investments', 
        'expectedReturn': 'Expected Return', 
        'duration': 'Duration'
    };
    
    return (
        <section id='user-input'>
            <div className="input-group">
                {Object.keys(inputFields).slice(0, 2).map(identifier=> <InputField handleInput={handleInput} data={data} identifier={identifier} label={inputFields[identifier]}></InputField>)}
            </div>
            <div className="input-group">
                {Object.keys(inputFields).slice(2, 4).map(identifier=> <InputField handleInput={handleInput} data={data} identifier={identifier} label={inputFields[identifier]}></InputField>)}
            </div>
        </section>
    )
}