import stlyes from './Home.module.css'
import Card from '../../components/Card/Card'

const Home = () => {
  return (
    <div>
      <section className={stlyes.hero}>
        <h1>هيكلة المشروع + React Router</h1>
        <p>بناء تطبيقات الصفحة الواحدة من التصميم الى الكود</p>
      </section>

      <div className={stlyes.grid}>
        <Card
          title="BrowserRouter"
          description="غلاف التطبيق" 
        />
        <Card
          title='Routes / Route'
          description='مجموعة المسارات وربط العنوان بالمكون'
        />
        <Card
          title='Link / NavLink'
          description='أداة التنقل بدون إعادة تحميل الصفحة'
          to='/about'
        />
        <Card
          title='useParams'
          description='قراءة المسارات المتغيرة مثل /user/101'
          to='/users'
        />
      </div>
    </div>
  )
}

export default Home
