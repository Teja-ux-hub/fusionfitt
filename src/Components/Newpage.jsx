import React from 'react'

function Newpage() {
  return (
    <div >
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n        body{\n            margin: 0;\n            background-color: #F4F4F4;\n            font-family: Poppins;\n        }\n        :root{\n            --item1-transform: translateX(-100%) translateY(-5%) scale(1.5);\n            --item1-filter: blur(30px);\n            --item1-zIndex: 11;\n            --item1-opacity: 0;\n        \n            --item2-transform: translateX(0);\n            --item2-filter: blur(0px);\n            --item2-zIndex: 10;\n            --item2-opacity: 1;\n        \n            --item3-transform: translate(50%,10%) scale(0.8);\n            --item3-filter: blur(10px);\n            --item3-zIndex: 9;\n            --item3-opacity: 1;\n        \n            --item4-transform: translate(90%,20%) scale(0.5);\n            --item4-filter: blur(30px);\n            --item4-zIndex: 8;\n            --item4-opacity: 1;\n            \n            --item5-transform: translate(120%,30%) scale(0.3);\n            --item5-filter: blur(40px);\n            --item5-zIndex: 7;\n            --item5-opacity: 0;\n        }\n        header{\n            width: 1140px;\n            max-width: 90%;\n            display: flex;\n            justify-content: space-between;\n            margin: auto;\n            height: 50px;\n            align-items: center;\n        }\n        header .logo{\n            font-weight: bold;\n        }\n        header nav a{\n            margin-left: 30px;\n            text-decoration: none;\n            color: #555;\n            font-weight: 500;\n        }\n        \n        /* carousel */\n        .carousel{\n            position: relative;\n            height: 800px;\n            overflow: hidden;\n            margin-top: -50px;\n        }\n        .carousel .list{\n            position: absolute;\n            width: 1140px;\n            max-width: 90%;\n            height: 80%;\n            left: 50%;\n            transform: translateX(-50%);\n        }\n        .carousel .list .item{\n            position: absolute;\n            left: 0%;\n            width: 70%;\n            height: 100%;\n            font-size: 15px;\n            transition: left 0.5s, opacity 0.5s, width 0.5s;\n        }\n        .carousel .list .item:nth-child(n + 6){\n            opacity: 0;\n        }\n        .carousel .list .item:nth-child(2){\n            z-index: 10;\n            transform: translateX(0);\n        }\n        .carousel .list .item img{\n            width: 50%;\n            position: absolute;\n            right: 0;\n            top: 50%;\n            transform: translateY(-50%);\n            transition: right 1.5s;\n        }\n        \n        .carousel .list .item .introduce{\n            opacity: 0;\n            pointer-events: none;\n        }\n        .carousel .list .item:nth-child(2) .introduce{\n            opacity: 1;\n            pointer-events: auto;\n            width: 400px;\n            position: absolute;\n            top: 50%;\n            transform:  translateY(-50%);\n            transition: opacity 0.5s;\n        }\n        .carousel .list .item .introduce .title{\n            font-size: 2em;\n            font-weight: 500;\n            line-height: 1em;\n        }\n        .carousel .list .item .introduce .topic{\n            font-size: 4em;\n            font-weight: 500;\n        }\n        .carousel .list .item .introduce .des{\n            font-size: small;\n            color: #5559;\n        }\n        .carousel .list .item .introduce .seeMore{\n            font-family: Poppins;\n            margin-top: 1.2em;\n            padding: 5px 0;\n            border: none;\n            border-bottom: 1px solid #555;\n            background-color: transparent;\n            font-weight: bold;\n            letter-spacing: 3px;\n            transition: background 0.5s;\n        }\n        .carousel .list .item .introduce .seeMore:hover{\n            background: #eee;\n        }\n        .carousel .list .item:nth-child(1){\n            transform: var(--item1-transform);\n            filter: var(--item1-filter);\n            z-index: var(--item1-zIndex);\n            opacity: var(--item1-opacity);\n            pointer-events: none;\n        }\n        .carousel .list .item:nth-child(3){\n            transform: var(--item3-transform);\n            filter: var(--item3-filter);\n            z-index: var(--item3-zIndex);\n        }\n        .carousel .list .item:nth-child(4){\n            transform: var(--item4-transform);\n            filter: var(--item4-filter);\n            z-index: var(--item4-zIndex);\n        }\n        .carousel .list .item:nth-child(5){\n            transform: var(--item5-transform);\n            filter: var(--item5-filter);\n            opacity: var(--item5-opacity);\n            pointer-events: none;\n        }\n        /* animation text in item2 */\n        .carousel .list .item:nth-child(2) .introduce .title,\n        .carousel .list .item:nth-child(2) .introduce .topic,\n        .carousel .list .item:nth-child(2) .introduce .des,\n        .carousel .list .item:nth-child(2) .introduce .seeMore{\n            opacity: 0;\n            animation: showContent 0.5s 1s ease-in-out 1 forwards;\n        }\n        @keyframes showContent{\n            from{\n                transform: translateY(-30px);\n                filter: blur(10px);\n            }to{\n                transform: translateY(0);\n                opacity: 1;\n                filter: blur(0px);\n            }\n        }\n        .carousel .list .item:nth-child(2) .introduce .topic{\n            animation-delay: 1.2s;\n        }\n        .carousel .list .item:nth-child(2) .introduce .des{\n            animation-delay: 1.4s;\n        }\n        .carousel .list .item:nth-child(2) .introduce .seeMore{\n            animation-delay: 1.6s;\n        }\n        /* next click */\n        .carousel.next .item:nth-child(1){\n            animation: transformFromPosition2 0.5s ease-in-out 1 forwards;\n        }\n        @keyframes transformFromPosition2{\n            from{\n                transform: var(--item2-transform);\n                filter: var(--item2-filter);\n                opacity: var(--item2-opacity);\n            }\n        }\n        .carousel.next .item:nth-child(2){\n            animation: transformFromPosition3 0.7s ease-in-out 1 forwards;\n        }\n        @keyframes transformFromPosition3{\n            from{\n                transform: var(--item3-transform);\n                filter: var(--item3-filter);\n                opacity: var(--item3-opacity);\n            }\n        }\n        .carousel.next .item:nth-child(3){\n            animation: transformFromPosition4 0.9s ease-in-out 1 forwards;\n        }\n        @keyframes transformFromPosition4{\n            from{\n                transform: var(--item4-transform);\n                filter: var(--item4-filter);\n                opacity: var(--item4-opacity);\n            }\n        }\n        .carousel.next .item:nth-child(4){\n            animation: transformFromPosition5 1.1s ease-in-out 1 forwards;\n        }\n        @keyframes transformFromPosition5{\n            from{\n                transform: var(--item5-transform);\n                filter: var(--item5-filter);\n                opacity: var(--item5-opacity);\n            }\n        }\n        /* previous */\n        .carousel.prev .list .item:nth-child(5){\n            animation: transformFromPosition4 0.5s ease-in-out 1 forwards;\n        }\n        .carousel.prev .list .item:nth-child(4){\n            animation: transformFromPosition3 0.7s ease-in-out 1 forwards;\n        }\n        .carousel.prev .list .item:nth-child(3){\n            animation: transformFromPosition2 0.9s ease-in-out 1 forwards;\n        }\n        .carousel.prev .list .item:nth-child(2){\n            animation: transformFromPosition1 1.1s ease-in-out 1 forwards;\n        }\n        @keyframes transformFromPosition1{\n            from{\n                transform: var(--item1-transform);\n                filter: var(--item1-filter);\n                opacity: var(--item1-opacity);        \n            }\n        }\n        \n        /* detail  */\n        .carousel .list .item .detail{\n            opacity: 0;\n            pointer-events: none;\n        }\n        /* showDetail */\n        .carousel.showDetail .list .item:nth-child(3),\n        .carousel.showDetail .list .item:nth-child(4){\n            left: 100%;\n            opacity: 0;\n            pointer-events: none;\n        }\n        .carousel.showDetail .list .item:nth-child(2){\n            width: 100%;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .introduce{\n            opacity: 0;\n            pointer-events: none;\n        }\n        .carousel.showDetail .list .item:nth-child(2) img{\n            right: 50%;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail{\n            opacity: 1;\n            width: 50%;\n            position: absolute;\n            right: 0;\n            top: 50%;\n            transform: translateY(-50%);\n            text-align: right;\n            pointer-events: auto;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .title{\n            font-size: 4em;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .specifications{\n            display: flex;\n            gap: 10px;\n            width: 100%;\n            border-top: 1px solid #5553;\n            margin-top: 20px;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .specifications div{\n            width: 90px;\n            text-align: center;\n            flex-shrink: 0;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .specifications div p:nth-child(1){\n            font-weight: bold;\n        }\n        .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button{\n            font-family: Poppins;\n            background-color: transparent;\n            border: 1px solid #5555;\n            margin-left: 5px;\n            padding: 5px 10px;\n            letter-spacing: 2px;\n            font-weight: 500;\n        }\n        .carousel.carousel.showDetail .list .item:nth-child(2) .checkout button:nth-child(2){\n            background-color: #693EFF;\n            color: #eee;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail  .title,\n        .carousel.showDetail .list .item:nth-child(2) .detail  .des,\n        .carousel.showDetail .list .item:nth-child(2) .detail .specifications,\n        .carousel.showDetail .list .item:nth-child(2) .detail .checkout{\n            opacity: 0;\n            animation: showContent 0.5s 1s ease-in-out 1 forwards;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail  .des{\n            animation-delay: 1.2s;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .specifications{\n            animation-delay: 1.4s;\n        }\n        .carousel.showDetail .list .item:nth-child(2) .detail .checkout{\n            animation-delay: 1.6s;\n        }\n        .arrows{\n            position: absolute;\n            bottom: 10px;\n            width: 1140px;\n            max-width: 90%;\n            display: flex;\n            justify-content: space-between;\n            left: 50%;\n            transform: translateX(-50%);\n        }\n        #prev,\n        #next{\n            width: 40px;\n            height: 40px;\n            border-radius: 50%;\n            font-family: monospace;\n            border: 1px solid #5555;\n            font-size: large;\n            left: 1%;\n            bottom:35vh;\n            position: absolute;\n        }\n        #next{\n            left: unset;\n            right: 1%;\n            bottom:35vh;\n            position: absolute;\n        }\n        #back{\n            position: absolute;\n            z-index: 100;\n            bottom: 30vh;\n            left: 50%;\n            transform: translateX(-50%);\n            border: none;\n            border-bottom: 1px solid #555;\n            font-family: Poppins;\n            font-weight: bold;\n            letter-spacing: 3px;\n            background-color: transparent;\n            padding: 10px;\n            /* opacity: 0; */\n            transition: opacity 0.5s;\n        }\n        .carousel.showDetail #back{\n            opacity: 1;\n        }\n        .carousel.showDetail #prev,\n        .carousel.showDetail #next{\n            opacity: 0;\n            pointer-events: none;\n        }\n        .carousel::before{\n            width: 500px;\n            height: 300px;\n            content: '';\n            background-image: linear-gradient(70deg, #DC422A, blue);\n            position: absolute;\n            z-index: -1;\n            border-radius: 20% 30% 80% 10%;\n            filter: blur(150px);\n            top: 50%;\n            left: 50%;\n            transform: translate(-10%, -50%);\n            transition: 1s;\n        }\n        .carousel.showDetail::before{\n            transform: translate(-100%, -50%) rotate(90deg);\n            filter: blur(130px);\n        }\n        @media screen and (max-width: 991px){\n            /* ipad, tablets */\n            .carousel .list .item{\n                width: 90%;\n            }\n            .carousel.showDetail .list .item:nth-child(2) .detail .specifications{\n                overflow: auto;\n            }\n            .carousel.showDetail .list .item:nth-child(2) .detail .title{\n                font-size: 2em;\n            }\n        }\n        @media screen and (max-width: 767px){\n            /* mobile */\n            .carousel{\n                height: 600px;\n            }\n            .carousel .list .item{\n                width: 100%;\n                font-size: 10px;\n            }\n            \n            .carousel .list{\n                height: 100%;\n            }\n            .carousel .list .item:nth-child(2) .introduce{\n                width: 50%;\n            }\n            \n            .carousel .list .item img{\n                width: 40%;\n            }\n            .carousel.showDetail .list .item:nth-child(2) .detail{\n                backdrop-filter: blur(10px);\n                font-size: small;\n            }\n            .carousel .list .item:nth-child(2) .introduce .des,\n            .carousel.showDetail .list .item:nth-child(2) .detail .des{\n                height: 100px;\n                overflow: auto;\n            }\n            .carousel.showDetail .list .item:nth-child(2) .detail .checkout{\n                display: flex;\n                width: max-content;\n                float: right;\n            }\n        }"
    }}
  />
  <header>
    <div className="logo" />
    <nav></nav>
  </header>
  <div className="carousel">
    <div className="list">
      <div className="item">
        <img src="img1.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="img2.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="img3.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="img4.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="img5.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="item">
        <img src="img6.png" />
        <div className="introduce">
          <div className="title">DESIGN SLIDER</div>
          <div className="topic">Aerphone</div>
          <div className="des">
            {/* 20 lorem */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            laborum cumque dignissimos quidem atque et eligendi aperiam
            voluptates beatae maxime.
          </div>
          <button className="seeMore">SEE MORE ↗</button>
        </div>
        <div className="detail">
          <div className="title">Aerphone GHTK</div>
          <div className="des">
            {/* lorem 50 */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            reiciendis suscipit nobis nulla animi, modi explicabo quod corrupti
            impedit illo, accusantium in eaque nam quia adipisci aut distinctio
            porro eligendi. Reprehenderit nostrum consequuntur ea! Accusamus
            architecto dolores modi ducimus facilis quas voluptatibus! Tempora
            ratione accusantium magnam nulla tenetur autem beatae.
          </div>
          <div className="specifications">
            <div>
              <p>Used Time</p>
              <p>6 hours</p>
            </div>
            <div>
              <p>Charging port</p>
              <p>Type-C</p>
            </div>
            <div>
              <p>Compatible</p>
              <p>Android</p>
            </div>
            <div>
              <p>Bluetooth</p>
              <p>5.3</p>
            </div>
            <div>
              <p>Controlled</p>
              <p>Touch</p>
            </div>
          </div>
          <div className="checkout">
            <button>ADD TO CART</button>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
    <div className="arrows">
      <button id="prev">&lt;</button>
      <button id="next">&gt;</button>
      <button id="back">Back ↗</button>
    </div>
  </div>
</>

    </div>
  )
}

export default Newpage
