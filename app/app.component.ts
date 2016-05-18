import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
@Component({
  selector: 'transparent-navbar',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <div class="p-y-lg p-x" style="background: #a1a1a1 top center; background-size: cover">
      <nav class="navbar navbar-transparent m-b-0">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-com">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">
              <h4 class="text-uppercase m-y-0">Clean-X</h4>
            </a>
          </div>
          <div class="navbar-collapse collapse" id="navbar-collapse-com">
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a [routerLink]="['SpecialOffers']">Hjem</a></li>
              <li><a [routerLink]="['About']">Om Oss</a></li>
              <li><a [routerLink]="['Contact']">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  `
})
class TransparentNavBar{
  constructor(){
  }
}

@Component({
  selector: 'slogan',
  template: `
    <div class="row m-b-lg">
      <div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
        <h6 class="text-muted text-uppercase">Business Talk</h6>
        <h3  class="m-t-0">No plans. We just bump your plan whenever you need it.</h3>
      </div>
    </div>
  `
})
class Slogan{
  constructor(){

  }
}


@Component({
  selector: 'offer',
  directives: [],
  inputs: [
    'title',
    'price',
    'description',
    'firstLine',
    'secondLine',
    'thirdLine'
  ],
  template: `
    <div class="col-sm-4 p-x m-b-lg">
      <div class="p-x">
        <h6 class="text-muted text-uppercase m-b">{{ title }}</h6>
        <p class="m-b">{{ price + 'kr'}}</p>
        <p>{{ description }}</p>
      </div>

      <ul class="list-unstyled list-bordered text-left m-y-md">
        <li class="p-y">{{ firstLine }}</li>
        <li class="p-y">{{ secondLine }}</li>
        <li class="p-y">{{ thirdLine }}</li>
      </ul>

      <button class="btn btn-lg btn-primary btn-block">
        Se detaljer
      </button>
    </div>
  `
})
class Offer{
  title: string;
  price: number;
  description: string;
  firstLine: string;
  secondLine: string;
  thirdLine: string;

  constructor(){ 
  } 
}

@Component({
  selector: 'special-offers',
  directives: [Offer, Slogan],
  template:`
    <div class="block app-price-plans">
      <div class="container text-center">

        <slogan></slogan>

        <div class="block block-secondary app-block-marketing-grid special-offers background">
          <div class="container text-center">
            <div class="row">
              <offer 
                [title]="'Flyttevask'" 
                [price]="0"
                [description]="'Her kommer en beskrivelse'" 
                [firstLine]="'Her er første linje'" 
                [secondLine]="'Her kommer andre'" 
                [thirdLine]="'Siste'"> 
              </offer> 
              <offer 
                [title]="'Visningsvask'" 
                [price]="0"
                [description]="'Her kommer en beskrivelse'" 
                [firstLine]="'Her er første linje'" 
                [secondLine]="'Her kommer andre'" 
                [thirdLine]="'Siste'"> 
              </offer> 
              <offer 
                [title]="'Kontor og Bygg'" 
                [price]="0"
                [description]="'Her kommer en beskrivelse'" 
                [firstLine]="'Her er første linje'" 
                [secondLine]="'Her kommer andre'" 
                [thirdLine]="'Siste'"> 
              </offer> 
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
class SpecialOffers {
  constructor(){
     
  }
}

@Component({
  selector: 'about',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="text-center">Om Oss</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <h2>Produkter</h2>
        </div>
      </div>
      
    </div>
  `
})
class AboutComponent{
}

@Component({
  selector: 'Contact',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1 class="text-center">Kontakt oss</h1>
      </div>
    </div>
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-xs-2 control-label">Henvendelsen gjelder:</label>
        <div class="col-lg-10">
          <label class="checkbox-inline">
            <input type="checkbox" id="subjectInspection" value="inspection">Befaring
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="subjectOrder" value="order">Bestilling
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="subjectEstimate" value="estimate">Prisanslag
          </label>
          <label class="checkbox-inline">
            <input type="checkbox" id="subjectOther" value="other">Annet
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="name" class="col-xs-2 control-label">Navn:</label>
        <div class="col-xs-5">
          <input type="text" class="form-control" id="name">
        </div>
      </div>
      <div class="form-group">
        <label for="phone" class="col-xs-2 control-label">Telefonnummer:</label>
        <div class="col-xs-5">
          <input type="text" class="form-control" id="phone">
        </div>
      </div>
      <div class="form-group">
        <label for="email" class="col-xs-2 control-label">Epost:</label>
        <div class="col-xs-5">
          <input type="text" class="form-control" id="email">
        </div>
      </div>
      <div class="form-group">
        <label class="col-xs-2 control-label">Jeg ønsker å kontaktes på:</label>
        <div class="col-xs-10">
          <label class="radio-inline">
            <input type="radio" name="replyRadio" id="radioPhone" value="phone">Telefon
          </label>
          <label class="radio-inline">
            <input type="radio" name="replyRadio" id="radioPhone" value="email">Epost
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="message" class="col-xs-2 control-label">Melding:</label>
        <div class="col-xs-5">
          <textarea class="form-control" id="message" rows="5"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-2 col-xs-10">
          <button class="btn btn-default">Nullstill</button>
          <button class="btn btn-default">Send</button>
        </div>
      </div>
    </form>
  </div>
  `
})
class ContactComponent{
}

@Component({
  selector: 'footer',
  template: `
    <div class="block block-inverse app-footer">
     <div class="container">
        <div class="row">
          <div class="col-sm-5 m-b-md">
            <ul class="list-unstyled list-spaced">
              <li class="m-b"><h6 class="text-uppercase">Om Oss</h6></li>
              <li class="text-muted">
                Clean-X Renhold er ett renholdsfirma som holder til i Nesodden kommune.
                Jeg etablerte firmaet i 2014 som ett enkeltmannsforetak.
                Vasker kun innefor Follo.
              </li>
            </ul>
          </div>
          <div class="col-sm-3 col-sm-offset-1 m-b-md">
            <ul class="list-unstyled list-spaced">
              <li class="m-b"><h6 class="text-uppercase">Daglig Leder</h6></li>
              <li class="text-muted">Mona Irèn Børtveit</li>
              <li class="text-muted">
                Kveldsroveien 9 <br />
                1454 Fagerstrand <br />
                NORWAY
              </li>
              <li class="text-muted"><a href="mailto: firmapost@clean-x.no">firmapost@clean-x.no</a></li>
              <li class="text-muted">+47 90 92 38 72</li>
            </ul>
          </div>
          <div class="col-sm-3 m-b-md">
            <img class="img-circle img-responsive" src="assets/img/mona-iren.jpg">
          </div>
        </div>
      </div>
    </div>
  `
})
class Footer{
  constructor(){
  }
}

@Component({
    selector: 'my-app',
    directives: [TransparentNavBar, Footer, SpecialOffers, ROUTER_DIRECTIVES],
    template: `
    <transparent-navbar></transparent-navbar>
    <router-outlet></router-outlet>
    <footer></footer>
`
})
@RouteConfig([
  {path: '/', name: 'root', redirectTo:['/SpecialOffers']},
  {path: '/special-offers', name:'SpecialOffers', component: SpecialOffers},
  {path: '/about', name: 'About', component: AboutComponent},
  {path: '/contact', name: 'Contact', component: ContactComponent}
])
export class AppComponent { }
