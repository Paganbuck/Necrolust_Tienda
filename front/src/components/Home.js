import React, { Fragment } from 'react'
import MetaData from './layout/MetaData'

const Home = () => {
  return (
    <Fragment>
        <MetaData title={"Lo mejor en joyeia fina"}></MetaData>
        <h1 id='encabezado_productos'>Nuestros productos</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img1.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Anillo con Esmeralda</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">8 reviews</span>
                            </div>
                            <p className='card-text'>$250.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img2.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Collar con Esmeralda</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">10 reviews</span>
                            </div>
                            <p className='card-text'>$350.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img3.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Anillo imitación Esmeralda</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">5 reviews</span>
                            </div>
                            <p className='card-text'>$25.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img4.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Anillo corazón amatista</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">7 reviews</span>
                            </div>
                            <p className='card-text'>$250.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img5.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Argollas de matrimonio</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">11 reviews</span>
                            </div>
                            <p className='card-text'>$300.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/img6.png' alt='Imagen'/>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Anillo con rubi y circonios</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones">8 reviews</span>
                            </div>
                            <p className='card-text'>$270.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>Ver detalles</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}

export default Home