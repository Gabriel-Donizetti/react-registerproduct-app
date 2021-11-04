import style from "./style.module.scss"

export function Products(){
    return(
        <div className={style.products}>
            <div>
                <h1>Roupas</h1>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Imagem</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Descrição</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><i className="fas fa-image"></i></td>
                            <td>Roupa</td>
                            <td>1</td>
                            <td>R$ 20,00</td>
                            <td>Descrição</td>
                            <td><i className="fas fa-edit">&nbsp;<i className="fas fa-trash"></i> </i></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td><i className="fas fa-image"></i></td>
                            <td>Roupa</td>
                            <td>15</td>
                            <td>R$ 20,00</td>
                            <td>Descrição</td>
                            <td><i className="fas fa-edit">&nbsp;<i className="fas fa-trash"></i> </i></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td><i className="fas fa-image"></i></td>
                            <td>Roupa</td>
                            <td>2</td>
                            <td>R$ 20,00</td>
                            <td>Descrição</td>
                            <td><i className="fas fa-edit">&nbsp;<i className="fas fa-trash"></i> </i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}