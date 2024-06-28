'use client';

import { useState } from 'react';
import { FullpageContainer, FullpageSection } from '@shinyongjun/react-fullpage';
import '@shinyongjun/react-fullpage/css';
import Header from "../componets/Header.jsx";
import DashBoardSection2 from "../componets/DashBoardSection2.jsx";

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Header />
            <div className="dashboard_layout">
                <FullpageContainer
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    <FullpageSection>
                        <section id="section_1" className="section">
                            <div className="section_1_video">
                                <div className="video_wrap">
                                    <video autoPlay muted loop data-keepplaying data-autoplay playsInline className="video">
                                        <source src="/video/marvel.mp4" />
                                    </video>
                                </div>
                            </div>
                        </section>
                    </FullpageSection>
                    <FullpageSection>
                        <DashBoardSection2 />
                    </FullpageSection>
                    <FullpageSection>
                        <div>Section 3</div>
                    </FullpageSection>
                    <FullpageSection>
                        <div>Section 4</div>
                    </FullpageSection>
                    <FullpageSection isAutoHeight>
                        <footer>Footer</footer>
                    </FullpageSection>
                </FullpageContainer>
                <div className="dashboard_controller">
                    <button
                        type="button"
                        className={`${activeIndex === 0 ? 'active' : ''}`}
                        onClick={() => setActiveIndex(0)}
                    >1</button>
                    <button
                        type="button"
                        className={`${activeIndex === 1 ? 'active' : ''}`}
                        onClick={() => setActiveIndex(1)}
                    >2</button>
                    <button
                        type="button"
                        className={`${activeIndex === 2 ? 'active' : ''}`}
                        onClick={() => setActiveIndex(2)}
                    >3</button>
                    <button
                        type="button"
                        className={`${activeIndex === 3 ? 'active' : ''}`}
                        onClick={() => setActiveIndex(3)}
                    >4</button>
                </div>
            </div>
        </>
    );
}