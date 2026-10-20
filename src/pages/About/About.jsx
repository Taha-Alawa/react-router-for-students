
const About = () => {
  return (
    <div>
      <h1>من نحن</h1>
      <p>
        لاحظ أن الصفحة تغيّرت بدون إعادة تحميل، والـ Header والـ Footer بقيوا
        ثابتين. هذا هو دور الـ Layout والـ Outlet.
      </p>

      <h2>ملخص خطوات العمل</h2>
      <ol>
        <li>
          <p>Analyze UI: </p>
          تحديد الصفحات ثم تحديد العناصر المتكررة
        </li>
        <li>
          <p>Structure: </p>
          انشاء مجلدات (pages, components, layout)
        </li>
        <li>
          <p>Theme: </p>
          تعريف متغيرات الCSS
        </li>
        <li>
          <p>Layout: </p>
          بناء Layout.jsx و Outlet
        </li>
        <li>
          <p>Router: </p>
          إعداد الصفحات و NestedRoutes
        </li>
        <li>
          <p>Pages: </p>
          انشاء ملفات الصفحات وفصل تصميمهم عن النظام
        </li>
      </ol>
    </div>
  )
}

export default About
