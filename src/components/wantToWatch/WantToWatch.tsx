import './WantToWatch.css';
import Button from '../UI/Button';
import Input from '../UI/Input';
function WantToWatch() {
    return (
        <div className='bg'>
            <div className="want_to_watch">
                <div className="want_to_watch-text">
                    <h2 className="want_to_watch-heading heading-second-level">Хотите посмотреть?</h2>
                    <p className='want_to_watch-text'>
                        Lorem Ipsum - это текст-"рыба",
                        часто используемый в печати и вэб-дизайне.
                        Lorem Ipsum является стандартной "рыбой"
                        для текстов на латинице с начала XVI века.
                        В то время некий безымянный печатник создал
                        большую коллекцию размеров и форм шрифтов,
                        используя Lorem Ipsum для распечатки образцо
                        в.
                    </p>
                </div>
                <div className="want_to_watch-form">
                    <form>
                        <div className='want_to_watch-form__block1'>
                            <Input placeholder="Ваше имя" />
                            <Input placeholder="Ваш телефон" />
                        </div>
                        <div className='want_to_watch-form__block2'>
                            <p className='want_to_watch-from__text'>
                                *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
                            </p>
                            <Button />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
export default WantToWatch;