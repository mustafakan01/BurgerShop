import React from 'react'
import '../Styles/About.css'
import BannerImage from '../assets/banneryeni.jpg'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}/>
      <div className='abouthBottom'>
        <h1>Hakkımızda</h1>
        <p>Efso Burger: Lezzetin Zirvesi!

Bir burger düşünün ki, her ısırıkta lezzet bombası patlasın, her lokmada damaklarınıza bayram ettirsin. İşte tam da bu noktada Cheddar Soslu Burger devreye giriyor! Sıradanlıktan uzak, enfes tadıyla herkesin favorisi olmaya aday bu lezzet harikası, burger denince aklınıza gelecek ilk isim olacak.

Cheddar Soslu Burger, kaliteli malzemelerin ustaca birleştiği bir başyapıt. İlk bakışta bile iştahınızı kabartacak o yoğun cheddar peyniri sosu, ince dilimlenmiş dana eti, çıtır çıtır taze sebzeler ve taptaze burger ekmeğiyle bir araya geliyor. İşte bu birleşim, sizi her ısırıkta bir lezzet yolculuğuna çıkarıyor.

Bu burgerin sırrı, malzemelerinin tazeliğinden ve özenle hazırlanmasından geliyor. Sulu sulu eti, çıtır sebzeleri ve enfes cheddar peyniri sosuyla bir araya geldiğinde ortaya çıkan muhteşem uyum, tadınıza doyulmaz bir deneyim sunuyor. Etin mükemmel pişirilmiş olması, burgerinizi özel kılan unsurlardan biri. İster tam kıvamında pişmiş eti tercih edin, ister içi hafif pembe kalan eti; Cheddar Soslu Burger, her zevke hitap ediyor.

Ayrıca, yanında servis edilen çıtır çıtır patates kızartmaları ve taze limonlu soğuk içeceğiyle birlikte, bu burger deneyimi tamamlanmış oluyor. Siz sadece rahat bir masa, sıcak bir ortam ve iştahınızı getirin; gerisini Cheddar Soslu Burger hallediyor.</p>
      </div>
    </div>
  )
}
