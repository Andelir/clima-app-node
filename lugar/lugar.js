const axios = require('axios');

const getLugarLatLng = async ( dir) => {
    const encodeUlr = encodeURI( dir );
  
    
    const instance = axios.create({
        baseURL: `https://location-api.p.rapidapi.com/api/countries?countryCode=${ encodeUlr}`,
        headers: {'x-rapidapi-key': '32da13b336msh2d256a3c1b870ffp1ff18cjsn59d00de92f66'}
      });
    
      const resp = await instance.get();

      if ( resp.data.length === 0 ){
          throw new Error(`No hay resultados para ${ dir }`);
      }
     
     const data = resp.data;
      for (iterador of data){
        // console.log(iterador.name);
        // console.log(iterador.latitude);
        // console.log(iterador.longitude);
        var direccion = iterador.name;
        var lat = iterador.latitude;
        var lng = iterador.longitude;
        
      }
    return{
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}