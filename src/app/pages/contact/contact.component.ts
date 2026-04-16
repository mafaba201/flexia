import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    comments: ''
  };

  errors: any = {};
  isSubmitting = false;
  showSuccess = false;

  validateField(field: string, value: string) {
    this.errors[field] = '';
    
    if (!value.trim()) {
      this.errors[field] = 'Este campo es requerido';
      return false;
    }

    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.errors[field] = 'Ingresa un correo válido';
        return false;
      }
    }

    if (field === 'phone' && value) {
      const phoneRegex = /^\+?[\d\s\-()]+$/;
      if (!phoneRegex.test(value)) {
        this.errors[field] = 'Ingresa un teléfono válido';
        return false;
      }
    }

    return true;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    
    const nameValid = this.validateField('name', this.formData.name);
    const emailValid = this.validateField('email', this.formData.email);
    const commentsValid = this.validateField('comments', this.formData.comments);
    
    if (this.formData.phone) {
      this.validateField('phone', this.formData.phone);
    }

    if (nameValid && emailValid && commentsValid) {
      this.isSubmitting = true;
      
      setTimeout(() => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.formData = { name: '', email: '', phone: '', comments: '' };
        
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      }, 2000);
    }
  }
}