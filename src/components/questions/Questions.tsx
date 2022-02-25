import './Questions.css';
function Questions () {
    return <div className='questions'>
     <h2 className='questions-heading heading-second-level'>Есть вопросы?</h2>
     <form>
     <ul className='questions-list'>
         <li className='questions-list_item'><p className='questions-description'>*Мы никому не передаем ваши данные.И не сохраняем ваш номер в базу.</p></li>
         <li className='questions-list_item'><input placeholder='Ваше имя' required className='questions-input form-input'/></li>
         <li className='questions-list_item'><input placeholder='Ваш телефон' required className='questions-input form-input'/></li>
         <li className='questions-list_item'><button type='submit' className='questions-button form-button'>Посмотреть район</button></li>
     </ul>
     </form>
    </div>
}
export default Questions;