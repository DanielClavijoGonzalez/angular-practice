import { Component, Host, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(@Host() private _app: AppComponent) { }

  @Input('data') usuario: any

  BorrarUsuario(id: number){
    this._app.usuarios = this._app.usuarios.filter(usuario => usuario.id != id)
  }

}
