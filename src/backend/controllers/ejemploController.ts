// Ejemplo de un controlador básico

interface EjemploData {
  id: number;
  nombre: string;
}

class EjemploController {
  // Simular una base de datos
  private datos: EjemploData[] = [
    { id: 1, nombre: 'Ejemplo 1' },
    { id: 2, nombre: 'Ejemplo 2' }
  ];

  // Obtener todos los datos
  getAll = () => {
    return this.datos;
  }

  // Obtener un dato por ID
  getById = (id: number) => {
    return this.datos.find(dato => dato.id === id);
  }

  // Crear nuevo dato
  create = (dato: Omit<EjemploData, 'id'>) => {
    const newId = this.datos.length + 1;
    const newDato = { id: newId, ...dato };
    this.datos.push(newDato);
    return newDato;
  }
}

export default new EjemploController();