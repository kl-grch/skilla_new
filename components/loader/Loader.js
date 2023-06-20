import './loader.scss';

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader__icon">
                <img src="/images/loader/loader.svg" alt="loader" />
            </div>
            <div className="loader__text">Загружаем</div>
        </div>
    )
};
