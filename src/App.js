import React from 'react';
import './App.css';
import * as data from './data.json'


class App extends React.Component {
  state = {
    menu: {},
    items: [],
    subitems: [],
    showsubitems: false,
    selectlist:[]
  }
  componentDidMount() {
    var menu = data.menus.find(f => f.key === "main");

    this.setState({ menu: menu, items: menu.items })
  }
  menuleriGoster(item) {
    if (item.items && item.items.length)
      this.setState({ menu: item, subitems: item.items, showsubitems: true })
  }
  yemeklerimiz(i, index) {
    var secilimi = this.state.selectlist.find(f=>f === i);
    return <li onClick={() => this.menuleriGoster(i)} key={"y_" + index} className="wow fadeInLeft" data-wow-duration="300ms" data-wow-delay="400ms">
      <div className="blog-img">
        <img src={i.image} alt="blog-img" />
      </div>
      <div className="content-right">
        <h3>{i.name}</h3>
        <p>{i.price ? "₺ " + i.price : i.caption}</p>
        { this.state.showsubitems && !i.subitems ? <button onClick={()=>secilimi?this.cikar(i):this.ekle(i)} className="btn btn-default wow bounceIn" data-wow-duration="500ms" 
        data-wow-delay="1200ms" role="button">{secilimi ? "Çıkar":"Ekle"}</button>: <div></div>}
      </div>
    </li>
  }
  ekle(item){
    this.state.selectlist.push(item)
    this.setState({selectlist:this.state.selectlist})
  }
  cikar(item){
    var selectlist = this.state.selectlist.filter(f=> f != item)
    this.setState({selectlist})
  }
  render() {

    return (
      <div className="App">
        <div>
          {/*
	header-img start 
	============================== */}
          <section id="hero-area">
            <img className="img-responsive" src="images/header.jpg" alt="" />
          </section>
          {/*
    Header start 
	============================== */}
          <nav id="navigation">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                          </button>
                          <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="Logo" />
                          </a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav navbar-right" id="top-nav">
                            <li><a href="#hero-area">Anasayfa</a></li>
                            <li><a href="#about-us">Hakkımızda</a></li>
                            <li><a href="#blog">Tariflerimiz</a></li>
                            <li><a href="#price">Menümüz</a></li>
                            <li><a href="#subscribe">Haberlerimiz</a></li>
                            <li><a href="#contact-us">İletişim</a></li>
                          </ul>
                        </div>{/* /.navbar-collapse */}
                      </div>{/* /.container-fluid */}
                    </nav>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .container close */}
          </nav>{/* header close */}
          {/*
    Slider start
    ============================== */}
          <section id="slider">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                    <div className="title">
                      <h3>Lezzetli <span>Yemeklerimiz</span></h3>
                    </div>
                    <div id="owl-example" className="owl-carousel">
                      {
                        this.state.items.map((f, index) => <div key={"y_" + index}>
                          <img className="img-responsive" src={f.image} alt="" />
                        </div>)
                      }

                    </div>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .container close */}
          </section>{/* slider close */}
          {/*
    about-us start
    ============================== */}
          <section id="about-us">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <img className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms" src="images/cooker-img.png" alt="cooker-img" />
                    <h1 className="heading wow fadeInUp" data-wow-duration="400ms" data-wow-delay="500ms">Bizim <span>Restoranımızın</span> <br /> Yemekleri <span>Çok Lezzetlidir</span>
                    </h1>
                    <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="600ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .containe close */}
          </section>{/* #call-to-action close */}
          {/*
    blog start
    ============================ */}
          <section id="blog">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <h1 className="heading">Bizim <span>Lezzetli</span> Ana <span>Yemeklerimiz</span></h1>
                    <ul>
                      {this.state.showsubitems ? this.state.subitems.map((i, index) => this.yemeklerimiz(i, index))
                        : this.state.items.map((i, index) => this.yemeklerimiz(i, index))}

