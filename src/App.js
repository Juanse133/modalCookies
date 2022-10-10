import "./App.css";
import ModalCookies from "./components/ModalCookies";

function App() {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "block" }}>
                React - Hola mundo! | Juan José Horta Osorio y Juan Sebastián
                Castaño Ramírez
            </div>
            <ModalCookies
                text="Esta web usa cookies propias que tienen una finalidad funcional y cookies de terceros que permiten conocer sus hábitos de navegación para darle mejores servicios de información. Para continuar navegando, es importante que acepte su uso."
                buttonText="Aceptar"
            />
        </div>
    );
}

export default App;
