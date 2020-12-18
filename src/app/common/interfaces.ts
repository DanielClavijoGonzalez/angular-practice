export interface LoginResponse{
  status: number,
  user: User
}

export interface User{
  edad: string,
  email: string,
  id: number,
  imagen_usuario: string,
  nombres: string,
  numerodo: string,
  passwd: string,
  telefono: string,
  tipo_doc: string,
  tipous: string
}