                    </ul>
                    <a className="btn btn-default btn-more-info wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#price" role="button">Şipariş Listesi</a>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .containe close */}
          </section>{/* #blog close */}
          {/*
    price start
    ============================ */}
          {this.state.selectlist.length?<section id="price" >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <div className="pricing-list">
                      <div className="title">
                        <h3>Sipariş <span>Listesi</span></h3>
                      </div>
                      <ul>
                        {this.state.selectlist.map((i, index) => <li key={"y_" + index} className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                          <div className="item">
                            <div className="item-title">
                              <h2>{i.name}</h2>
                              <div className="border-bottom" />
                              <span>₺ {i.price}</span>
                            </div>
                            <p>{i.caption}</p>
                          </div>
                        </li>)}
                        <li className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
                          <div className="item">
                            <div className="item-title">
                              <h2>Toplam</h2>
                              <div className="border-bottom" />
                              <span>₺ {this.state.selectlist.map(f=>f.price).reduce((a,b)=>parseFloat(a)+parseFloat(b),0)}</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <a className="btn btn-default pull-right wow bounceIn" data-wow-duration="500ms" data-wow-delay="1200ms" href="#" role="button">Sipariş Ver</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>:null}
          {/*
    subscribe start
    ============================ */}
          <section id="subscribe">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <h1 className=" heading wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms"> Bizi <span>TAKİP</span> Edin</h1>
                    <p className="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    <form className="form-inline">
                      <div className="form-group">
                        <div className="input-group">
                          <input type="text" className="form-control" id="exampleInputAmount" placeholder="Takip etmek için mail adresinizi giriniz..." />
                          <div className="input-group-addon">
                            <button className="btn btn-default" type="submit">Takip Et</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .containe close */}
          </section>{/* #subscribe close */}
          {/*
    CONTACT US  start
    ============================= */}
          <section id="contact-us">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="block">
                    <h1 className="heading wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">Bizimle <span>İletişime Geçin</span></h1>
                    <h3 className="title wow fadeInLeft" data-wow-duration="500ms" data-wow-delay="300ms">EPosta Bildirimi için <span>Kayıt Olun</span> </h3>
                    <form>
                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="600ms">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Adınızı girin..." />
                      </div>
                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="800ms">
                        <input type="text" className="form-control" placeholder="Eposta adresinizi girin ..." />
                      </div>
                      <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1000ms">
                        <textarea className="form-control" rows={3} placeholder="Mesajınızı yazın..." defaultValue={""} />
                      </div>
                    </form>
                    <a className="btn btn-default wow bounceIn" data-wow-duration="500ms" data-wow-delay="1300ms" href="#" role="button">Gönder</a>
                  </div>
                </div>{/* .col-md-12 close */}
              </div>{/* .row close */}
            </div>{/* .container close */}
          </section>{/* #contact-us close */}
          {/*
    footer  start
    ============================= */}
          <section id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="block wow fadeInLeft" data-wow-delay="200ms">
                    <h3>İletişim </h3>
                    <div className="info">
                      <ul>
                        <li>
                          <h4><i className="fa fa-phone" />Telefon</h4>
                          <p>+90 (537) 256 26 09 </p>
                        </li>
                        <li>
                          <h4><i className="fa fa-envelope" />E Posta</h4>
                          <p>baburfurkan1@gmail.com</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 close */}
                <div className="col-md-4">
                  <div className="block wow fadeInLeft" data-wow-delay="700ms">
                    <h3>Adresimiz </h3>
                    <div className="blog">
                      <ul>
                        <li>
                          <h4><a href="#">Ankara</a></h4>
                          <p>Gül sok. Etlik mah. Keçiören / Ankara</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 close */}
                <div className="col-md-4">
                  <div className="block wow fadeInLeft" data-wow-delay="1100ms">
                    <div className="social-media-link">
                      <h3>Sosyal Medya <span>Adreslerimiz</span></h3>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* .col-md-4 close */}
              </div>{/* .row close */}
            </div>{/* .containe close */}
          </section>{/* #footer close */}
          {/*
    footer-bottom  start
    ============================= */}
          <footer id="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="block">
                    <p>Copyright © 2020 Furkan Bezci</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}

export default App;
