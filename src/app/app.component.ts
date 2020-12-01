import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  
  constructor(private usuariosService: UsuariosService) {

    this.usuariosService.obtenerUsuarios().subscribe( usuarios => {
      console.log(usuarios);
    },(err) => {
      console.log("🚀 😈  ~ file: app.component.ts ~ line 17 ~ AppComponent ~ this.usuariosService.obtenerUsuarios ~ err", err)
    })

    this.usuariosService.obtenerUsuario().subscribe( usuario => {
      console.log(usuario);
    },(err) => {
      console.log("🚀 😎  ~ file: app.component.ts ~ line 24 ~ AppComponent ~ this.usuariosService.obtenerUsuario ~ err", err)
    })

  }
}
