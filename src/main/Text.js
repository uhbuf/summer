import React from 'react';
class Text extends React.Component{
    constructor(){
        super();
    }
    drag(ev){
        ev.dataTransfer.setData("Text",ev.target.id);
    }
    componentDidMount=async()=>{
        let text="I play the guitar";
        let words=text.split(' ');
        let elem=document.querySelectorAll('.draggable')[0];
        for(let i=0;i<words.length;i++){
            let textNode = document.createElement('span');
            textNode.id = 'word_' + i;
            textNode.draggable = true;
            textNode.ondragstart = this.drag;
            textNode.appendChild(document.createTextNode(words[i] + ' '));
            elem.appendChild(textNode)
        }
    }
    render(){
        return(
            <div className='draggable'></div>
        )
    }
}
export default Text;