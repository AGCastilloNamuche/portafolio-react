const EditWell = () => {
    return (
        <div className="container-inner">
            <div className="toobar">
                <div className="logo-vs">
                    <h1 className="text-h2 font-acorn p-0">A</h1>
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
                                    <div className="line">
                                        <span className="keyword">import </span>{" "}
                                        <span className="keyword-red">React</span>{" "}
                                        <span className="keyword"> from </span>{" "}
                                        <span className="keyword-green">'react'</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">
                                        <span className="keyword">import </span>{" "}
                                        <span className="keyword-rust">{'{ '}</span>{" "}
                                        <span className="keyword-red">createRoot</span>{" "}
                                        <span className="keyword-rust">{' } '}</span>{" "}
                                        <span className="keyword">from </span>{" "}
                                        <span className="keyword-green">'react-dom/client'</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">
                                        <span className="keyword">import </span>{" "}
                                        <span className="keyword-rust">{'{ '}</span>{" "}
                                        <span className="keyword-red">RouterProvider</span>{" "}
                                        <span className="keyword-rust">{' } '}</span>{" "}
                                        <span className="keyword">from </span>{" "}
                                        <span className="keyword-green">"react-router"</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">
                                        <span className="keyword">import </span>{" "}
                                        <span className="keyword-rust">{'{ '}</span>{" "}
                                        <span className="keyword-red">router</span>{" "}
                                        <span className="keyword-rust">{' } '}</span>{" "}
                                        <span className="keyword">from </span>{" "}
                                        <span className="keyword-green">"./router"</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line"></div>

                                    <div className="line">
                                        <span className="keyword-yellow">window</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">addEventListener</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-green">"scroll"</span>
                                        <span className="keyword-rust">,</span>{" "}
                                        <span className="keyword-rust">{'() => {'}</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword">const </span>{" "}
                                        <span className="keyword-yellow">navbar</span>{" "}
                                        <span className="keyword-rust">=</span>{" "}
                                        <span className="keyword-yellow">document</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">querySelector</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-green">".nav-items"</span>
                                        <span className="keyword-rust">)</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword">if</span>{" "}
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-yellow">window</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">scrollY</span>{" "}
                                        <span className="keyword-rust">{'>'}</span>{" "}
                                        <span className="keyword-rust">50</span>
                                        <span className="keyword-rust">)</span>{" "}
                                        <span className="keyword-rust">{'{'}</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword-yellow">navbar</span>
                                        <span className="keyword-rust">?</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">classList</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">add</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-green">"scrolled"</span>
                                        <span className="keyword-rust">)</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword-rust">{'}'}</span>{" "}
                                        <span className="keyword">else</span>{" "}
                                        <span className="keyword-rust">{'{'}</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword-yellow">navbar</span>
                                        <span className="keyword-rust">?</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">classList</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">remove</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-green">"scrolled"</span>
                                        <span className="keyword-rust">)</span>
                                        <span className="keyword-rust">;</span>
                                    </div>

                                    <div className="line">&nbsp;&nbsp;&nbsp;<span className="keyword-rust">{'}'}</span></div>
                                    <div className="line"><span className="keyword-rust">{'});'}</span></div>

                                    <div className="line"></div>

                                    <div className="line">
                                        <span className="keyword">interface </span>{" "}
                                        <span className="keyword-yellow">Account</span>{" "}
                                        <span className="keyword-rust">{'{'}</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword-yellow">id</span>
                                        <span className="keyword-rust">:</span>{" "}
                                        <span className="keyword-blue">number</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword-yellow">displayName</span>
                                        <span className="keyword-rust">:</span>{" "}
                                        <span className="keyword-blue">string</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword-yellow">version</span>
                                        <span className="keyword-rust">:</span>{" "}
                                        <span className="keyword-rust">1</span>
                                    </div>

                                    <div className="line"><span className="keyword-rust">{'}'}</span></div>

                                    <div className="line"></div>

                                    <div className="line">
                                        <span className="keyword">function </span>{" "}
                                        <span className="keyword-blue">welcome</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-yellow">user</span>
                                        <span className="keyword-rust">:</span>{" "}
                                        <span className="keyword-yellow">Account</span>
                                        <span className="keyword-rust">)</span>{" "}
                                        <span className="keyword-rust">{'{'}</span>
                                    </div>

                                    <div className="line">
                                        &nbsp;&nbsp;&nbsp;<span className="keyword-yellow">console</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">log</span>
                                        <span className="keyword-rust">(</span>
                                        <span className="keyword-yellow">user</span>
                                        <span className="keyword-rust">.</span>
                                        <span className="keyword-blue">id</span>
                                        <span className="keyword-rust">)</span>
                                    </div>

                                    <div className="line"><span className="keyword-rust">{'}'}</span></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditWell