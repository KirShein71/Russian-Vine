import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProductPreview() {
    const [wine, setWine] = React.useState()
    const { id } = useParams()
    React.useEffect(()=>{
        async function fetchWine() {
            try {
                const {data} = await axios.get('https://63e38111c919fe386c07dffa.mockapi.io/items/'+ id);
                setWine(data)
            } catch {
                alert('Техническая ошибка')
            }
        }
        fetchWine()
    },[]);

    if (!wine) {
        return 'Загрузка...';
    }

    return (
        <div className="productpreview">
            <div className="container">
                <div className="productpreview__content">
                    <div className="productpreview__image">
                        <img  src={wine.imageUrl} alt="wine"/>
                    </div>
                    <div className="productpreview__information">
                        <div className="productpreview__title">Дегустационные характеристики</div>
                        <div className="productpreview__text">{wine.characteristic}</div>
                        <div className="productpreview__title">Гастрономическое сочетание</div>
                        <div className="productpreview__text">{wine.gastranomy}</div>
                        <div className="productpreview__title">Подача</div>
                        <div className="productpreview__text">{wine.innings}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview;