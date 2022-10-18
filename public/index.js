setTimeout(()=>{
    const canvas = document.querySelector('canvas');
    setTimeout(()=> {
        let ctx = canvas.getContext("2d");
        console.log(window.innerWidth)
        canvas.width =  1500;
        canvas.height = 4700;
        if(window.innerWidth < 1200 && window.innerWidth > 800){
            canvas.width =  1000;
        canvas.height = 4000;
        }else if(window.innerWidth < 800 && window.innerWidth > 600){
            canvas.width =  1000;
        canvas.height = 5000;
        }else if(window.innerWidth < 600 && window.innerWidth > 400){
            canvas.width =  1000;
            canvas.height = 6500;
        }else if(window.innerWidth < 400 && window.innerWidth > 300){
            canvas.width =  800;
            canvas.height = 7500;
        }
        let mass = "1234567890!@#$%^&*()_+QWERTYUOP{}ASDFGHJKL:|ZXCVBNM<>?~`HELLO Iam Konstantin Busharov";
        mass = mass.split("");
        let font_size = 30;
        let collums = canvas.width/font_size;
        const drops = [];
        for(let x = 0; x< collums; x++){
            drops[x] = 1;
        }
        function draw(){
            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0,0, canvas.width, canvas.height);
    
            ctx.fillStyle = "rgb(0 222 98)";
            ctx.font = font_size + "px arial";
    
            for(let i =0; i<drops.length; i++){
                let text = mass[Math.floor(Math.random()*mass.length)];
                ctx.fillText(text, i*font_size, drops[i]*font_size);
                if(drops[i]*font_size > canvas.height && Math.random()> 0.975){
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 25);
    },111)
}, 0) 