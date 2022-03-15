import Button from '../UI/Button';
import Input from '../UI/Input';
import './Questions.css';
function Questions() {
    return (
        <div className='questions'>
            <h2 className='questions-heading heading-second-level'>Есть вопросы?</h2>
            <form>
                <ul className='questions-list'>
                    <li className='questions-list_item'>
                        <p className='questions-description'>*Мы никому не передаем ваши данные.И не сохраняем ваш номер в базу.</p>
                    </li>
                    <li className='questions-list_item'>
                        <Input placeholder='Ваше имя'/>
                    </li>
                    <li className='questions-list_item'>
                        <Input placeholder='Ваш телефон'/>
                    </li>
                    <li className='questions-list_item'>
                        <Button/>
                    </li>
                </ul>
            </form>
        </div>
    )
}
export default Questions;