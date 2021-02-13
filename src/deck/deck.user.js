window.cjp = require('cjp')
;let g=t=>document.querySelector(t)
    ,a=(d,e,f)=>d.addEventListener(e,f)
    ,i=()=>{
        let b=g('.js-compose-text')
        ;if(!b)return
        ;let c=g('.js-send-button-container')
            ,p=c.parentNode
        ;for(m of p.children){
            if(m.classList.contains('cjp'))return
        }
        let n=document.createElement('button')
            ,t=()=>{
                b.value=cjp.generate(b.value)
                ;n.classList.add('is-disabled')
                ;b.dispatchEvent(new Event('input'))
            }
            ,s='btn-extra-height'
            ;n.innerText='怪日语'
            ;n.setAttribute('data-original-title','贵樣！')
            ;n.classList.add('cjp','Button--secondary','js-show-tip','is-disabled')
            ;for(m of c.children){
                if(m.classList.contains(s))n.classList.add(s,'padding-v--6','padding-h--12')
            }
            a(n,'click',t)
            ;a(b,'input',()=>{
                if(b.value){n.classList.remove('is-disabled')}else{n.classList.add('is-disabled')}
            })
            ;p.insertBefore(n,c)
        }
;a(document,'keydown',i)
;a(document,'pointerdown',i)
