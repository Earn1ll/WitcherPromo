const getData = async(url) => {
    const responce =await fetch(url);
    if(responce.ok) {
        return responce.json();
    } else {
        throw `Ошибка,${responce.status}`;
    }
    
}

export default getData;