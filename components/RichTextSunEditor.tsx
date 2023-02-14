import React from 'react';
import dynamic from "next/dynamic";
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});
interface SunEditorProps {
    data: any;
    setData: any;
}
function RichTextSunEditor(props: SunEditorProps) {

    return (
        <SunEditor height="500px" defaultValue={props.data}
            onChange={(event) => props.setData(event)}
            
            setOptions={{
                buttonList: [
                    [
                        'fullScreen',
                        'undo',
                        'redo',
                        'font',
                        'fontSize',
                        'bold',
                        'underline',
                        'italic',
                        'strike',
                        'list',
                        'table',
                        'subscript',
                        'superscript',
                        'removeFormat',
                        'fontColor',
                        'hiliteColor',
                        'outdent',
                        'horizontalRule',
                        'link',
                        'image',
                        'video',
                        'audio',
                        'showBlocks',
                        'codeView',
                        'preview',
                        'template',
                        'lineHeight',
                        'textStyle',
                        'imageGallery'
                    ]
                ]
            }} />
    );
};
export default RichTextSunEditor;