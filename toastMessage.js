import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ToastContainer from 'lightning/toastContainer';
export default class ToastMessage extends LightningElement {


    // =>Top Left
    // =>Top Right
    // =>Top Center
    // =>Bottom Left
    // =>Bottom Right
    // =>Bottom Center

    connectedCallback(){
        const toastContainer = ToastContainer.instance();
        toastContainer.maxShown = 3;
        toastContainer.toastPosition = 'bottom-right';
    } 


    showErrorHandle(){
        const evt = new ShowToastEvent({
            title:'Error',
            message:'Error occure when click the button',
            variant : 'error',
            mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showSuccessHandle(){
        const evt = new ShowToastEvent({
            title:'Success',
            message:'Your button clicked successfully!',
            variant : 'success',
            mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showWarningHandle(){
        const evt = new ShowToastEvent({
            title:'Warning',
            message:'before click button make sure you have import toast message.',
            variant : 'warning',
            mode:'pester'
        });
        this.dispatchEvent(evt);
    }

    showInfoHandle(){
        const evt = new ShowToastEvent({
            title:'Infor',
            message:'Toast message is show for user to confirmation!',
            variant : 'info',
            mode:'pester'
        });
        this.dispatchEvent(evt);
    }
}