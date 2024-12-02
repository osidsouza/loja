import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciSenhaComponent } from './esqueciSenha/esqueciSenha.component';


export const routes: Routes = [
    {path:"cadastro",component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path:"detalhe", component:DetalheComponent},
    {path:"pesquisa", component:PesquisaComponent},
    {path:"esqueciSenha", component:EsqueciSenhaComponent},
    {path:"cesta", component:CestaComponent},
    { path: 'detalhe/:id', component: DetalheComponent },    
    { path: '', redirectTo: '/vitrine', pathMatch: 'full' },       // Redireciona para a vitrine por padrão
    { path: '**', redirectTo: '/vitrine' }      
];
