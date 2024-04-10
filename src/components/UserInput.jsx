export default function UserInput(){
    return (
        <section id='user-input'>
            <div className="input-group">
                <div>
                    <label htmlFor="">Inntial Investments</label>
                    <input type="number" />
                </div>

                <div>
                    <label htmlFor="">Annual Investments</label>
                    <input type="number" />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="">Expected Return</label>
                    <input type="number" />
                </div>
            
                <div>
                    <label htmlFor="">Duration</label>
                    <input type="number" />
                </div>
            </div>
        </section>
    )
}