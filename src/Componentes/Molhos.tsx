type MolhosProps = {
    tipos: string[]
};

function Molhos({tipos}: MolhosProps) {
    return (
        <ul>
            {tipos.map((molho, index) => (
                <li key={index}>🍝{molho}</li>
            ))}
        </ul>
    );
}

export default Molhos