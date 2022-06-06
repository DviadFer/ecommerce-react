import Commerce from '@chec/commerce.js'

//REACT_APP_CHEC_PUBLIC_KEY así es como llame a la variable que encapsula la clave para conectarse a la API rest commerce.js
//Estará almacenada en un fichero .env (eviromental variables) oculto
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);