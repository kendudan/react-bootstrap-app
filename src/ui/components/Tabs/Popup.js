const Popup = ({ img, closePopup }) => (
    <div className='popup'>
        <div className='popup_inner'>
            <img src={img} />
            <button className="btn waves-effect waves-light" onClick={closePopup}>close me</button>
        </div>
    </div>
);

export default Popup;
