let input = require("readline-sync");
console.log("Jinsee's Dhaba\n");
console.log('\n1. Sunday\n2. Monday\n3. Tuesday\n4. Wednesday\n5. Thursday\n6. Friday\n7. Saturday');
let day = (input.question('Enter Day -'));
if (day == 1) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You");
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra money" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.question('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.questionInt('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You");
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra money" + extra);
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You");
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra money" + extra);
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }
}else if (day == 2) {
    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. chana kulcha-40$\n2.upma-30$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log(" chana kulcha-40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("2.upma-30$");
            console.log("1.half plate - 15$\n2. Full plate - 30$");
            let price = (input.questionInt('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 15) {
                    console.log("Thank You");
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("keep your extra money" + extra);
                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 30$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 30) {
                    console.log("Thank You");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }else if (time == 2) {
        console.log('1.Aloo gobi with paratha- 80$\n2.Chana masala with rice- 90$\n3. Mixed vegetable curry with roti- 70$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1.Aloo gobi with paratha- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("2.Chana masala with rice- 90$");
            console.log("1.half plate - 45$\n2. Full plate - 90$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==45) {
                    console.log("Thank You");
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("keep your extra money" + extra);
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 90$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 90) {
                    console.log("Thank You");
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }else if (dish == 3) {
            console.log("Mixed vegetable curry with roti- 60$");
            console.log("1.half plate - 30$\n2. Full plate - 60$");
            let price = (input.questionInt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==30) {
                    console.log("Thank You");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 60) {
                    console.log("Thank You");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Pav bhaji- 60$\n2. Kadhai paneer with roti- 100$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1){
            console.log("1.Pav bhaji - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } if (dish == 2) {
            console.log("2. Kadhai paneer with roti- 100$");
            console.log("1. half plate - 50$\n2. Full plate - 100$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 50) {
                    console.log('Thank you');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -100$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 100) {
                    console.log('Thank You');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra money" + extra);
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } 
    }
}else if (day == 3) {
    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. puri bhaji- 40$\n2.Dhokla- 30$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("puri bhaji- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay ==  20) {
                    console.log('Thank you');
                } else if (pay >  20) {
                    let extra = pay -  20;
                    console.log("Keep your extra money" + extra);

                } else if (pay <  20) {
                    let less =  20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay >40) {
                    let extra = pay -40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("2.Dhokla- 30$");
            console.log("1.half plate - 15$\n2. Full plate - 30$");
            let price = (input.questionInt('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 15) {
                    console.log("Thank You");
                } else if (pay >15) {
                    let extra = pay - 15;
                    console.log("keep your extra money" + extra);
                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 30$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 30) {
                    console.log("Thank You");
                } else if (pay >30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less =30- pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        }
    }else if (time == 2) {
        console.log('1. Bhindi masala with roti- 90$\n2.veg pulao- 80$\n3. Aloo matar with roti- 80$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1.Bhindi masala with roti- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
            }
        } else if (dish == 2) {
            console.log("2.Veg pulao- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }

                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay >80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Aloo matar with roti- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Dal makhani with naan- 110$\n2. paneer tikka with roti- 120$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1){
            console.log("1.Dal makhani with naan- 110$");
            console.log("1. half plate - 105$\n2. Full plate - 110$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1){
                console.log('1. half plate - 105$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay ==105) {
                    console.log('Thank you');
                } else if (pay > 105) {
                    let extra = pay - 105;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 105) {
                    let less = 105 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -110$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 110) {
                    console.log('Thank You');
                } else if (pay > 110) {
                    let extra = pay - 110;
                    console.log("keep your extra money" + extra);
                } else if (pay < 110) {
                    let less = 110 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Paneer tikka with roti- 120$");
            console.log("1. half plate - 60$\n2. Full plate - 120$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 60$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 60) {
                    console.log('Thank you');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -120$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 120) {
                    console.log('Thank You');
                } else if (pay >120) {
                    let extra = pay - 120;
                    console.log("keep your extra money" + extra);
                } else if (pay < 120) {
                    let less = 120 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } 
    }
}else if (day == 4) {
    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. poha- 30$\n2.Masala Dosa- 60$\n3.Paratha with curd- 40$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1.poha- 30$");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Masala Dosa-60$");
            console.log("1.half plate - 30$\n2. Full plate - 30$");
            let price = (input.questionInt('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 30) {
                    console.log("Thank You");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 60$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 60) {
                    console.log("Thank You");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money" + extra);
                } else if (pay < 60) {
                    let less = 60- pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Paratha with curd- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Aloo palak with roti- 90$\n2.Sambar rice- 600$\n3. Methi thepla- 50$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1. Aloo palak with roti- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Sambar rice- 60$");
            console.log("1.half plate - 30$\n2. Full plate - 60$");
            let price = (input.questionInt('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==30) {
                    console.log("Thank You");
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra money" + extra);
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 60$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 60) {
                    console.log("Thank You");
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra money" + extra);
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }else if (dish == 3) {
            console.log("3. Methi thepla- 50$");
            console.log("1.half plate - 25$\n2. Full plate - 50$");
            let price = (input.questionnt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 25$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==25) {
                    console.log("Thank You");
                } else if (pay > 25) {
                    let extra = pay - 25;
                    console.log("keep your extra money" + extra);
                } else if (pay < 25) {
                    let less = 25 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionUint('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 50$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay ==50) {
                    console.log("Thank You");
                } else if (pay >50) {
                    let extra = pay - 50;
                    console.log("keep your extra money" + extra);
                } else if (pay <50) {
                    let less = 50- pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.veg hakka noodles- 90$\n2. Chole chawal- 80$');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1){
            console.log("1.veg hakka noodles- 90$");
            console.log("1. half plate -45$\n2. Full plate - 90$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1){
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Chole Chawal - 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } 
    }
} else if (day == 5) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.chapati');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("chapati");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionint('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Kadhi Chawal\n2.Palak Paneer with Roti');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("1.Kadhi chawal");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Palak Paneer with Roti");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('1. Veg Manchurian with Fried Rice \n2.Aloo Baingan with Roti ');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Baingan with Roti");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }
}else if (day == 6) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. Aloo Sandwich \n2.Moong Dal Chilla ');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Aloo sandwich");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Moong Dal Chilla ");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1.Dal Chawal \n2.Chole with Bhature');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Dal chawal");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Chole with Bhature");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('1. Veg Kofta with Rice\n2.Kadhai Mushroom with Roti');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Veg kofta with rice");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Kadhai Mushroom with Roti");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }
}else if (day == 7) {
    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.questionInt('enter your time-'));
    if (time == 1) {
        console.log('1. Sabudana Khichdi\n2.Veg Sandwich');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Sabudana khichdi");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Veg Sandwich");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1.Aloo Tamatar with Rice \n2.Rajma with Roti ');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Aloo tamatar with rice");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Rajma with Roti ");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('1. Malai Kofta with Naan\n2.Pav Bhaji ');
        let dish = (input.questionInt("enter your dish -"));
        if (dish == 1) {
            console.log("Malai kofta with naan");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.questionInt('enter your price:-'));

            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra money" + extra);

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Pav Bhaji ");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.questionInt('Enter your price-'))
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 40) {
                    console.log("Thank You");
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra money" + extra);
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You");
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra money" + extra);
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more money" + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra money" + extra);
                    }else if (secondpay< less ){
                        let less3 =  secondpay + pay;
                        console.log('Keep your money' + less3 );
                        console.log("Your ouder is cancel");
                    }
                }
            }
        }
    }
}