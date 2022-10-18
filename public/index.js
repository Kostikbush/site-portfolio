setTimeout(()=>{
    const canvas = document.querySelector('canvas');
    setTimeout(()=> {
        let ctx = canvas.getContext("2d");
        canvas.width = 150;
        canvas.height = document.documentElement.clientHeight;
        let mass = "1234567890!@#$%^&*()_+QWERTYUOP{}ASDFGHJKL:|ZXCVBNM<>?~`HELLO Iam Konstantin Busharov";
        mass = mass.split("");
        let font_size = 10;
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
        setInterval(draw, 44);
    },111)
}, 0) 