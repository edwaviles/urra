import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NotificacionPage } from '../notificacion/notificacion.page';
import { VideoPage } from '../video/video.page';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  pasos:any[]=[];
  buscados:any;
  marcas:any[]=[];
  beneficios:any[]=[];
  ultimos:any[]=[];
  
  constructor(private http:HttpClient, private modalController: ModalController) {

    // Cargandon JSON de ultimos productos
    this.http.get<any[]>("../../assets/JSON/ultimoProductos.json").subscribe(data=>{
      this.ultimos=data;
    });

    // Cargando JSON de mas buscados
    this.http.get<any[]>("../../assets/JSON/masBuscados.json").subscribe(data=>{
      this.buscados=data;
    });
    
    // Cargando los pasos
    this.pasos=[
      {"alinear":"1","paso":"1","img":"1","titulo":"Publica lo que quieres comprar","desc":"Proporciona un enlace del producto que quieres comprar de Amazon, Apple o tu tienda online favorita."},
      {"alinear":"2","paso":"2","img":"2","titulo":"Recibe las mejores ofertas","desc":"Los viajeros de la comunidad que se dirigen a tu país te harán ofertas de entrega y tú podrás elegir la que más te convenga y acéptarla."},
      {"alinear":"1","paso":"3","img":"3","titulo":"Pago seguro","desc":"Para aceptar la oferta de entrega de un viajero, paga tu pedido con tu tarjeta y Urra retendrá el pago de forma segura hasta que recibas tu pedido. El viajero comprará tu pedido con su dinero y Urra se lo reembolsará hasta que confirmes la entrega."},
      {"alinear":"2","paso":"4","img":"4","titulo":"Encuéntrate con tu viajero para entregar el producto","desc":"Elige un lugar recomendado por Urra para entregar tu producto al viajero."}
    ];


    // Cargando las marcas
    this.marcas=[
      {"url":"#","img":"1.png"},
      {"url":"#","img":"2.png"},
      {"url":"#","img":"3.png"},
      {"url":"#","img":"4.png"},
    ];

    // Cargando los beneficios
    this.beneficios=[
      {"img":"1.png","titulo":"Pagos seguros","desc":"Con Urra tu dinero está seguro en todo momento y tienes tu reembolso garantizado."},
      {"img":"2.png","titulo":"Entrega garantizada","desc":"Si un viajero cancela tu pedido trataremos de encontrar un nuevo viajero para tí. Si entrega un producto en malas condiciones, procesaremos un reembolso completo de este."},
      {"img":"3.png","titulo":"Múltiples opciones de pago ","desc":"Para hacer tu vida más fácil, aceptamos una variedad de métodos de pago como Visa, MasterCard y American Express, con más opciones pronto disponibles."},
      {"img":"4.png","titulo":"Rastreo de tu compra","desc":"Controla tu compra en todo momento con el rastreo integrado para cada pedido."},
      {"img":"5.png","titulo":"Usuarios confiables","desc":"En Urra la confianza es nuestra mayor prioridad y trabajamos duro para asegurar que nuestra comunidad trate a todos sus miembros con el mayor respeto."},
      {"img":"6.png","titulo":"Soporte 24/7","desc":"Nuestro equipo de profesionales de atención al cliente están a tu disposición para resolver cualquier inconveniente que pueda surgir durante todo el proceso de compra."},
    ];

  }

 

  async notificacion() {
    const modal = await this.modalController.create({
      component: NotificacionPage
    });
    return await modal.present();
  }

  async urraVideo(){
    const modal = await this.modalController.create({component:VideoPage})
    return await modal.present();
  }

} 


