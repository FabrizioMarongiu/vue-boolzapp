// dayjs.extend(day_js_plugin_customParseFormat);

dayjs.locale('it');

const app = new Vue ({
    el: '#app',

    data:{
        // USER
        user:{
            name: 'Fabrizio Marongiu',
            avatar: '_io',
        },
        contatti: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        // INDICE DINAMICO
        activeIndex: 0,
        // OGGETTO DA INSERIRE PER INVIARE UN MESSAGGIO
        newMessage: {
            date: '10/05/2014',
            message: '',
            status: 'sent'
        },
        // STRINGA CHE VIENE UTILIZZATA PER ESEGUIRE LA RICERCA
        ricerca: '',
        // ARRAY DI RISPOSTE RANDOM
        risposte: [
            'Non mi va...',
            'Va bene!',
            'Non scrivermi più, tra noi è finita!',
            'Ciao!',
            'Ho voglia di fare un giro',
            'Quanto tempo!! Come stai?',
            'Ti va di fare un giro?',
            'Aperitivo stasera?'
        ],
    },
    
    methods: {
        // FUNZIONE PER PERMETTERE DI SELEZIONARE AL CLICK UN CONTATTO
        
        visualChat(index){
            console.log(index);
            
            this.activeIndex = index;
            console.log(this.activeIndex);
        },
        // FUNZIONE CHE PERMETTE DI INVIARE UN MESSAGGIO

        inviaMessaggio(){
            // console.table(this.contatti[this.activeIndex].name);
            let orario = dayjs().format('DD/MM/YYYY - HH:mm');

            this.contatti[this.activeIndex].messages.push(
                {
                    date: orario,
                    message: this.newMessage.text,
                    status: this.newMessage.status,
                }
            );
            
            this.risposta();
            
            this.finePagina()

            this.newMessage.text = '';
        },
        // timerAnswer(){

        // },
        
        risposta(){
            
            let orario = dayjs().format('DD/MM/YYYY - HH:mm');

            const numero = this.numeroRandom(0, (this.risposte.length - 1))
            setTimeout(() =>

            

            this.contatti[this.activeIndex].messages.push(

                {
                    date: orario,
                    message: this.risposte[numero],
                    status: 'received', 
                }

            )      
            ,2000);

        },

        // FUNZIONE PER CREARE NUMERI RANDOM

        numeroRandom(min, max) {
            
            return Math.floor( Math.random() * (max - min + 1) ) + min;
 
         },
        //  FUNZIONE DI RICERCA DI UN UTENTE NELLA RUBRICA

         search(){
            
             this.contatti.forEach((element) => {
            let parola = this.ricerca.toLowerCase().trim();

                if(!element.name.toLowerCase().trim().includes(parola)){
                    console.log(element.visible);
                    element.visible = false
                }else{
                    element.visible = true;
                };
             })
         },
        //  FUNZIONE PER AVERE LO SCROLL AUTOMATICO A FINE PAGINA
        finePagina(){

            let w = window.screen.width;
            let h = window.screen.height;
            window.scrollTo ( w * h, w * h);

            console.log(w + " - " + h);

        },
    }
});