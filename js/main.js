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
                visible: false,
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
                visible: false,
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
                visible: false,
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
                visible: false,
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
        
        activeIndex: 0,
        newMessage: {
            date: null,
            message: '',
            status: 'sent'
        },
        ricerca: '',
        risposte: [
            'Non mi va.',
            'Va bene!',
            'Non scrivermi più, tra noi è finita',
            'Ciao!',
            'Ho vohlia di fare un giro',
            'Quanto tempo!!, come stai?',
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
        inviaMessaggio(){
            console.table(this.contatti[this.activeIndex].name);

            
            this.contatti[this.activeIndex].messages.push(
                {
                    date: this.newMessage.date,
                    message: this.newMessage.text,
                    status: this.newMessage.status,
                }
            );
            
            //
            // this.newMessage.date =
            // this.newMessage.text,
            // this.newMessage.status = 'received';
            

            //     console.log(numero);
            const numero = this.numeroRandom(0, (this.risposte.length - 1))
            setTimeout(() =>

            

            this.contatti[this.activeIndex].messages.push(

                {
                    date: this.newMessage.date,
                    message: this.risposte[numero],
                    status: 'received', 
                }

            )      
            ,2000);

            this.newMessage.text = '';
        },
        // timerAnswer(){

        // },
        
        // risposta(){
        //     const lunghezza = this.risposte.length;
        //     setTimeout(function(){

        //         const numero = this.numeroRandom(0, (this.risposte.length - 1));

        //         console.log(numero);

        //         this.contatti[this.activeIndex].messages.push(

        //             {
        //                 date: this.newMessage.date,
        //                 message: this.risposte[numero],
        //                 status: 'received', 
        //             }

        //         );

        //     },3000);
        // },
        numeroRandom(min, max) {
            
            return Math.floor( Math.random() * (max - min + 1) ) + min;
 
         },
         search(){
             console.log(this.ricerca);
            //  const parola = this.contatti.name.includes(ricerca);

             const results = this.contatti.filter((element)  => {
                 
                return element.name.includes(this.ricerca)

             });
             console.table(results);
         },
    }
});