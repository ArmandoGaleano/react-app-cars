const body = document.querySelector('body');
const setBackgroundForBody = (add) => {
    if(add){
        body.setAttribute('class','backgroundPageCars');

    }else{
        body.removeAttribute('class');
    }
    
}
export default setBackgroundForBody;