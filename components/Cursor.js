import React, { useRef, useEffect, useState } from 'react'

const Cursor = () => {
    const [hover, setHover] = useState(false);

    const secondaryCursor = useRef(null);
    const mainCursor = useRef(null);
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    useEffect(() => {
        document.addEventListener("mousemove", event => {
            const { clientX, clientY } = event;
            const mouseX = clientX;
            const mouseY = clientY;

            positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
            mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
        });

        return () => {};
    }, []);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;
            if(!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.09;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.09;
                positionRef.current.destinationX += distanceX;
                positionRef.current.destinationY += distanceY;
            }
            // else {
            //     positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
            //     positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
            //     if(
            //         Math.abs(positionRef.current.distanceX) +
            //         Math.abs(positionRef.current.distanceY) < 0.1
            //     ) {
            //         positionRef.current.destinationX += mouseX;
            //         positionRef.current.destinationY += mouseY;
            //     } else {
            //         positionRef.current.destinationX += distanceX;
            //         positionRef.current.destinationY += distanceY;
            //     }
            // }
            secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };
        followMouse();
    }, []);
    
    useEffect(() => {
        const eventElements = [ 'a', 'button', 'canvas', 'img', 'input', 'textarea', 'span' ]
        const addListeners = () => {
            document.addEventListener('mouseover', e => {
                for(const el of eventElements) {
                    if(e.target.tagName.toLowerCase() === el) {
                        setHover(true);
                    }
                }
            }, false);

            document.addEventListener('mouseout', e => {
                for(const el of eventElements) {
                    if(e.target.tagName.toLowerCase() === el) {
                        setHover(false);
                    }
                }
            }, false);
        }

        const removeListeners = () => {
            document.removeEventListener('mouseover', e => {
                for(const el of eventElements) {
                    if(e.target.tagName.toLowerCase() === el) {
                        setHover(true);
                    }
                }
            }, false);

            document.addEventListener('mouseout', e => {
                for(const el of eventElements) {
                    if(e.target.tagName.toLowerCase() === el) {
                        setHover(false);
                    }
                }
            }, false);
        }

        addListeners();
        return () => removeListeners();
    }, []);

    // useEffect(() => {
    //     document.addEventListener("mousemove", (event) => {
    //         const { clientX, clientY } = event;
    //         const mouseX = clientX - cursorRef.current.clientWidth / 2;
    //         const mouseY = clientY - cursorRef.current.clientHeight / 2;

    //         cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    //     });

    //     const addListeners = () => {
    //         document.addEventListener('mousedown', mDown);
    //         document.addEventListener('mouseup', mUp);
    //         document.addEventListener('mouseover', function(ev) {
    //             // if(ev.target.tagName.toLowerCase() === 'a') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'button') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'img') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'input') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'span') {
    //             //     setLinkHover(true);
    //             // }
    //             switch(true) {
    //                 case ev.target.tagName.toLowerCase() === 'a':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'button':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'canvas':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'img':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'input':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'textarea':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'span':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-excerpt'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-title'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-date'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-arrow'):
    //                     setLinkHover(true);
    //                     break;
    //             }
    //         }, false);
    //         document.addEventListener('mouseout', function(ev) {
    //             // if(ev.target.tagName.toLowerCase() === 'a') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'button') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'img') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'input') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'span') {
    //             //     setLinkHover(false);
    //             // }
    //             switch(true) {
    //                 case ev.target.tagName.toLowerCase() === 'a':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'button':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'canvas':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'img':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'input':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'textarea':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'span':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-excerpt'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-title'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-date'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-arrow'):
    //                     setLinkHover(false);
    //                     break;
    //             }
    //         }, false);
    //     };

    //     const removeListeners = () => {
    //         document.removeEventListener('mousedown', mDown);
    //         document.removeEventListener('mouseup', mUp);
    //         document.removeEventListener('mouseover', function(ev) {
    //             // if(ev.target.tagName.toLowerCase() === 'a') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'button') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'img') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'input') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
    //             //     setLinkHover(true);
    //             // } else if(ev.target.tagName.toLowerCase() === 'span') {
    //             //     setLinkHover(true);
    //             // }
    //             switch(true) {
    //                 case ev.target.tagName.toLowerCase() === 'a':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'button':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'canvas':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'img':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'input':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'textarea':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'span':
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-excerpt'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-title'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-date'):
    //                     setLinkHover(true);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-arrow'):
    //                     setLinkHover(true);
    //                     break;
    //             }
    //         }, false);
    //         document.removeEventListener('mouseout', function(ev) {
    //             // if(ev.target.tagName.toLowerCase() === 'a') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'button') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'img') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'input') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
    //             //     setLinkHover(false);
    //             // } else if(ev.target.tagName.toLowerCase() === 'span') {
    //             //     setLinkHover(false);
    //             // }
    //             switch(true) {
    //                 case ev.target.tagName.toLowerCase() === 'a':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'button':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'canvas':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'img':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'input':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'textarea':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.tagName.toLowerCase() === 'span':
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-excerpt'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-title'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-date'):
    //                     setLinkHover(false);
    //                     break;
    //                 case ev.target.matches('.recently-published__post-arrow'):
    //                     setLinkHover(false);
    //                     break;
    //             }
    //         }, false);
    //     };

    //     const mDown = () => {
    //         setClick(true);
    //     };

    //     const mUp = () => {
    //         setClick(false);
    //     };

    //     addListeners();
    //     return () => removeListeners();
    // }, []);

    return (
        <>
            <div className="secondary-cursor" ref={secondaryCursor}>
                <div className={'cursor-background ' + (hover ? 'cursor-background--hovered ' : '')}></div>
            </div>
            <div className="main-cursor" ref={mainCursor}>
                <div className="main-cursor-background"></div>
            </div>
        </>
    )
}

export default Cursor