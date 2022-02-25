import './WantToWatch.css'
function WantToWatch () {
    return <div className="wantToWatch">
       <div className="wantToWatch-text">
           <h2 className="wantToWatch-heading heading-second-level">Хотите посмотреть?</h2>
           <p className='wantToWatch-text'>Lorem Ipsum - это текст-"рыба",
                часто используемый в печати и вэб-дизайне.
                 Lorem Ipsum является стандартной "рыбой"
                  для текстов на латинице с начала XVI века.
                   В то время некий безымянный печатник создал
                    большую коллекцию размеров и форм шрифтов,
                     используя Lorem Ipsum для распечатки образцо
                     в.</p>
       </div>
       <div className="wantToWatch-form">
        <form>
            <div className='wantToWatch-form__block1'>
            <input placeholder="Ваше имя" required className='wantToWatch-from_input'/>
            <input placeholder="Ваш телефон" required className='wantToWatch-from_input '/>
            </div>
            <div className='wantToWatch-form__block2'>
            <p className='wantToWatch-from__text'>*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
            <button className='wantToWatch-form__button form-button'>Посмотреть район</button>
            </div> 
       
        </form>
       </div>
    </div>
}
export default WantToWatch;