import './Maps.css'
function Maps () {
    return <div className='maps'>
        <h2 className='maps-heading heading-second-level'>Район на карте</h2>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.2444236684998!2d30.337639216070855!3d59.94467898187838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696317353b89bb9%3A0x4a5baf20e1544c1b!2z0L3QsNCx0LXRgNC10LbQvdCw0Y8g0YDQtdC60Lgg0KTQvtC90YLQsNC90LrQuCwgMTAsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTE4Nw!5e0!3m2!1sru!2sua!4v1645617948866!5m2!1sru!2sua" width="1100" height="358"  loading="lazy"></iframe>
        </div>
    </div>
}
export default Maps;