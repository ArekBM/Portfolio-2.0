import React, { useState, useEffect } from 'react';
// import pdf from '../assets/emiyake.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Button from '../components/Button'
import downloadIcon from "../assets/download-btn-icon.svg";
import projectsPageImg from "../assets/projects-page.svg";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



const Resume = () => {

    const url = 'https://raw.githubusercontent.com/ArekBM/Portfolio/master/src/assets/emiyake.pdf';

    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages ] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    // function onDocumentSuccess({numPages}) {
    //     setNumPages(numPages)
    // }
    return (
        <div
            id='resume'
            className='min-h-screen relative'
            style={{
            background: `url(${projectsPageImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            }}
        >
            <div className='flex-1 flex flex-col gap-16 items-center justify-center'>
                <Button secondary icon={downloadIcon}>Download</Button>
                <div className='min-h-screen flex items-center justify-center relative'>
                    <Document file={url} className='justify-center' onLoadError={console.error} >
                        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </div>
            </div>
        </div>
        )
}

export default Resume