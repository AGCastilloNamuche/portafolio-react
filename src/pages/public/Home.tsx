import { Link } from "react-router"
import starIcon from "../../assets/images/star-2.svg"
import iconPc from "../../assets/images/computer-pc.svg??raw";
import iconUserExperience from "../../assets/images/user-experience.svg??raw";
import iconReact from "../../assets/images/react.svg??raw";
import iconVue from "../../assets/images/vue.svg??raw";
import iconPython from "../../assets/images/python.svg??raw";
import iconDart from "../../assets/images/dart.svg??raw";
import iconTs from "../../assets/images/ts.svg??raw";
import iconFlutter from "../../assets/images/flutter.svg??raw";
import iconCodingGear from "../../assets/images/coding-gear.svg??raw";
import iconDocs from "../../assets/images/card_docs_icon_02.svg??raw";
import iconDocs2 from "../../assets/images/card_docs_icon_03.svg??raw";
import iconBlog from "../../assets/images/card_figma_icon_01.svg??raw";
import iconBlog2 from "../../assets/images/card_figma_icon_02.svg??raw";

const Home = () => {
    return (
        <div className="content">
            <div className="d-block m-auto text-center w-100 container-title mb-15">
                <h1 className="position-relative">
                    <span className="star-icon left">
                        <img src={starIcon} alt="" />
                    </span>
                    Hola. Soy Gian Pierre
                    <span className="star-icon right">
                        <img src={starIcon} alt="" />
                    </span>
                </h1>
                <div className="wrapper">
                    <p className="text-center grid-column-2 subtitle">
                        Ingeniero de sistemas, desarrollador front-end y backend,
                        Me apasiona crear experiencias que sean atractivas, accesibles y centradas en el usuario.
                    </p>
                </div>
            </div>
            {/* Container de información */}
            <div className="container-inf mb-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="card card-flat card-wrap bg-pink card-link">
                            <Link to="#">
                                <div className="card-flouris">
                                    <div className="card-icon-svg">
                                        <div className="d-flex align-center justify-space-between gap-4">
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconDocs }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconDocs2 }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="card-subtitle text-right">Mi portafolio</h3>
                                <h2 className="card-title text-right">Mis Proyectos</h2>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <Link to="#">
                            <div className="card border-radius-flat p-0 card-flat bg-mint card-link">
                                <div className="card-flouris">
                                    <div className="card-icon-svg">
                                        <div className="d-flex align-center justify-space-between gap-4">
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconPc }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconUserExperience }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconCodingGear }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-header mb-5">
                                    <h3 className="card-subtitle text-right">Trayectoria</h3>
                                    <h2 className="card-title text-right">Mi Experiencia</h2>
                                </div>

                                <div className="container-inner">
                                    <div className="toobar">
                                        <div className="logo-vs">
                                            <h1 className="text-h2 font-acorn m-0 p-0">A</h1>
                                        </div>
                                        <div className="d-flex align-center gap-2">
                                            <span className="circle"></span>
                                            <span className="circle"></span>
                                            <span className="circle"></span>
                                        </div>
                                    </div>
                                    <div className="main-area">
                                        <div className="edit-well">
                                            <div className="tab-bar">
                                                <div className="tab active">
                                                    <div className="fillname">main.tsx</div>
                                                    <div className="close-icon">
                                                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                                            <path d="M12.1465 5.14652C12.3418 4.95127 12.6583 4.95126 12.8535 5.14652C13.0487 5.34179 13.0488 5.65831 12.8535 5.85355L9.70705 9.00004L12.8535 12.1465C13.0488 12.3418 13.0488 12.6583 12.8535 12.8536C12.6583 13.0488 12.3418 13.0488 12.1465 12.8536L9.00002 9.70707L5.85354 12.8536C5.6583 13.0488 5.34177 13.0488 5.14651 12.8536C4.95125 12.6583 4.95125 12.3418 5.14651 12.1465L8.29299 9.00004L5.14651 5.85355C4.95125 5.6583 4.95126 5.34179 5.14651 5.14652C5.34177 4.95126 5.65828 4.95126 5.85354 5.14652L9.00002 8.29301L12.1465 5.14652Z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="tab fill-end"></div>
                                            </div>
                                            <div className="editor-area">
                                                <div className="editor-file">
                                                    <div className="pre">
                                                        <div className="code">
                                                            <div className="line">import React from 'react';</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <Link to="#">
                            <div className="card card-flat card-wrap bg-babyblue card-link">
                                <div className="card-flouris">
                                    <div className="card-icon-svg">
                                        <div className="d-flex align-center justify-space-between gap-4">
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconDart }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconReact }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconVue }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconTs }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconFlutter }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconPython }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="card-subtitle text-right">Herramientas</h3>
                                <h2 className="card-title text-right">Diseñar y desarrollar</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="lg:col-span-1 space-y-6">
                        <div className="card card-flat card-wrap bg-rust card-link">
                            <Link to="#">
                                <div className="card-flouris">
                                    <div className="card-icon-svg">
                                        <div className="d-flex align-center justify-space-between gap-4">
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconBlog }} ></div>
                                            <div className="icon-svg" dangerouslySetInnerHTML={{ __html: iconBlog2 }} ></div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="card-subtitle text-right">Blog</h3>
                                <h2 className="card-title text-right">Artículos</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Flujo de trabajo */}
            <div className="container-workflow">
                <h2 className="text-center text-h1">Flujo de trabajo</h2>
                <div className="wrapper mb-15">
                    <p className="text-center grid-column-2 subtitle">
                        Desarrollador full-stack. Creo experiencias atractivas, accesibles y centradas en el usuario. Con pasión por la creatividad y un ojo meticuloso para los detalles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="card card-wrap card-flat card-link bg-dark-white30">
                        <h1 className="count text-right text-green-300">01</h1>
                        <h3 className="card-subtitle text-right">Requisitos con el usuario</h3>
                        <h2 className="card-title text-right mb-2">Planificación</h2>

                        <p className="text-justify">Alineamos objetivos y alcance mediante entrevistas breves e investigación, definiendo requisitos y criterios de éxito.</p>
                    </div>

                    <div className="card card-wrap card-flat card-link bg-white30">
                        <h1 className="count text-right text-green-300">02</h1>
                        <h3 className="card-subtitle text-right">UI/UX + ARQUITECTURA</h3>
                        <h2 className="card-title text-right mb-2">Diseño</h2>

                        <p className="text-justify">
                            Transformo los requisitos en interfaces claras y una arquitectura sólida antes de empezar a construir.
                        </p>
                    </div>

                    <div className="card card-wrap card-flat card-link bg-rust30">
                        <h1 className="count text-right text-green-300">03</h1>
                        <h3 className="card-subtitle text-right">IMPLEMENTACIÓN FULL-STACK</h3>
                        <h2 className="card-title text-right mb-2">Desarrollo</h2>

                        <p className="text-justify">
                            Construyo de punta a punta: front-end, APIs, base de datos e integraciones, con entregas iterativas.
                        </p>
                    </div>

                    <div className="card card-wrap card-flat card-link bg-pink30">
                        <h1 className="count text-right text-green-300">04</h1>
                        <h3 className="card-subtitle text-right">QA + VALIDACIÓN</h3>
                        <h2 className="card-title text-right mb-2">Pruebas</h2>

                        <p className="text-justify">
                            Pruebo calidad, rendimiento y seguridad, corrigiendo errores y validando con escenarios reales.
                        </p>
                    </div>

                    <div className="card card-wrap card-flat card-link bg-babyblue30">
                        <h1 className="count text-right text-green-300">05</h1>
                        <h3 className="card-subtitle text-right">LANZAMIENTO + SOPORTE</h3>
                        <h2 className="card-title text-right mb-2">Entrega</h2>

                        <p className="text-justify">
                            Despliego el producto, documento lo esencial y doy soporte con mejoras continuas según feedback.
                        </p>
                    </div>

                    <div className="card card-wrap card-flat card-link bg-dark-white50">
                        <h1 className="count text-right text-green-300">06</h1>
                        <h3 className="card-subtitle text-right">PROTOTIPADO + MVP</h3>
                        <h2 className="card-title text-right mb-2">Iteración</h2>

                        <p className="text-justify">
                            Creo prototipos y un MVP para validar rápido, ajustar con feedback y priorizar lo que más impacta.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
