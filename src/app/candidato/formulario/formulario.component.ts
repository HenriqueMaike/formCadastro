import { Component, OnInit } from '@angular/core';
import { Candidato } from '../shared/candidato';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formCandidato: FormGroup;
 
  constructor(private http: Http) {
  }
 
  ngOnInit() {
    this.createForm(new Candidato())
  }
 
  createForm(candidato: Candidato) {
    this.formCandidato = new FormGroup({
      nome: new FormControl(candidato.nome),
      cpf: new FormControl (candidato.cpf),
      genero: new FormControl(candidato.genero),
      dataNascimento: new FormControl(candidato.dataNascimento),
      numCelular: new FormControl(candidato.numCelular),
      endereco: new FormControl(candidato.endereco),
      cidade: new FormControl(candidato.cidade),
      estado: new FormControl(candidato.estado),
      estado_civil: new FormControl(candidato.estado_civil),
      escolaridade: new FormControl(candidato.escolaridade),
      conhecimentos: new FormControl(candidato.conhecimentos),
      nivel: new FormControl(candidato.nivel),
      empresa: new FormControl(candidato.empresa),
      cargo: new FormControl(candidato.cargo),
      data_entrada: new FormControl(candidato.data_entrada),
      data_saida: new FormControl(candidato.data_saida),
      descricao: new FormControl (candidato.descricao)
    })
  }

 onSubmit(){
  console.log(this.formCandidato.value);

  this.http.post('https://httpbin.org/post', JSON.stringify(this.formCandidato.value))
  .map(res => res)
  .subscribe(dados => console.log(dados));
 }
}
