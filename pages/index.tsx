export default function Page() {
  const name = "Arthur Torres";
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-black text-white">
      <header className="flex justify-between items-center p-6 bg-opacity-50 bg-black">
        <div className="text-2xl font-bold">{name}</div>
        <nav className="space-x-4">
          <a href="#sobre-mi" className="hover:underline">
            Sobre Mí
          </a>
          <a href="#proyectos" className="hover:underline">
            Proyectos
          </a>
          <a href="#contacto" className="hover:underline">
            Contacto
          </a>
        </nav>
        <div>
          <select className="bg-black bg-opacity-50 text-white p-2 rounded">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>
      <main className="p-6">
        <section id="sobre-mi" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Sobre Mí</h2>
          <p className="text-lg">
            Soy un desarrollador web con experiencia en crear aplicaciones
            modernas y responsivas. Esta pagina esta en construcción.
          </p>
        </section>
        <section id="proyectos" className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Proyecto 1</h3>
              <p>Descripción del proyecto 1.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Proyecto 2</h3>
              <p>Descripción del proyecto 2.</p>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Proyecto 3</h3>
              <p>Descripción del proyecto 3.</p>
            </div>
          </div>
        </section>
        <section id="contacto">
          <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
          <p className="text-lg">
            Puedes contactarme en mi correo: ejemplo@correo.com
          </p>
        </section>
      </main>
      <footer className="p-6 bg-opacity-50 bg-black text-center">
        <p>&copy; 2025 {name}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
