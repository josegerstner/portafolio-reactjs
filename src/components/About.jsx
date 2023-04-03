import './About.css'

export function About() {
  return (
    <div className="container container-about">
        <p>
            <button class="btn btn-about" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Acerca de mí
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body txt-about text-justify px-5 mb-3">
                <p>Trabajo en programación desde 2016. Utilicé Microsoft SQL Server, MySQL, ASP, SSIS, Pentaho, Javascript, JAVA, Laravel (PHP) entre otras.</p>
                <p>Siempre estoy haciendo algún curso para intentar mantenerme actualizado o aprender algo nuevo. También me gusta aplicar mis conocimientos en proyectos personales para reforzar los conceptos aprendidos.</p>
            </div>
        </div>
    </div>
  )
}