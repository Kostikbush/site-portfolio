  const printText = (text: string, element: string, setElement: Function) => {
    if(text.length > 0){
      setElement(element+=text[0])
      setTimeout(()=> {
        printText(text.slice(1), element, setElement)
      },50)
    }
  }

  export const printingText = (element:string, veriable:string, text: string, setText: Function) => {
    const domElement = document.querySelector(`.${element}`)?.textContent || null;
    if(domElement?.trim().length === 0 || domElement === null){
      printText(veriable, text, setText)
    }
  }