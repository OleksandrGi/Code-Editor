import React, { useContext, useMemo, useEffect } from 'react';
import styles from './Preview.module.css';
import { EditorContext } from '../../context/context';

export default function Preview() {
    const { html, css, js } = useContext(EditorContext);

    const Document = useMemo(() => {
        if (!html && !css && !js) return
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
            </html>
        `;
    }, [html, css, js])

    useEffect(() => {
        console.log('Rendered document:', Document);
    }, [Document]);

    return (
        <div className={styles.content}>
            {
            Document ? 
                <iframe title="preview" className={styles.preview} srcDoc={Document} />
             : 
                <div className={styles.loading}>Your code will be displayed here</div>
            }
        </div>
    );
}
