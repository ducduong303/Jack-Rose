var all = {
    init:function(){
        this.load();
        this.nav();
        this.fixed();
        this.countdown();
        this.filter();
        
    },
    load:function(){
        var load = document.querySelector('.load')
        function loading(){
            load.classList.add('loading');
        }
        setInterval(loading,3000);
    },
    nav:function(){
        var nav = document.querySelector('.nav__list')
        var bar = document.querySelector('.bar')
        bar.addEventListener('click',function(){
            nav.classList.toggle('nav-res')
        })
    },
    fixed:function(){
        var nav = document.querySelector('.header__nav')
        var ontop = document.querySelector('.ontop')
        window.addEventListener('scroll',function(){
            if (window.scrollY > 1) {
                nav.classList.add('fixed');
                ontop.classList.add('hienra')
            }
            else {
                nav.classList.remove('fixed');
                ontop.classList.remove('hienra')
            }
        })
    },
    countdown:function(){
        function count() {
            function number(e){
                if (e < 10) {
                    e = '0' + e;
                    return e;
                }
                else {
                    return e;
                }
                //hàm có chức năng thêm số 0 đằng trước những số < 10
            }
            let countDate = new Date('3/30/2020 00:00:00').getTime();  //lấy ngày cuối
            let now = new Date().getTime(); //lấy ngày hiện tại
            let countDay = countDate - now; //lấy ngày cuối - ngày hiện tại = số ngày cần đếm
    
            let second = 1000;
            let minute = second * 60;
            let hour = minute * 60;
            let day = hour * 24;
    
            let d = Math.floor(countDay / day);
            let h = Math.floor((countDay % day) / hour);
            let m = Math.floor((countDay % hour) / minute);
            let s = Math.floor((countDay % minute) / second);
            
            d = number(d);    
            h = number(h);    
            m = number(m);    
            s = number(s);
    
            day = document.getElementById('day');
            hour = document.getElementById('hours');
            minute = document.getElementById('minute');
            second = document.getElementById('seconds');
    
            if (day === null) return;
    
            day.innerHTML = d;
            hour.innerHTML = h;
            minute.innerHTML = m;
            second.innerHTML = s;
        }
        setInterval(count, 1000);
    },
    filter:function(){
        var btn = document.querySelector('#btn').children;
        var item = document.querySelector('.section-4__center__item__box').children;
        // console.log(item);
        for( var i = 0 ; i < btn.length; i++){
            btn[i].addEventListener('click',function(){
                for ( var k = 0; k < btn.length; k++){
                    btn[k].classList.remove('active')
                }
                this.classList.add('active')   
              
                var taget = this.getAttribute("data-taget");
                for ( var j = 0; j <item.length; j++){
                    item[j].style.display = "none" 
                    item[j].style.transition = 'transform 1s ease-in-out';
                    
                    if(item[j].getAttribute("data-id") == taget){
                        item[j].style.display = "block" 
                    }
                    if( taget == "all"){
                        item[j].style.display = "block" 
                    } 
                }
            })
        }
           
    }
}
all.init();