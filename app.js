 const coursesDiv=document.querySelector('#courses')
        const studentForm = document.querySelector('#studentform')
        const messagesDiv =document.querySelector('messages')
        document.querySelector('#student-status').addEventListener('change',function(e){
            console.log(e.target.value)
            const selectedCourse=e.target.value;
            if(selectedCourse=='ug'||selectedCourse=='pg'){
                coursesDiv.classList.remove('hidediv')}
                else if(selectedCourse=='select'){
                   coursesDiv.classList.add('hidediv')
                } 
            })
                studentForm.addEventListener('submit',function(e){
                        let message =""
                    e.preventDefault()
                    const formObj=e.target;
                    const sub1 = parseInt(formObj.elements['sub1'].value)
                    const sub2 = parseInt(formObj.elements['sub2'].value)
                    const sub3 = parseInt(formObj.elements['sub3'].value)
                    const sub4 = parseInt(formObj.elements['sub4'].value)
                    const sub5 = parseInt(formObj.elements['sub5'].value)
                    const avg = (sub1+sub2+sub3+sub4+sub5)/5
                    
                
                    if(avg > 3.0){
                       let message='Congratulations, You are eligble'
                        const messageElem = createMessageDom(message)
                        const linkElem = createLinkDom();
                        messagesDiv.appendChild(messageElem)
                        messagesDiv.appendChild(linkElem)
                    }
                    
                    else{
                        message = 'Sorry, but you were not elegible for this position'
                        const messageElem = createMessageDom(message)
                        messagesDiv.appendChild(messageElem)
                    }
                })
                    function createMessageDom(message){
                        const divelem= document.createElement('div')
                        const p = document.createElement('p');
                        p.innerText=message
                        divelem.appendChild(p)
                        return divelem; 
                    }
                        function createLnkDom(message){
                         const div = document.createElement('div')
                         const link = document.createElement('a');
                         link.innerText ='Click here to submit application.'
                         link.setAttribute('href','/')
                         div.appendChild(link)
                         return div;
                        
                        }        
                        

                    