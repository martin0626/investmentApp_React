export default function InputField({handleInput, data, identifier, label}){
    return (
        <div className="input-group">
                <p>
                    <label htmlFor="">{label}</label>
                    <input value={data[identifier]} type="number" onChange={(e)=>handleInput(identifier, e.target.value)}/>
                </p>
        </div>
    );
}