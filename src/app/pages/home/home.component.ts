import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedService: any = null;

  companyInfo = {
    name: 'FLUXIA',
    heroTitle: 'Software inteligente para desafíos reales.',
    heroSubtitle: 'Expertos en desarrollo y automatización a medida. Convertimos tus datos en ventajas competitivas.',
    heroCta: 'Hablemos de tu proyecto',
    tagline: 'Innovación e Inteligencia Artificial',
    description: 'Somos una empresa líder en desarrollo tecnológico e implementación de soluciones de IA para transformar procesos empresariales.',
    services: [
      {
        title: 'Desarrollo de Software',
        description: 'Soluciones personalizadas adaptadas a tus necesidades específicas.',
        icon: '💻',
        details: {
          subtitle: 'Desarrollamos soluciones digitales donde la calidad técnica se encuentra con la eficiencia operativa.',
          features: [
            { title: 'Omnicanalidad', desc: 'Tu software presente en Web, Móvil y Escritorio.' },
            { title: 'Entrega Ágil', desc: 'Procesos internos automatizados que eliminan tiempos muertos.' },
            { title: 'Alta Tecnología', desc: 'Código limpio y escalable mediante herramientas de vanguardia.' }
          ]
        }
      },
      {
        title: 'Automatización de Procesos',
        description: 'Implementación de IA para automatizar y optimizar tus procesos.',
        icon: '🤖',
        details: {
          subtitle: 'Libera a tu equipo de las tareas repetitivas. Implementamos flujos de trabajo inteligentes que conectan tus herramientas del día a día para que la información fluya sola.',
          features: [
            { title: 'Ventas y Clientes', desc: 'Cuando un cliente te contacta por tu web, se guarda automáticamente en tu base de datos y le envía un mensaje de bienvenida por WhatsApp o correo al instante.' },
            { title: 'Control de Gastos y Facturas', desc: 'Al recibir una factura en tu email, el sistema extrae los datos y los organiza automáticamente en una hoja de cálculo o en tu sistema contable.' },
            { title: 'Gestión de Citas y Reservas', desc: 'Sincroniza tus formularios de reserva con tu calendario y envía recordatorios automáticos a los clientes para reducir las inasistencias.' },
            { title: 'Reportes de Ventas Diarios', desc: 'Recibe cada mañana un resumen automático en tu móvil con las ventas del día anterior, sin tener que entrar a revisar diferentes plataformas.' },
            { title: 'Orden en el Inventario', desc: 'Si el stock de un producto baja de cierto límite, el sistema crea automáticamente una alerta o un borrador de pedido para tu proveedor.' }
          ],
          benefits: [
            { title: 'Cero Errores', desc: 'Olvídate de los datos mal anotados o correos olvidados.' },
            { title: 'Ahorro de Tiempo', desc: 'Recupera horas de trabajo administrativo cada semana.' },
            { title: 'Escalabilidad', desc: 'Atiende a más clientes con la misma estructura que tienes hoy.' }
          ]
        }
      },
      {
        title: 'Consultoría Tech',
        description: 'Asesoría experta para tu estrategia tecnológica.',
        icon: '📋',
        details: {
          subtitle: 'Analizamos cómo trabajas hoy para identificar los "cuellos de botella" que te quitan tiempo y dinero.',
          features: [
            { title: 'Diagnóstico de Procesos', desc: 'Analizamos cómo trabajas hoy para identificar los "cuellos de botella" que te quitan tiempo y dinero.' },
            { title: 'Selección de Herramientas', desc: 'No necesitas todas las aplicaciones del mercado, solo las correctas. Te ayudamos a elegir las que mejor se adaptan a tu presupuesto y necesidades.' },
            { title: 'Estrategia de IA y Automatización', desc: 'Te mostramos exactamente dónde la Inteligencia Artificial puede marcar una diferencia real en tu operación diaria.' },
            { title: 'Hoja de Ruta Personalizada', desc: 'Creamos un plan de implementación paso a paso, asegurándonos de que cada cambio tecnológico sea una inversión, no un gasto.' }
          ]
        }
      }
    ],
    contact: {
      email: 'contacto@fluxia.com',
      phone: '+52 (55) 1234-5678',
      address: 'Ciudad de México, México'
    }
  };

  selectService(service: any) {
    this.selectedService = service;
    setTimeout(() => {
      const detailsEl = document.getElementById('service-details');
      if (detailsEl) {
        const navHeight = 120;
        const elementPosition = detailsEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  }

  closeModal() {
    this.selectedService = null;
  }
}