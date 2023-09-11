const code = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>

    <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/image@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/nested-list@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/code@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/warning@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/table@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/marker@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/raw@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest"></script>   
    <script src="https://cdn.jsdelivr.net/npm/@editorjs/paragraph@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/editorjs-text-alignment-blocktune@latest"></script>
    <script src="https://cdn.jsdelivr.net/npm/@calumk/editorjs-codeflask@latest"></script>
</head>
<body>
    <div id="editorjs"></div>
    <script>
        const editor = new EditorJS({
            holder: 'editorjs',
            autofocus: true,
            placeholder: 'Start typing here..., or press TAB to open the toolbar!',
            inlineToolbar: true,

            onChange: (api, data) => {
              api.saver.save().then((outputData) => {
                window.top.postMessage({
                  type: "UPDATE_CONTENT",
                  content: outputData,
                }, "*");
              }).catch((error) => {
                console.log('Saving failed: ', error)
              });
            },

            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                    tunes: ['anyTuneName'],
                },
                paragraph: {
                  class: Paragraph,
                  inlineToolbar: true,
                  tunes: ['anyTuneName'],
                },
                anyTuneName: {
                  class: AlignmentBlockTune,
                  config:{
                    default: "left"
                  },
                },
                checklist: {
                    class: Checklist
                },
                list: {
                    class: NestedList
                },
                quote: {
                    class: Quote
                },
                embed: {
                    class: Embed
                    // TODO: implement embeding widgets
                },
                delimiter: Delimiter,
                warning: Warning,
                table: Table,
                marker: Marker,
                raw: RawTool,
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            // TODO: implement social image upload to ipfs
                            // https://github.com/editor-js/image
                        }
                    }
                },
                code : editorjsCodeflask,
                inlineCode: {
                  class: InlineCode,
                },
            },
        });
        
        window.addEventListener("message", (event) => {
            editor.isReady.then(() => {
              console.log(event.data.content);
            });
        });
    </script>
</body>
</html>
`;

const handleMessage = (m) => {
  if (m.type === "UPDATE_CONTENT") {
    props.handleContentChange(m.content);
  }
};

return (
  <iframe
    className="w-100 h-100"
    style={{
      minHeight: "300px",
      minWidth: "300px",
    }}
    srcDoc={code}
    message={{
      content: props.content || "",
    }}
    onMessage={handleMessage}
  />
);
