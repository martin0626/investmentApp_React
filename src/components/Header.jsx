import headerImg from '../assets/investment-calculator-logo.png'

export default function Header(){
    return (
        <section id="header">
            <img src={headerImg} alt="My Image" />
            <h1>Investments Calculator</h1>
        </section>
    )
}