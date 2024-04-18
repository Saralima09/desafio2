
export default function Home() {
    return (
        <div className="container">
            <main>
                <div className="jumbotron">
                    <h1 className="display-4" style={{ fontFamily: 'inherit' }}>Bem-vindo à nossa plataforma</h1>
                    <p className="lead" style={{ fontFamily: 'inherit' }}>Conheça nossos serviços e descubra como podemos ajudá-lo.</p>
                    <hr className="my-4" />
                    <p style={{ fontFamily: 'inherit' }}>Clique no botão abaixo para saber mais.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Saiba mais</a>
                </div>
            </main>
        </div>
    );
    }