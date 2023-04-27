import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='modal-container'
            >
                <div className='upper-section'>
                    <h1>Huge Annoucement!</h1>
                    <p onClick={closeModal} className='close'>
                        &times;
                    </p>
                </div>
                <div className='middle-section'>
                    <h3>99 AI AGI GPT project book is out!</h3>
                    <p>Do you wish to read the book?</p>
                    <p>
                        I've published my book on gumroad, check
                        it out today!
                    </p>
                    <p>
                        I bring to you this book that delves deep into the fascinating field of Artificial General Intelligence (AGI) where you can learn about the latest breakthroughs in AI research, including advancements in machine learning, neural networks, and natural language processing.
                    </p>
                </div>
                <div className='lower-section'>
                    <a onClick={closeModal} className='modal-btn btn-red'>
                        Close
                    </a>
                    <a
                        href='https://shreeyan.gumroad.com/'
                        target='_blank'
                        rel='noreferrer'
                        className='modal-btn btn-green'
                    >
                        Start reading here
                    </a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
};

export default Modal;