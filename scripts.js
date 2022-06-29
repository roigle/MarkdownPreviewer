/*
Libraries used on CodePen:
- https://cdnjs.cloudflare.com/ajax/libs/react/18.1.0/umd/react.production.min.js
- https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.1.0/umd/react-dom.production.min.js
- https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.16/marked.min.js
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: placeholder,
      height: `600px`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const height = this.divElement.clientHeight;
    this.setState({
      textarea: event.target.value,
      height
    });
  }

  // Change code above this line
  render() {
    return (
      <div id="wrapper">
        <div id="editor-div">
          <div class="section-titles" id="editor-title"><i class="fas fa-edit"></i> Editor</div>
          <textarea id="editor" value ={this.state.textarea} onChange ={this.handleChange} style={{ height: `${ this.state.height }px` }}></textarea>
        </div>

        <div id="preview-div">
          <div class="section-titles" id="preview-title"><i class="fas fa-eye"></i> Previewer</div>
          <div id="preview" ref={ (divElement) => { this.divElement = divElement } } dangerouslySetInnerHTML={{ __html: marked.parse(this.state.textarea, {breaks: true}) }}></div>
        </div>
        
      </div>
    );
  }
};

const placeholder = `# Hello, World! I am an H1!

## And I am a subheading!

If you're interested, you can see the requirements of this project [here](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

Want to write some **inline code**? Do it like this: \`<p>Hello, World!</p>\` Neat, right?

Or write a whole **code block** like this:

\`\`\`
<h1>Hello, World!</h1>
<p>I hope all is well!</p>
\`\`\`

You can also write a **list** of cool things like this:
- Coffee
- Dogs
- Pie

I know what you're thinking by now:
> This is a great way to see on the fly how my markdown text will look!

What more can be said except:
![Awesome](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teclasap.com.br%2Fwp-content%2Fuploads%2F2020%2F02%2Fawesome_Fotor.jpg&f=1&nofb=1)`;

ReactDOM.render(<App />, document.getElementById('app'));
