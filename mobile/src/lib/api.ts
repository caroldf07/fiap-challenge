import axios from 'axios'

export const api = axios.create({
  /* Para a conexão entre app e backend funcionar, você deve inserir  o seu
  endereço de IPV4 aqui. Para saber qual é o seu endereço, basta executar o
  comando "ipconfig" no terminal e copiar o endereço IPV4.
  */
  baseURL: 'http://192.168.0.14:3333',
})
