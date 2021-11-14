import React, { useRef, useEffect, useState } from 'react'

const Cursor = () => {
    const cursorRef = useRef(null);
    const [click, setClick] = useState(false);
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });

        const addListeners = () => {
            document.addEventListener('mousedown', mDown);
            document.addEventListener('mouseup', mUp);
            document.addEventListener('mouseover', function(ev) {
                // if(ev.target.tagName.toLowerCase() === 'a') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'button') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'img') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'input') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'span') {
                //     setLinkHover(true);
                // }
                switch(true) {
                    case ev.target.tagName.toLowerCase() === 'a':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'button':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'canvas':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'img':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'input':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'textarea':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'span':
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-excerpt'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-title'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-date'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-arrow'):
                        setLinkHover(true);
                        break;
                }
            }, false);
            document.addEventListener('mouseout', function(ev) {
                // if(ev.target.tagName.toLowerCase() === 'a') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'button') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'img') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'input') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'span') {
                //     setLinkHover(false);
                // }
                switch(true) {
                    case ev.target.tagName.toLowerCase() === 'a':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'button':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'canvas':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'img':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'input':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'textarea':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'span':
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-excerpt'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-title'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-date'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-arrow'):
                        setLinkHover(false);
                        break;
                }
            }, false);
        };

        const removeListeners = () => {
            document.removeEventListener('mousedown', mDown);
            document.removeEventListener('mouseup', mUp);
            document.removeEventListener('mouseover', function(ev) {
                // if(ev.target.tagName.toLowerCase() === 'a') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'button') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'img') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'input') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
                //     setLinkHover(true);
                // } else if(ev.target.tagName.toLowerCase() === 'span') {
                //     setLinkHover(true);
                // }
                switch(true) {
                    case ev.target.tagName.toLowerCase() === 'a':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'button':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'canvas':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'img':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'input':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'textarea':
                        setLinkHover(true);
                        break;
                    case ev.target.tagName.toLowerCase() === 'span':
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-excerpt'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-title'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-date'):
                        setLinkHover(true);
                        break;
                    case ev.target.matches('.recently-published__post-arrow'):
                        setLinkHover(true);
                        break;
                }
            }, false);
            document.removeEventListener('mouseout', function(ev) {
                // if(ev.target.tagName.toLowerCase() === 'a') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'button') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'canvas') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'img') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'input') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'textarea') {
                //     setLinkHover(false);
                // } else if(ev.target.tagName.toLowerCase() === 'span') {
                //     setLinkHover(false);
                // }
                switch(true) {
                    case ev.target.tagName.toLowerCase() === 'a':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'button':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'canvas':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'img':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'input':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'textarea':
                        setLinkHover(false);
                        break;
                    case ev.target.tagName.toLowerCase() === 'span':
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-excerpt'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-title'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-date'):
                        setLinkHover(false);
                        break;
                    case ev.target.matches('.recently-published__post-arrow'):
                        setLinkHover(false);
                        break;
                }
            }, false);
        };

        const mDown = () => {
            setClick(true);
        };

        const mUp = () => {
            setClick(false);
        };

        addListeners();
        return () => removeListeners();
    }, []);

    return (
        <>
            <div 
                className={
                    'app-cursor ' + 
                    (click ? 'app-cursor--clicked ' : ' ') + 
                    (linkHover ? 'app-cursor--hovered ' : ' appleBottomJean')
                } 
                ref={cursorRef} 
            />
        </>
    )
}

export default Cursor